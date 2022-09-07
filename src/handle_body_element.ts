import { Hand } from "cerke_hands_and_score";
import { AbsoluteCoord, Color, Profession, Season, TamMove } from "cerke_online_api";
import { munchBracketedCoord, munchCoord, munchFromHopZuo as munchFromHopZuo, munchHand, munchPekzepNumeral, munchPieceCaptureComment } from "./munchers";
import { Munch, liftM2, liftM3, sepBy1, string } from "./munch_monad";

export interface NormalNonTamMoveExceptFromHopzuo {
	type: "NonTamMove";
	data: {
		type: "SrcDst";
		src: AbsoluteCoord;
		dest: AbsoluteCoord;
	} | {
		type: "SrcStepDstFinite";
		src: AbsoluteCoord;
		step: AbsoluteCoord;
		dest: AbsoluteCoord;
	};
}

type CiurlAndCapture = { ciurl_event: CiurlEvent, piece_capture?: { color: Color, prof: Profession } };
export type BodyElement =
	{ "type": "normal_move", movement: NormalNonTamMoveExceptFromHopzuo, ciurl_and_capture: CiurlAndCapture }
	| {
		"type": "normal_move", movement: {
			type: "NonTamMove";
			data: {
				type: "FromHand";
				color: Color;
				prof: Profession;
				dest: AbsoluteCoord;
			}
		}
	}
	| { "type": "normal_move", movement: TamMove }
	| { "type": "end_season" }
	| { "type": "game_set" }
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
	}
	const munch2 = liftM2((_, num) => num, string("而手"), munchPekzepNumeral)(rest);
	if (!munch2) {
		throw new Error(`Unparsable BodyElement encountered: \`${s}\``)
	}
	const { ans: score, rest: rest2 } = munch2;

	if (rest2 !== "") {
		throw new Error(`Cannot handle trailing \`${rest}\` found within  \`${s}\``)
	}

	return { type: "taxot", hands, score }
}

type CiurlEvent = {}
	| { stepping_ciurl: number, infafterstep_success: boolean }
	| { stepping_ciurl?: number, water_entry_ciurl: number };
export const munchWaterEvent: Munch<number> = (s: string) => {
	if (s.startsWith("水")) {
		const t = s.slice(1);
		if (t.startsWith("無此無")) { return { ans: 0, rest: t.slice(3) }; }
		if (t.startsWith("一此無")) { return { ans: 1, rest: t.slice(3) }; }
		if (t.startsWith("二此無")) { return { ans: 2, rest: t.slice(3) }; }
		if (t.startsWith("三")) { return { ans: 3, rest: t.slice(1) } }
		if (t.startsWith("四")) { return { ans: 4, rest: t.slice(1) } }
		if (t.startsWith("五")) { return { ans: 5, rest: t.slice(1) } }
	}
	return null;
}

export const munchCiurlEvent: Munch<CiurlEvent> = (s: string) => {
	if (s.startsWith("無撃裁")) {
		return { ans: {}, rest: s.slice(3) };
	}

	const try_munch_water = munchWaterEvent(s);
	if (try_munch_water) {
		const { ans, rest } = try_munch_water;
		return { ans: { water_entry_ciurl: ans }, rest };
	}

	if (s.startsWith("橋")) {
		const t = s.slice(1);
		const stepping_ciurl =
			t[0] === "無" ? 0 :
				t[0] === "一" ? 1 :
					t[0] === "二" ? 2 :
						t[0] === "三" ? 3 :
							t[0] === "四" ? 4 :
								t[0] === "五" ? 5 : (() => { throw new Error("Unexpected character found after 橋") });
		const rest = t.slice(1);

		// Either nothing, 此無, or munchWaterEvent
		const try_munch_water = munchWaterEvent(rest);
		if (try_munch_water) {
			const { ans: water_entry_ciurl, rest: rest2 } = try_munch_water;
			return { ans: { stepping_ciurl, water_entry_ciurl }, rest: rest2 }
		} else if (rest.startsWith("此無")) {
			return { ans: { stepping_ciurl, infafterstep_success: false }, rest: "" }
		} else {
			return { ans: { stepping_ciurl, infafterstep_success: true }, rest }
		}
	} else {
		throw new Error(`Unparsable Ciurl event: \`${s}\``);
	}
}

export function handleTrailingParameters(s: string): { ciurl_event: CiurlEvent, piece_capture?: { color: Color, prof: Profession } } {
	const try_ciurl_event = munchCiurlEvent(s)
	if (!try_ciurl_event) { throw new Error(`Unparsable trailing parameter: \`${s}\``) }
	const { ans: ciurl_event, rest } = try_ciurl_event;

	if (rest === "") {
		return { ciurl_event }
	}

	const optional_piece_capture = munchPieceCaptureComment(rest);
	if (optional_piece_capture) {
		const { ans: piece_capture, rest: rest2 } = optional_piece_capture;

		if (rest2 !== "") {
			throw new Error(`Trailing parameter \`${s}\` has some extra \`${rest2}\` at the end`)
		}
		return { ciurl_event, piece_capture }
	} else {
		throw new Error(`Unparsable trailing parameter: \`${s}\``)
	}
}

export function handleBodyElement(s: string): BodyElement {
	if (s === "春終") { return { "type": "season_ends", season: 0 }; }
	if (s === "夏終") { return { "type": "season_ends", season: 1 }; }
	if (s === "秋終") { return { "type": "season_ends", season: 2 }; }
	if (s === "冬終") { return { "type": "season_ends", season: 3 }; }
	if (s === "終季") { return { "type": "end_season" }; }
	if (s === "星一周") { return { "type": "game_set" }; }

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
		const ciurl_and_capture = handleTrailingParameters(rest2);
		return {
			"type": "normal_move",
			movement: {
				type: "NonTamMove", data: {
					type: "SrcDst",
					src,
					dest: second_coord
				}
			},
			ciurl_and_capture
		}
	} else {
		const { ans: third_coord, rest: rest3 } = try_munch_3rd_coord;
		const ciurl_and_capture = handleTrailingParameters(rest3);
		return {
			"type": "normal_move",
			movement: {
				type: "NonTamMove", data: {
					type: "SrcStepDstFinite",
					src,
					step: second_coord,
					dest: third_coord
				}
			}, ciurl_and_capture
		}
	}
}
