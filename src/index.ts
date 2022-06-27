import { BodyElement, handleBodyElement } from "./handle_body_element";

type Parsed = {
	starting_players: string | undefined,
	starting_time: string | undefined,
	ending_time: string | undefined,
	//parsed_bodies: BodyElement[]
}

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
	// console.log(bodies);
	const parsed_bodies = bodies.map(handleBodyElement)
	return { starting_players, starting_time, ending_time };
}