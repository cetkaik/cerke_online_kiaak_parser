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
		"type": "normal_move",
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
		"type": "normal_move",
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
		"type": "normal_move",
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
	expect(() => handleBodyElement("或為あいうえお")).toThrow();
})

test("fromHand", () => {
	expect(handleBodyElement("黒弓MY")).toEqual({
		"type": "normal_move",
		movement: {
			type: "NonTamMove", data: {
				type: "FromHand",
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

test('無撃裁', () => {
	expect(handleBodyElement("CAI兵CAU無撃裁")).toEqual({
		"type": "normal_move",
		movement: {
			type: "NonTamMove", data: {
				type: "SrcDst",
				src: ["AI", "C"],
				dest: ["AU", "C"]
			}
		}
	});
});

test('無撃裁2', () => {
	expect(handleBodyElement("PAU巫CAUCAI無撃裁")).toEqual({
		"type": "normal_move",
		movement: {
			type: "NonTamMove", data: {
				type: "SrcStepDstFinite",
				src: ["AU", "P"],
				step: ["AU", "C"],
				dest: ["AI", "C"],
			}
		}
	});
});


