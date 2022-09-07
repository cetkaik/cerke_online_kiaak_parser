export type DigitLinzklar =
	| "無"
	| "一"
	| "二"
	| "三"
	| "四"
	| "五"
	| "六"
	| "七"
	| "八"
	| "九"
	| "十"
	| "下"
	| "百";

export function fromDigitsLinzklar(i: ReadonlyArray<DigitLinzklar>): number {
	if (i[0] === "無" && i.length === 1) { return 0; }
	if (i[0] === "下") { return -fromDigitsLinzklar(i.slice(1)); }
	if (i[0] === "百") {
		if (i.length === 1) { return 100; }
		return 100 + fromDigitsLinzklar(i.slice(1));
	}
	const index100 = i.indexOf("百");
	if (index100 !== -1) {
		const hundreds = i.slice(0, index100);
		const ones = i.slice(index100 + 1);
		return 100 * fromDigitsLinzklarSub(hundreds) + fromDigitsLinzklarSub(ones);
	}

	if (i[0] === "十") { return 10 + parseUnit(i[1]); }
	if (i[1] === "十") { return 10 * parseUnit(i[0]) + parseUnit(i[2]); }

	if (i.length === 1) {return parseUnit(i[0]);}

	throw new Error(`Cannot parse "${i}" as a pekzep numeral`);
}

function parseUnit(ones: DigitLinzklar | undefined): number {
	if (ones === undefined) { return 0; }
	if (ones === "一") { return 1; }
	if (ones === "二") { return 2; }
	if (ones === "三") { return 3; }
	if (ones === "四") { return 4; }
	if (ones === "五") { return 5; }
	if (ones === "六") { return 6; }
	if (ones === "七") { return 7; }
	if (ones === "八") { return 8; }
	if (ones === "九") { return 9; }
	throw new Error(`Unexpected character "${ones}" while trying to parse pekzep numerals`);
}

function fromDigitsLinzklarSub(i: ReadonlyArray<DigitLinzklar>): number {
	if (i.length === 0) return 0;
	if (i[0] === "十") {
		return 10 + parseUnit(i[1]);
	} else if (i[i.length - 1] === "十") {
		return parseUnit(i[0]) * 10;
	} else {
		const a = i[0];
		const b = i[1];
		if (b === undefined) return parseUnit(a)
		return parseUnit(a) * 10 + parseUnit(b);
	}
}