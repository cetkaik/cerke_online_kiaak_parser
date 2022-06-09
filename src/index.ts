export function foo(s: string): object {
	const lines = s.split("\n").map(l => l.trim());

	const initial_line = lines[0];
	if (initial_line === undefined /* Since we used .split(), this actually can't happen */ || initial_line === "") {
		throw new Error("棋譜がありません");
	} else if (/^\{一位色:/.test(initial_line)) {
		const starting_players = /^\{一位色:([黒赤]+)}$/.test(initial_line);
		console.log({ starting_players });
		console.log(lines);
	} else if (/^\{始時:/.test(initial_line)) {
		throw new Error("棋譜が {始時: で始まっています。これは2021年11月末アップデート以前の棋譜であり、まだ対応できていません。")
	} else {
		throw new Error("棋譜が {一位色: で始まっていません。")
	}

	return { foo: 1 };
}
