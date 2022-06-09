import { Color, Profession, AbsoluteColumn, AbsoluteRow, AbsoluteCoord } from "cerke_online_api";
import { Munch, liftM2, liftM3 } from "./munch_monad";

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
