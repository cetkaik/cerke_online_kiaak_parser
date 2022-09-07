import { Color, Profession, AbsoluteColumn, AbsoluteRow, AbsoluteCoord } from "cerke_online_api";
import { Hand } from "cerke_hands_and_score"
import { Munch, liftM2, liftM3, string, many1 } from "./munch_monad.mjs";
import { DigitLinzklar, fromDigitsLinzklar } from "./read_pekzep_numerals.mjs";

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

export const munchHand: Munch<Hand> = (s: string) => {
	const hands: Hand[] = ["王", "獣", "同色獣", "地心", "同色地心", "馬弓兵", "同色馬弓兵",
		"助友", "同色助友", "戦集", "同色戦集", "行行", "同色行行", "筆兵無傾", "同色筆兵無傾",
		"闇戦之集", "同色闇戦之集", "無抗行処", "同色無抗行処"];
	for (const hand of hands) {
		if (s.startsWith(hand)) { return { ans: hand, rest: s.slice(hand.length) } }
	}
	return null;
}

export const munchCoord: Munch<AbsoluteCoord> = liftM2((col: AbsoluteColumn, row: AbsoluteRow) => {
	const coord: AbsoluteCoord = [row, col]
	return coord
}, munchColumn, munchRow)

export const munchFromHopZuo = liftM3((color, prof, dest) => ({ color, prof, dest }), munchColor, munchProfession, munchCoord);

export const munchPieceCaptureComment: Munch<{ color: Color, prof: Profession }> =
	liftM3((_, color, prof) => ({ color, prof }), string("手"), munchColor, munchProfession);

export const munchBracketedCoord: Munch<AbsoluteCoord> = liftM3((_1, coord, _2) => coord, string("["), munchCoord, string("]"));

const munchDigitLinzklar: Munch<DigitLinzklar> = (s: string) => {
	const ds: DigitLinzklar[] = ["無", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "下", "百"];
	for (const d of ds) {
		if (s.startsWith(d)) { return { ans: d, rest: s.slice(1) } }
	}
	return null;
}

export const munchPekzepNumeral: Munch<number> = (s: string) => {
	const t1 = many1(munchDigitLinzklar)(s);
	if (!t1) return null;
	const { ans, rest } = t1;
	try {
		const num = fromDigitsLinzklar(ans)
		return { ans: num, rest };
	} catch (e: unknown) {
		return null;
	}
}