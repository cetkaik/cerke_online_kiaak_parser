import { handleBodyElement } from './handle_body_element';

test('seasons', () => {
	expect(handleBodyElement("春終")).toEqual({ "type": "season_ends", season: 0 });
	expect(handleBodyElement("夏終")).toEqual({ "type": "season_ends", season: 1 });
	expect(handleBodyElement("秋終")).toEqual({ "type": "season_ends", season: 2 });
	expect(handleBodyElement("冬終")).toEqual({ "type": "season_ends", season: 3 });
	expect(handleBodyElement("終季")).toEqual({ "type": "end_season" });
	expect(handleBodyElement("星一周")).toEqual({ "type": "game_set" });
});

test("hmm", () => { expect(() => handleBodyElement("あ")).toThrow(); })

test("tammove", () => {
	expect(handleBodyElement("ZU皇[TO]TU")).toEqual({
		"movement": {
			"src": ["U", "Z"],
			"firstDest": ["O", "T"],
			"secondDest": ["U", "T"],
			"stepStyle": "NoStep",
			"type": "TamMove",
		},
		"type": "tam_move",
	});
	expect(handleBodyElement("ZO皇[ZU]ZIZE")).toEqual({
		"movement": {
			"src": ["O", "Z"],
			"firstDest": ["U", "Z"],
			"step": ["I", "Z"],
			"secondDest": ["E", "Z"],
			"stepStyle": "StepsDuringLatter",
			"type": "TamMove"
		},
		"type": "tam_move",
	});
	expect(handleBodyElement("TY皇TAI[TAU]ZAU")).toEqual({
		"movement": {
			"src": ["Y", "T"],
			"step": ["AI", "T"],
			"firstDest": ["AU", "T"],
			"secondDest": ["AU", "Z"],
			"stepStyle": "StepsDuringFormer",
			"type": "TamMove"
		},
		"type": "tam_move",
	});
})

test("yaku", () => {
	expect(handleBodyElement("或為王加獣")).toEqual({
		"type": "tymok",
		hands: ["王", "獣"]
	});
	expect(handleBodyElement("或為王加獣而手八")).toEqual({
		"type": "taxot",
		hands: ["王", "獣"],
		score: 8
	});
	expect(handleBodyElement("或為同色馬弓兵而手七")).toEqual({
		"type": "taxot",
		hands: ["同色馬弓兵"],
		score: 7
	});
	expect(() => handleBodyElement("或為あいうえお")).toThrow();
	expect(() => handleBodyElement("或為同色馬弓兵而手あいうえお")).toThrow();
	expect(() => handleBodyElement("或為同色馬弓兵而手無無無")).toThrow();
	expect(() => handleBodyElement("或為同色馬弓兵而手七ゆ")).toThrow();
})

test("fromHand", () => {
	expect(handleBodyElement("黒弓MY")).toEqual({
		"type": "from_hopzuo",
		movement: {
			type: "NonTamMove", data: {
				type: "FromHop1Zuo1",
				color: 1,
				prof: 2,
				dest: ["Y", "M"]
			}
		}
	});
	expect(() => handleBodyElement("黒弓MYあいうえお")).toThrow();
})

test('wrong prof', () => {
	expect(() => handleBodyElement("CAIあ")).toThrow()
});

test("wrong second coord", () => {
	expect(() => handleBodyElement("TIA片Z")).toThrow()
})


test('contains tam but broken', () => {
	expect(() => handleBodyElement("C皇")).toThrow()
	expect(() => handleBodyElement("CAI炎皇")).toThrow()
	expect(() => handleBodyElement("CAI皇[CO]炎")).toThrow()
	expect(() => handleBodyElement("CAI皇[CO]CU炎")).toThrow()
	expect(() => handleBodyElement("CAI皇[CO]CUZU炎")).toThrow()
	expect(() => handleBodyElement("CAI皇TAI[CO]炎")).toThrow()
	expect(() => handleBodyElement("CAI皇TAI[CO]CU炎")).toThrow()
});

test("water", () => {
	expect(handleBodyElement("TIA片ZAUZAI水四手赤船")).toEqual({
		"type": "normal_move",
		movement: {
			type: "NonTamMove", data: {
				type: "SrcStepDst",
				src: ["IA", "T"],
				step: ["AU", "Z"],
				dest: ["AI", "Z"],
			}
		}, "ciurl_and_capture": { ciurl_event: { type: "has_water_entry", water_entry_ciurl: 4 }, piece_capture: { color: 0, prof: 0 } }
	});

	expect(handleBodyElement("TIA片ZAUZAI水五手黒船")).toEqual({
		"type": "normal_move",
		movement: {
			type: "NonTamMove", data: {
				type: "SrcStepDst",
				src: ["IA", "T"],
				step: ["AU", "Z"],
				dest: ["AI", "Z"],
			}
		}, "ciurl_and_capture": { ciurl_event: { type: "has_water_entry", water_entry_ciurl: 5 }, piece_capture: { color: 1, prof: 0 } }
	})

	expect(() => handleBodyElement("TIA片ZAUZAI水面下")).toThrow()
	expect(() => handleBodyElement("TIA片ZAUZAI水四面下")).toThrow()
	expect(() => handleBodyElement("TIA片ZAUZAI水四手赤船面下")).toThrow()
});

test("bridge", () => {
	expect(handleBodyElement("ZAI片ZIZA橋四手赤王")).toEqual({
		"type": "normal_move",
		movement: {
			type: "NonTamMove", data: {
				type: "SrcStepDst",
				src: ["AI", "Z"],
				step: ["I", "Z"],
				dest: ["A", "Z"],
			}
		}, "ciurl_and_capture": {
			ciurl_event: { type: "only_stepping", infafterstep_success: true, stepping_ciurl: 4 },
			piece_capture: { color: 0, prof: 9 }
		}
	});
	expect(() => handleBodyElement("ZAI片ZIZA橋炎")).toThrow()
});


test('無撃裁', () => {
	expect(handleBodyElement("CAI兵CAU無撃裁")).toEqual({
		"type": "normal_move",
		movement: {
			type: "NonTamMove", data: {
				type: "SrcDst",
				src: ["AI", "C"],
				dest: ["AU", "C"]
			}
		}, "ciurl_and_capture": { ciurl_event: { type: "no_ciurl_event" } }
	});
});

test('無撃裁2', () => {
	expect(handleBodyElement("PAU巫CAUCAI無撃裁")).toEqual({
		"type": "normal_move",
		movement: {
			type: "NonTamMove", data: {
				type: "SrcStepDst",
				src: ["AU", "P"],
				step: ["AU", "C"],
				dest: ["AI", "C"],
			}
		}, "ciurl_and_capture": { ciurl_event: { type: "no_ciurl_event" } }
	});
});


