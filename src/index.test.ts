import { foo, handleBodyElement } from './index';

test('seasons', () => {
	expect(handleBodyElement("春終")).toEqual({ "type": "season_ends", season: 0 });
	expect(handleBodyElement("夏終")).toEqual({ "type": "season_ends", season: 1 });
	expect(handleBodyElement("秋終")).toEqual({ "type": "season_ends", season: 2 });
	expect(handleBodyElement("冬終")).toEqual({ "type": "season_ends", season: 3 });
	expect(handleBodyElement("終季")).toEqual({ "type": "end_season" });
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
/*
test('無撃裁2', () => {
	expect(handleBodyElement("PAU巫CAUCAI無撃裁")).toEqual({
		"type": "normal_move",
		movement: {
			type: "NonTamMove", data: {
				type: "SrcStepDstFinite",
				src: ["AI", "P"],
				step: ["AU", "C"],
				dest: ["AI", "C"],
			}
		}
	});
});
*/



const case1 =
	`{一位色:黒黒黒}
{始時:2022-05-31T17:16:02.433Z}
{終時:2022-05-31T18:13:52.357Z}
MAU弓MAIMY橋五    PE巫PIPU無撃裁
CAI兵CAU無撃裁    ME弓CE無撃裁
PAU巫CAUCAI無撃裁    ZA王ZE無撃裁
MY弓MIMA橋一此無    CI兵MIMU無撃裁
CAI巫CAMA橋一手赤馬    PA筆MA無撃裁手赤巫
LAU弓LAILY橋三    TE虎NITU橋一
LY弓LILE橋三手赤弓    KA筆KELE無撃裁手黒弓
MY弓MU無撃裁手黒兵

或為馬弓兵而手五
終季    春終

MAU弓MAIMY橋三    XE虎ZIXU無撃裁
XAI兵XY無撃裁    XU虎MY無撃裁手赤弓
XAU虎CAIMY橋四手黒虎    ME弓MIMU橋三
KAU巫KAIKY無撃裁    ZO皇[TU]ZIZE
PAU巫ZAU無撃裁    CI兵CE無撃裁
ZAI船ZI無撃裁手赤船    TE虎ZI水二此無
ZE皇TI[NU]LO    XA将ZE無撃裁
ZI船ZEZA橋四手赤王

或為王加獣而手八
終季    夏終

MAU弓MAIMY橋二    ME弓MIMU橋三
CAI兵CAU無撃裁    XE虎ZIXU無撃裁
MY弓MU無撃裁手黒弓    MI兵MU無撃裁手赤弓
PAU巫CAUCAI無撃裁    ZA王ZE無撃裁
CAI巫CAXA橋三手赤将    ZE王XA無撃裁手赤巫
PIA筆PAIPY橋一    PE巫ZE無撃裁
PY筆PIPA橋二手赤筆    CA車PA無撃裁手黒筆
LAU弓LAILY橋一    LE弓LILU橋四
LY弓LU無撃裁手赤弓    LI兵LU無撃裁手黒弓
黒弓CY    黒弓CU
CY弓CU無撃裁手黒弓    CI兵CU無撃裁手黒弓
黒弓MI    XA王CE無撃裁
MI弓MA無撃裁手赤馬    CE王MA無撃裁手黒弓
TAU虎ZAITY無撃裁    NI兵NO水三
TY虎NOLU無撃裁手赤兵

或為同色馬弓兵而手七
終季    秋終


星一周`;

const case2 = `{一位色:黒黒赤赤}
{始時:2021-11-20T07:52:51.743Z}
{終時:2021-11-20T08:12:18.137Z}
LAU片TAUZAU橋二    LE片LILU橋三
LAI片LY無撃裁    LU片LY無撃裁手赤兵
TAU片NAILY橋一手赤弓    XE片ZITU無撃裁
ZAU片LAU無撃裁    KE片LE無撃裁
MAU片XAUTAU橋一此無    TU片LYNAI無撃裁手黒兵
KAU片KAINAI橋三手黒虎    ME片MIMU橋二
NAI片NALA橋四手黒馬

或為同色獣而手五
終季    春終

PAU片PAIPY無撃裁    XE片ZIXU無撃裁
PY片TY無撃裁    ZO皇[ZU]ZIZE
ZIA片TIANAU無撃裁    XU片TY無撃裁手赤巫
PIA片PAU無撃裁    TY片LU無撃裁
MAU片MIAPIA橋二    ZI片ZAI無撃裁手黒船
NAU片NAITY無撃裁    NI片TITU無撃裁
TY片TAINAU無撃裁    TA片TENI無撃裁
NAU片LAILY無撃裁    XA片ZATA無撃裁
MIA片XAITO水二此無    ZA片TENE無撃裁
XAU片ZAIXY無撃裁    LU片KO無撃裁
LY片NO水三    NI片TUNO水一此無
XY片ZAITY無撃裁    NI片TUNO水二此無
TAI片TYTO水一此無    NI片TUNO水二此無
KAI片KY無撃裁    NI片TUNO水四手黒王

或為王而手五
終季    夏終

LE片LILU橋四    NAI片NY無撃裁
NI片NE無撃裁    NY片NO水四
KE片NENI無撃裁    CAI片XAIXY無撃裁
NI片NIALIA橋三手赤馬    KIA片LIA無撃裁手赤巫
ZO皇[ZU]ZIZE    ZAI片ZI無撃裁手赤船
XI片ZI水二此無    ZIA片XAUZAI水三
XI片ZI水四手黒船    TIA片ZAU無撃裁
LU片CU無撃裁    ZAU片XAUCAI無撃裁
CU片ZU水三    CAI片MY無撃裁
ZU片ZAI無撃裁手黒王

或為行行加王加獣而手十三
終季    秋終

LE片LILU橋四    CAI片CAU無撃裁
NI片NE無撃裁    NIA片NAIKO無撃裁
KE片NENI無撃裁    KO片KINI無撃裁手赤巫
TE片NI無撃裁手赤車    MAU片MAIMO橋五
CI片MIMU無撃裁    PAU片CAUCAI無撃裁
ZO皇[ZU]ZIZE    MO片ZO水三
ZI片ZO無撃裁手赤弓    XIA片ZAU無撃裁
ZO片ZAI無撃裁手黒船    TIA片ZAUZAI水四手赤船
LU片MUMO橋二    CAI片MAU無撃裁
ME片CE無撃裁    ZAI片XAUCAI無撃裁
CE片CAI無撃裁手赤将    CAU片CAI無撃裁手黒弓
MO片MAIMAU橋一手赤巫    MIA片XAITIA無撃裁
MAU片XAU無撃裁手赤虎    ZIA片TIANIA無撃裁
NI片CAIPIA橋二手黒筆

或為地心而手七
終季    冬終


星一周`;

test('main test', () => {
	expect(foo(case1)).toEqual({
		"starting_players": "黒黒黒",
		"starting_time": "2022-05-31T17:16:02.433Z",
		"ending_time": "2022-05-31T18:13:52.357Z",
	});
	expect(foo(case2)).toEqual({
		starting_players: '黒黒赤赤',
		starting_time: "2021-11-20T07:52:51.743Z",
		ending_time: "2021-11-20T08:12:18.137Z"
	});
});

test('cannot find', () => {
	expect(() => foo("")).toThrow("棋譜がありません");
});

test('does not start correctly', () => {
	expect(() => foo("aaa")).toThrow("棋譜が {一位色: で始まっていません。");
});

const old_version = `{始時:2021-10-02T17:02:23.217Z}
{一位色:黒}
TAU片ZAIXY無撃裁    ZO皇[TO]NO
ZAI片ZIZA橋四手赤王

或為王而手五
終季    春終

ZO皇[XO]CO    ZAI片ZIZA橋五手赤王

或為王而手五
終季    夏終

LAU片LAILO橋四    ZO皇[TO]TU
ZAI片ZIZA橋三手赤王

或為王而手五
終季    秋終

MAU片MAIMI橋五手赤兵    ZO皇[TO]NO
ZAI片ZIZA橋一此無    ZI片ZAIZIA橋四手黒王

或為王而手五
終季    冬終


星一周`;

test('old version', () => {
	expect(() => foo(old_version)).toThrow("棋譜が {始時: で始まっています。これは2021年11月末アップデート以前の棋譜であり、まだ対応できていません。");
});