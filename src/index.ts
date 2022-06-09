import { AbsoluteColumn, AbsoluteCoord, AbsoluteRow, Color, NormalMove, Profession, Season } from "cerke_online_api";
import { Munch, liftM2, liftM3 } from "./munch_monad";

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
	| { "type": "season_ends", season: Season };

const munchColor: Munch<Color> = (s: string) => {
	if (s.charAt(0) === "赤") { return { ans: 0, rest: s.slice(1) } }
	if (s.charAt(0) === "黒") { return { ans: 1, rest: s.slice(1) } }
	return null;
}

const munchProfession: Munch<Profession> = (s: string) => {
	if (s.charAt(0) === "船") { return { ans: 0, rest: s.slice(1) } }
	if (s.charAt(0) === "兵") { return { ans: 1, rest: s.slice(1) } }
	if (s.charAt(0) === "弓") { return { ans: 2, rest: s.slice(1) } }
	if (s.charAt(0) === "車") { return { ans: 3, rest: s.slice(1) } }
	if (s.charAt(0) === "虎") { return { ans: 4, rest: s.slice(1) } }
	if (s.charAt(0) === "馬") { return { ans: 5, rest: s.slice(1) } }
	if (s.charAt(0) === "筆") { return { ans: 6, rest: s.slice(1) } }
	if (s.charAt(0) === "巫") { return { ans: 7, rest: s.slice(1) } }
	if (s.charAt(0) === "将") { return { ans: 8, rest: s.slice(1) } }
	if (s.charAt(0) === "王") { return { ans: 9, rest: s.slice(1) } }
	return null;
}

const munchColumn: Munch<AbsoluteColumn> = (s: string) => {
	const cols: AbsoluteColumn[] = ["K", "L", "N", "T", "Z", "X", "C", "M", "P"];
	for (const col of cols) {
		if (s.charAt(0) === col) { return { ans: col, rest: s.slice(1) } }
	}
	return null;
}
const munchRow: Munch<AbsoluteRow> = (s: string) => {
	const rows: AbsoluteRow[] = ["AI", "AU", "IA" /* handle the longer ones first */, "A", "E", "I", "U", "O", "Y"];
	for (const row of rows) {
		if (s.startsWith(row)) { return { ans: row, rest: s.slice(row.length) } }
	}
	return null;
}

export const munchCoord: Munch<AbsoluteCoord> = liftM2((col: AbsoluteColumn, row: AbsoluteRow) => {
	const coord: AbsoluteCoord = [row, col]
	return coord
}, munchColumn, munchRow)

export const munchFromHand = liftM3((color, prof, dest) => ({ color, prof, dest }), munchColor, munchProfession, munchCoord);

export function handleBodyElement(s: string): BodyElement {
	if (s === "春終") { return { "type": "season_ends", season: 0 }; }
	if (s === "夏終") { return { "type": "season_ends", season: 1 }; }
	if (s === "秋終") { return { "type": "season_ends", season: 2 }; }
	if (s === "冬終") { return { "type": "season_ends", season: 3 }; }
	if (s === "終季") { return { "type": "end_season" }; }

	const try_munch_src = munchCoord(s);
	if (!try_munch_src) {
		// fromHand
		const try_munch = munchFromHand(s);
		if (!try_munch) {
			throw new Error(`Unparsable BodyElement encountered: \`${s}\``)
		}
		const { ans: { color, prof, dest }, rest } = try_munch;
		if (rest !== "") { throw new Error(`Trailing  \`${rest}\` found`) }
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
