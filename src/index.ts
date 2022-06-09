import { Hand } from "cerke_hands_and_score";
import { AbsoluteColumn, AbsoluteCoord, AbsoluteRow, Color, NormalMove, Profession, Season } from "cerke_online_api";
import { munchBracketedCoord, munchCoord, munchFromHand as munchFromHopZuo, munchHand } from "./munchers";
import { Munch, liftM2, liftM3, sepBy1, string } from "./munch_monad";

type Parsed = { starting_players: string | undefined, starting_time: string | undefined, ending_time: string | undefined, }

// Very primitive parser that never handles all the edge cases
export function foo(s: string): Parsed {
	const lines = s.trim().split("\n").map(l => l.trim());

	const initial_line = lines[0];

	if (initial_line === undefined /* Since we used .split(), this actually can't happen */ || initial_line === "") {
		throw new Error("棋譜がありません");
	} else if (/^\{始時:/.test(initial_line)) {
		throw new Error("棋譜が {始時: で始まっています。これは2021年11月末アップデート以前の棋譜であり、まだ対応できていません。")
	} else if (!/^\{一位色:/.test(initial_line)) {
		throw new Error("棋譜が {一位色: で始まっていません。")
	}

	const starting_players = initial_line.match(/^\{一位色:([黒赤]+)\}$/)?.[1];
	const starting_time = lines[1]?.match(/^\{始時:([^}]+)\}$/)?.[1];
	const ending_time = lines[2]?.match(/^\{終時:([^}]+)\}$/)?.[1];

	const bodies = lines.slice(3).flatMap(line => line.split(/[\s\n]/g)).filter(a => a !== "");
	console.log(bodies);
	return { starting_players, starting_time, ending_time };
}

type BodyElement = { "type": "normal_move", movement: NormalMove }
	| { "type": "end_season" }
	| { "type": "season_ends", season: Season }
	| { "type": "tymok", hands: Hand[] }
	| { "type": "taxot", hands: Hand[], score: number };

export function handleTamMove(s: string): BodyElement {
	const try_munch_src = munchCoord(s);
	if (!try_munch_src) {
		throw new Error(`Unparsable BodyElement encountered: \`${s}\``)
	}
	const { ans: src, rest } = try_munch_src;

	if (rest.charAt(0) !== "皇") {
		throw new Error(`failed to find tam2 while reading \`${s}\``);
	}


	// the format is either:
	// - ZU皇[TO]TU
	// - ZO皇[ZU]ZIZE
	// - TY皇TAI[TAU]ZAU

	const try_munch_bracket_and_nonbracket = liftM2(
		(firstDest, next) => ({ firstDest, next }),
		munchBracketedCoord,
		munchCoord
	)(rest.slice(1));
	if (try_munch_bracket_and_nonbracket) {
		// either:
		// - ZU皇[TO]TU
		// - ZO皇[ZU]ZIZE
		const { ans: { firstDest, next }, rest: rest2 } = try_munch_bracket_and_nonbracket;
		if (rest2 === "") {
			return {
				"type": "normal_move",
				movement: {
					type: "TamMove",
					stepStyle: "NoStep",
					src, firstDest, secondDest: next
				}
			}
		} else {
			const try_munch_coord = munchCoord(rest2);
			if (!try_munch_coord) { throw new Error(`Unparsable BodyElement encountered: \`${s}\``) }
			const { ans: secondDest, rest: empty } = try_munch_coord;
			if (empty !== "") { throw new Error(`Cannot handle trailing \`${empty}\` found within  \`${s}\``) }
			return {
				"type": "normal_move",
				movement: { type: "TamMove", stepStyle: "StepsDuringLatter", src, firstDest, step: next, secondDest }
			}
		}

	} else {
		// - TY皇TAI[TAU]ZAU
		const munch = liftM3(
			(step, firstDest, secondDest) => ({ step, firstDest, secondDest }),
			munchCoord, munchBracketedCoord, munchCoord)(rest.slice(1));
		if (!munch) { throw new Error(`Unparsable BodyElement encountered: \`${s}\``) };
		const { ans: { step, firstDest, secondDest }, rest: empty } = munch;

		if (empty !== "") { throw new Error(`Cannot handle trailing \`${rest}\` found within  \`${s}\``) }
		return {
			"type": "normal_move",
			movement: {
				type: "TamMove",
				stepStyle: "StepsDuringFormer",
				src, step, firstDest, secondDest
			}
		}
	}
}

export function handleYaku(s: string): BodyElement {
	// 或為王加獣
	// 或為王加獣而手八
	const handsSepByAt: Munch<Hand[]> = sepBy1({ p: munchHand, sep: string("加") });
	const munch = liftM2((_, hands) => hands, string("或為"), handsSepByAt)(s);
	if (!munch) {
		throw new Error(`Unparsable BodyElement encountered: \`${s}\``)
	}

	const { ans: hands, rest } = munch;
	if (rest === "") {
		return { type: "tymok", hands }
	} else if (rest === "而手八") {
		return { type: "taxot", hands, score: 8 }
	}

	throw new Error("todo")
}

export function handleBodyElement(s: string): BodyElement {
	if (s === "春終") { return { "type": "season_ends", season: 0 }; }
	if (s === "夏終") { return { "type": "season_ends", season: 1 }; }
	if (s === "秋終") { return { "type": "season_ends", season: 2 }; }
	if (s === "冬終") { return { "type": "season_ends", season: 3 }; }
	if (s === "終季") { return { "type": "end_season" }; }

	if (s.includes("為")) { return handleYaku(s); }
	if (s.includes("皇")) { return handleTamMove(s); }

	const try_munch_from_hopzuo = munchFromHopZuo(s);
	if (try_munch_from_hopzuo) {
		const { ans: { color, prof, dest }, rest } = try_munch_from_hopzuo;
		if (rest !== "") { throw new Error(`Cannot handle trailing \`${rest}\` found within  \`${s}\``) }
		return {
			"type": "normal_move",
			movement: {
				type: "NonTamMove", data: {
					type: "FromHand",
					color,
					prof,
					dest
				}
			}
		}
	}

	const try_munch_src = munchCoord(s);
	if (!try_munch_src) {
		throw new Error(`Unparsable BodyElement encountered: \`${s}\``)
	}
	const { ans: src, rest } = try_munch_src;

	if (!["兵", "弓", "車", "虎", "馬", "筆", "巫", "将", "王", "船", "片"].includes(rest.charAt(0))) {
		throw new Error(`failed to find a profession while reading \`${s}\``);
	}

	const try_munch_2nd_coord = munchCoord(rest.slice(1));
	if (!try_munch_2nd_coord) {
		throw new Error(`failed to find the second coordinate while reading \`${s}\``)
	}
	const { ans: second_coord, rest: rest2 } = try_munch_2nd_coord;

	const try_munch_3rd_coord = munchCoord(rest2);

	if (!try_munch_3rd_coord) {
		return {
			"type": "normal_move",
			movement: {
				type: "NonTamMove", data: {
					type: "SrcDst",
					src,
					dest: second_coord
				}
			}
		}
	} else {
		const { ans: third_coord, rest: rest3 } = try_munch_3rd_coord;

		if (rest3 !== "無撃裁") {
			throw new Error(`Unparsable BodyElement encountered: \`${s}\``)
		}

		return {
			"type": "normal_move",
			movement: {
				type: "NonTamMove", data: {
					type: "SrcStepDstFinite",
					src,
					step: second_coord,
					dest: third_coord
				}
			}
		}
	}

}
