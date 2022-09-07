import { foo } from "./index.mjs";



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

const case3 = `{一位色:赤赤赤}
{始時:2022-04-01T17:00:24.278Z}
{終時:2022-04-01T17:59:40.857Z}
ME弓MIMU橋三    MAU弓MAIMY橋二
CI兵CE無撃裁    MY弓MU無撃裁手黒弓
MI兵MU無撃裁手赤弓    CAI兵CAU無撃裁
PE巫CECI無撃裁    ZO皇[ZY]ZAIZAU
ZI船ZAI無撃裁手黒船    TIA将TAUZAI水無此無
TE虎NITU橋無此無    TAU虎NAICI橋四手黒巫
CE兵CI無撃裁手黒虎    XIA将XAUZAI水三手赤船
MA馬XIMO無撃裁    XAI兵CAI無撃裁
TE虎NITU橋三    黒巫TY
XI兵XU無撃裁    TY巫CIZA橋二手赤王

或為王而手五
終季    春終

LE弓LILU橋二    XAU虎ZAITY無撃裁
LU弓LAILAU橋一手黒弓    KAU巫LAU無撃裁手赤弓
NI兵NE無撃裁    赤弓NO
NA車NI無撃裁    KIA筆KAIKY橋一
NE兵NINO水二此無    KY筆KIKE橋二手赤巫
KA筆KE無撃裁手赤筆    ZO皇[TU]ZU
XE虎CIXU橋四    NAI兵NAU無撃裁
NE兵NINO水三手赤弓    TY虎XU無撃裁手黒虎
TE虎ZIXU橋四手赤虎    LAU巫NAUNAI無撃裁
XU虎NAI無撃裁手黒巫    TAU虎NAI無撃裁手赤虎
XI兵XU無撃裁    NAI虎XU無撃裁手赤兵
ZA王XACE無撃裁    赤巫NAI
黒弓ZO    ZAI船ZO無撃裁手黒弓
ME弓CEXE橋三    ZO船NO無撃裁手黒兵
CE王MIPU無撃裁    NAI巫XUPU橋二此無
NI車KA無撃裁    NAI巫XUPU橋二此無
XE弓XUZO橋一水三    NAI巫XUCU橋二
ZO弓CAIZIA橋三手黒王

或為地心加王加獣而手十五
終季    夏終

ME弓MIMU橋三    XAU虎CAIXY橋二
CI兵CE無撃裁    CAI兵CAU無撃裁
PE巫CECI無撃裁    XY虎MUCI無撃裁手黒巫
CE兵CI無撃裁手赤虎    黒巫CAI
MU弓MAICAI橋四手黒巫    CIA車CAI無撃裁手黒弓
XE虎CIXU橋三    黒弓CY
XI兵XUCU無撃裁    XAI兵XY無撃裁
ZO皇[ZU]ZIZE    ZAI船ZI無撃裁手赤船
TE虎ZI水三手黒船    XY兵XU無撃裁手黒虎
ZI虎XU無撃裁手赤兵    TAU虎NAITY橋二
XU虎TY無撃裁手黒虎    TAI兵TY無撃裁手赤虎
黒船ZI    ZE皇[XI]ZU
黒巫ZO    CAI車ZO水三手黒巫
ZU皇[XU]ZIZE    ZO車CIPA無撃裁手赤筆
ZI船ZIA無撃裁手黒王

或為王加同色獣而手十
終季    秋終


星一周`;

test('main test', () => {
	expect(foo(case1)).toEqual({
		"starting_players": "黒黒黒",
		"starting_time": "2022-05-31T17:16:02.433Z",
		"ending_time": "2022-05-31T18:13:52.357Z",
		parsed_bodies: [
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["AU", "M"], "step": ["AI", "M"], "dest": ["Y", "M"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 5, "infafterstep_success": true } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["E", "P"], "step": ["I", "P"], "dest": ["U", "P"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["AI", "C"], "dest": ["AU", "C"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["E", "M"], "dest": ["E", "C"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["AU", "P"], "step": ["AU", "C"], "dest": ["AI", "C"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["A", "Z"], "dest": ["E", "Z"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["Y", "M"], "step": ["I", "M"], "dest": ["A", "M"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 1, "infafterstep_success": false } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["I", "C"], "step": ["I", "M"], "dest": ["U", "M"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["AI", "C"], "step": ["A", "C"], "dest": ["A", "M"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 1, "infafterstep_success": true }, "piece_capture": { "color": 0, "prof": 5 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["A", "P"], "dest": ["A", "M"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 0, "prof": 7 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["AU", "L"], "step": ["AI", "L"], "dest": ["Y", "L"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 3, "infafterstep_success": true } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["E", "T"], "step": ["I", "N"], "dest": ["U", "T"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 1, "infafterstep_success": true } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["Y", "L"], "step": ["I", "L"], "dest": ["E", "L"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 3, "infafterstep_success": true }, "piece_capture": { "color": 0, "prof": 2 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["A", "K"], "step": ["E", "K"], "dest": ["E", "L"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 1, "prof": 2 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["Y", "M"], "dest": ["U", "M"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 1, "prof": 1 } } },
			{ "type": "taxot", "hands": ["馬弓兵"], "score": 5 },
			{ "type": "end_season" },
			{ "type": "season_ends", "season": 0 },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["AU", "M"], "step": ["AI", "M"], "dest": ["Y", "M"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 3, "infafterstep_success": true } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["E", "X"], "step": ["I", "Z"], "dest": ["U", "X"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["AI", "X"], "dest": ["Y", "X"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["U", "X"], "dest": ["Y", "M"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 0, "prof": 2 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["AU", "X"], "step": ["AI", "C"], "dest": ["Y", "M"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 4, "infafterstep_success": true }, "piece_capture": { "color": 1, "prof": 4 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["E", "M"], "step": ["I", "M"], "dest": ["U", "M"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 3, "infafterstep_success": true } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["AU", "K"], "step": ["AI", "K"], "dest": ["Y", "K"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "TamMove", "stepStyle": "StepsDuringLatter", "src": ["O", "Z"], "firstDest": ["U", "T"], "step": ["I", "Z"], "secondDest": ["E", "Z"] } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["AU", "P"], "dest": ["AU", "Z"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["I", "C"], "dest": ["E", "C"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["AI", "Z"], "dest": ["I", "Z"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 0, "prof": 0 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["E", "T"], "dest": ["I", "Z"] } }, "ciurl_and_capture": { "ciurl_event": { "water_entry_ciurl": 2 } } },
			{ "type": "normal_move", "movement": { "type": "TamMove", "stepStyle": "StepsDuringFormer", "src": ["E", "Z"], "step": ["I", "T"], "firstDest": ["U", "N"], "secondDest": ["O", "L"] } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["A", "X"], "dest": ["E", "Z"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["I", "Z"], "step": ["E", "Z"], "dest": ["A", "Z"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 4, "infafterstep_success": true }, "piece_capture": { "color": 0, "prof": 9 } } },
			{ "type": "taxot", "hands": ["王", "獣"], "score": 8 },
			{ "type": "end_season" },
			{ "type": "season_ends", "season": 1 },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["AU", "M"], "step": ["AI", "M"], "dest": ["Y", "M"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 2, "infafterstep_success": true } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["E", "M"], "step": ["I", "M"], "dest": ["U", "M"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 3, "infafterstep_success": true } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["AI", "C"], "dest": ["AU", "C"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["E", "X"], "step": ["I", "Z"], "dest": ["U", "X"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["Y", "M"], "dest": ["U", "M"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 1, "prof": 2 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["I", "M"], "dest": ["U", "M"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 0, "prof": 2 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["AU", "P"], "step": ["AU", "C"], "dest": ["AI", "C"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["A", "Z"], "dest": ["E", "Z"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["AI", "C"], "step": ["A", "C"], "dest": ["A", "X"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 3, "infafterstep_success": true }, "piece_capture": { "color": 0, "prof": 8 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["E", "Z"], "dest": ["A", "X"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 0, "prof": 7 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["IA", "P"], "step": ["AI", "P"], "dest": ["Y", "P"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 1, "infafterstep_success": true } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["E", "P"], "dest": ["E", "Z"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["Y", "P"], "step": ["I", "P"], "dest": ["A", "P"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 2, "infafterstep_success": true }, "piece_capture": { "color": 0, "prof": 6 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["A", "C"], "dest": ["A", "P"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 1, "prof": 6 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["AU", "L"], "step": ["AI", "L"], "dest": ["Y", "L"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 1, "infafterstep_success": true } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["E", "L"], "step": ["I", "L"], "dest": ["U", "L"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 4, "infafterstep_success": true } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["Y", "L"], "dest": ["U", "L"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 0, "prof": 2 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["I", "L"], "dest": ["U", "L"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 1, "prof": 2 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "FromHand", "color": 1, "prof": 2, "dest": ["Y", "C"] } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "FromHand", "color": 1, "prof": 2, "dest": ["U", "C"] } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["Y", "C"], "dest": ["U", "C"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 1, "prof": 2 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["I", "C"], "dest": ["U", "C"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 1, "prof": 2 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "FromHand", "color": 1, "prof": 2, "dest": ["I", "M"] } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["A", "X"], "dest": ["E", "C"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["I", "M"], "dest": ["A", "M"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 0, "prof": 5 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["E", "C"], "dest": ["A", "M"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 1, "prof": 2 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["AU", "T"], "step": ["AI", "Z"], "dest": ["Y", "T"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["I", "N"], "dest": ["O", "N"] } }, "ciurl_and_capture": { "ciurl_event": { "water_entry_ciurl": 3 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["Y", "T"], "step": ["O", "N"], "dest": ["U", "L"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 0, "prof": 1 } } },
			{ "type": "taxot", "hands": ["同色馬弓兵"], "score": 7 },
			{ "type": "end_season" },
			{ "type": "season_ends", "season": 2 },
			{ "type": "game_set" }
		]
	});
	expect(foo(case2)).toEqual({
		starting_players: '黒黒赤赤',
		starting_time: "2021-11-20T07:52:51.743Z",
		ending_time: "2021-11-20T08:12:18.137Z",
		parsed_bodies: [
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["AU", "L"], "step": ["AU", "T"], "dest": ["AU", "Z"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 2, "infafterstep_success": true } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["E", "L"], "step": ["I", "L"], "dest": ["U", "L"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 3, "infafterstep_success": true } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["AI", "L"], "dest": ["Y", "L"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["U", "L"], "dest": ["Y", "L"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 0, "prof": 1 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["AU", "T"], "step": ["AI", "N"], "dest": ["Y", "L"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 1, "infafterstep_success": true }, "piece_capture": { "color": 0, "prof": 2 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["E", "X"], "step": ["I", "Z"], "dest": ["U", "T"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["AU", "Z"], "dest": ["AU", "L"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["E", "K"], "dest": ["E", "L"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["AU", "M"], "step": ["AU", "X"], "dest": ["AU", "T"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 1, "infafterstep_success": false } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["U", "T"], "step": ["Y", "L"], "dest": ["AI", "N"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 1, "prof": 1 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["AU", "K"], "step": ["AI", "K"], "dest": ["AI", "N"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 3, "infafterstep_success": true }, "piece_capture": { "color": 1, "prof": 4 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["E", "M"], "step": ["I", "M"], "dest": ["U", "M"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 2, "infafterstep_success": true } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["AI", "N"], "step": ["A", "N"], "dest": ["A", "L"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 4, "infafterstep_success": true }, "piece_capture": { "color": 1, "prof": 5 } } },
			{ "type": "taxot", "hands": ["同色獣"], "score": 5 },
			{ "type": "end_season" },
			{ "type": "season_ends", "season": 0 },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["AU", "P"], "step": ["AI", "P"], "dest": ["Y", "P"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["E", "X"], "step": ["I", "Z"], "dest": ["U", "X"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["Y", "P"], "dest": ["Y", "T"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "TamMove", "stepStyle": "StepsDuringLatter", "src": ["O", "Z"], "firstDest": ["U", "Z"], "step": ["I", "Z"], "secondDest": ["E", "Z"] } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["IA", "Z"], "step": ["IA", "T"], "dest": ["AU", "N"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["U", "X"], "dest": ["Y", "T"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 0, "prof": 7 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["IA", "P"], "dest": ["AU", "P"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["Y", "T"], "dest": ["U", "L"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["AU", "M"], "step": ["IA", "M"], "dest": ["IA", "P"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 2, "infafterstep_success": true } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["I", "Z"], "dest": ["AI", "Z"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 1, "prof": 0 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["AU", "N"], "step": ["AI", "N"], "dest": ["Y", "T"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["I", "N"], "step": ["I", "T"], "dest": ["U", "T"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["Y", "T"], "step": ["AI", "T"], "dest": ["AU", "N"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["A", "T"], "step": ["E", "T"], "dest": ["I", "N"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["AU", "N"], "step": ["AI", "L"], "dest": ["Y", "L"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["A", "X"], "step": ["A", "Z"], "dest": ["A", "T"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["IA", "M"], "step": ["AI", "X"], "dest": ["O", "T"] } }, "ciurl_and_capture": { "ciurl_event": { "water_entry_ciurl": 2 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["A", "Z"], "step": ["E", "T"], "dest": ["E", "N"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["AU", "X"], "step": ["AI", "Z"], "dest": ["Y", "X"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["U", "L"], "dest": ["O", "K"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["Y", "L"], "dest": ["O", "N"] } }, "ciurl_and_capture": { "ciurl_event": { "water_entry_ciurl": 3 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["I", "N"], "step": ["U", "T"], "dest": ["O", "N"] } }, "ciurl_and_capture": { "ciurl_event": { "water_entry_ciurl": 1 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["Y", "X"], "step": ["AI", "Z"], "dest": ["Y", "T"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["I", "N"], "step": ["U", "T"], "dest": ["O", "N"] } }, "ciurl_and_capture": { "ciurl_event": { "water_entry_ciurl": 2 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["AI", "T"], "step": ["Y", "T"], "dest": ["O", "T"] } }, "ciurl_and_capture": { "ciurl_event": { "water_entry_ciurl": 1 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["I", "N"], "step": ["U", "T"], "dest": ["O", "N"] } }, "ciurl_and_capture": { "ciurl_event": { "water_entry_ciurl": 2 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["AI", "K"], "dest": ["Y", "K"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["I", "N"], "step": ["U", "T"], "dest": ["O", "N"] } }, "ciurl_and_capture": { "ciurl_event": { "water_entry_ciurl": 4 }, "piece_capture": { "color": 1, "prof": 9 } } },
			{ "type": "taxot", "hands": ["王"], "score": 5 },
			{ "type": "end_season" },
			{ "type": "season_ends", "season": 1 },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["E", "L"], "step": ["I", "L"], "dest": ["U", "L"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 4, "infafterstep_success": true } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["AI", "N"], "dest": ["Y", "N"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["I", "N"], "dest": ["E", "N"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["Y", "N"], "dest": ["O", "N"] } }, "ciurl_and_capture": { "ciurl_event": { "water_entry_ciurl": 4 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["E", "K"], "step": ["E", "N"], "dest": ["I", "N"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["AI", "C"], "step": ["AI", "X"], "dest": ["Y", "X"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["I", "N"], "step": ["IA", "N"], "dest": ["IA", "L"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 3, "infafterstep_success": true }, "piece_capture": { "color": 0, "prof": 5 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["IA", "K"], "dest": ["IA", "L"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 0, "prof": 7 } } },
			{ "type": "normal_move", "movement": { "type": "TamMove", "stepStyle": "StepsDuringLatter", "src": ["O", "Z"], "firstDest": ["U", "Z"], "step": ["I", "Z"], "secondDest": ["E", "Z"] } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["AI", "Z"], "dest": ["I", "Z"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 0, "prof": 0 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["I", "X"], "dest": ["I", "Z"] } }, "ciurl_and_capture": { "ciurl_event": { "water_entry_ciurl": 2 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["IA", "Z"], "step": ["AU", "X"], "dest": ["AI", "Z"] } }, "ciurl_and_capture": { "ciurl_event": { "water_entry_ciurl": 3 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["I", "X"], "dest": ["I", "Z"] } }, "ciurl_and_capture": { "ciurl_event": { "water_entry_ciurl": 4 }, "piece_capture": { "color": 1, "prof": 0 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["IA", "T"], "dest": ["AU", "Z"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["U", "L"], "dest": ["U", "C"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["AU", "Z"], "step": ["AU", "X"], "dest": ["AI", "C"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["U", "C"], "dest": ["U", "Z"] } }, "ciurl_and_capture": { "ciurl_event": { "water_entry_ciurl": 3 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["AI", "C"], "dest": ["Y", "M"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["U", "Z"], "dest": ["AI", "Z"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 1, "prof": 9 } } },
			{ "type": "taxot", "hands": ["行行", "王", "獣"], "score": 13 },
			{ "type": "end_season" },
			{ "type": "season_ends", "season": 2 },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["E", "L"], "step": ["I", "L"], "dest": ["U", "L"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 4, "infafterstep_success": true } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["AI", "C"], "dest": ["AU", "C"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["I", "N"], "dest": ["E", "N"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["IA", "N"], "step": ["AI", "N"], "dest": ["O", "K"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["E", "K"], "step": ["E", "N"], "dest": ["I", "N"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["O", "K"], "step": ["I", "K"], "dest": ["I", "N"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 0, "prof": 7 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["E", "T"], "dest": ["I", "N"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 0, "prof": 3 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["AU", "M"], "step": ["AI", "M"], "dest": ["O", "M"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 5, "infafterstep_success": true } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["I", "C"], "step": ["I", "M"], "dest": ["U", "M"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["AU", "P"], "step": ["AU", "C"], "dest": ["AI", "C"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "TamMove", "stepStyle": "StepsDuringLatter", "src": ["O", "Z"], "firstDest": ["U", "Z"], "step": ["I", "Z"], "secondDest": ["E", "Z"] } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["O", "M"], "dest": ["O", "Z"] } }, "ciurl_and_capture": { "ciurl_event": { "water_entry_ciurl": 3 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["I", "Z"], "dest": ["O", "Z"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 0, "prof": 2 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["IA", "X"], "dest": ["AU", "Z"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["O", "Z"], "dest": ["AI", "Z"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 1, "prof": 0 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["IA", "T"], "step": ["AU", "Z"], "dest": ["AI", "Z"] } }, "ciurl_and_capture": { "ciurl_event": { "water_entry_ciurl": 4 }, "piece_capture": { "color": 0, "prof": 0 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["U", "L"], "step": ["U", "M"], "dest": ["O", "M"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 2, "infafterstep_success": true } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["AI", "C"], "dest": ["AU", "M"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["E", "M"], "dest": ["E", "C"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["AI", "Z"], "step": ["AU", "X"], "dest": ["AI", "C"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["E", "C"], "dest": ["AI", "C"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 0, "prof": 8 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["AU", "C"], "dest": ["AI", "C"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 1, "prof": 2 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["O", "M"], "step": ["AI", "M"], "dest": ["AU", "M"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 1, "infafterstep_success": true }, "piece_capture": { "color": 0, "prof": 7 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["IA", "M"], "step": ["AI", "X"], "dest": ["IA", "T"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["AU", "M"], "dest": ["AU", "X"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 0, "prof": 4 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["IA", "Z"], "step": ["IA", "T"], "dest": ["IA", "N"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["I", "N"], "step": ["AI", "C"], "dest": ["IA", "P"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 2, "infafterstep_success": true }, "piece_capture": { "color": 1, "prof": 6 } } },
			{ "type": "taxot", "hands": ["地心"], "score": 7 },
			{ "type": "end_season" },
			{ "type": "season_ends", "season": 3 },
			{ "type": "game_set" }
		]
	});
	expect(foo(case3)).toEqual({
		starting_players: '赤赤赤',
		starting_time: "2022-04-01T17:00:24.278Z",
		ending_time: "2022-04-01T17:59:40.857Z",
		parsed_bodies: [
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["E", "M"], "step": ["I", "M"], "dest": ["U", "M"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 3, "infafterstep_success": true } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["AU", "M"], "step": ["AI", "M"], "dest": ["Y", "M"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 2, "infafterstep_success": true } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["I", "C"], "dest": ["E", "C"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["Y", "M"], "dest": ["U", "M"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 1, "prof": 2 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["I", "M"], "dest": ["U", "M"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 0, "prof": 2 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["AI", "C"], "dest": ["AU", "C"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["E", "P"], "step": ["E", "C"], "dest": ["I", "C"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "TamMove", "stepStyle": "StepsDuringLatter", "src": ["O", "Z"], "firstDest": ["Y", "Z"], "step": ["AI", "Z"], "secondDest": ["AU", "Z"] } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["I", "Z"], "dest": ["AI", "Z"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 1, "prof": 0 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["IA", "T"], "step": ["AU", "T"], "dest": ["AI", "Z"] } }, "ciurl_and_capture": { "ciurl_event": { "water_entry_ciurl": 0 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["E", "T"], "step": ["I", "N"], "dest": ["U", "T"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 0, "infafterstep_success": false } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["AU", "T"], "step": ["AI", "N"], "dest": ["I", "C"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 4, "infafterstep_success": true }, "piece_capture": { "color": 1, "prof": 7 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["E", "C"], "dest": ["I", "C"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 1, "prof": 4 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["IA", "X"], "step": ["AU", "X"], "dest": ["AI", "Z"] } }, "ciurl_and_capture": { "ciurl_event": { "water_entry_ciurl": 3 }, "piece_capture": { "color": 0, "prof": 0 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["A", "M"], "step": ["I", "X"], "dest": ["O", "M"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["AI", "X"], "dest": ["AI", "C"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["E", "T"], "step": ["I", "N"], "dest": ["U", "T"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 3, "infafterstep_success": true } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "FromHand", "color": 1, "prof": 7, "dest": ["Y", "T"] } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["I", "X"], "dest": ["U", "X"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["Y", "T"], "step": ["I", "C"], "dest": ["A", "Z"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 2, "infafterstep_success": true }, "piece_capture": { "color": 0, "prof": 9 } } },
			{ "type": "taxot", "hands": ["王"], "score": 5 },
			{ "type": "end_season" },
			{ "type": "season_ends", "season": 0 },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["E", "L"], "step": ["I", "L"], "dest": ["U", "L"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 2, "infafterstep_success": true } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["AU", "X"], "step": ["AI", "Z"], "dest": ["Y", "T"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["U", "L"], "step": ["AI", "L"], "dest": ["AU", "L"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 1, "infafterstep_success": true }, "piece_capture": { "color": 1, "prof": 2 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["AU", "K"], "dest": ["AU", "L"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 0, "prof": 2 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["I", "N"], "dest": ["E", "N"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "FromHand", "color": 0, "prof": 2, "dest": ["O", "N"] } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["A", "N"], "dest": ["I", "N"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["IA", "K"], "step": ["AI", "K"], "dest": ["Y", "K"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 1, "infafterstep_success": true } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["E", "N"], "step": ["I", "N"], "dest": ["O", "N"] } }, "ciurl_and_capture": { "ciurl_event": { "water_entry_ciurl": 2 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["Y", "K"], "step": ["I", "K"], "dest": ["E", "K"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 2, "infafterstep_success": true }, "piece_capture": { "color": 0, "prof": 7 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["A", "K"], "dest": ["E", "K"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 0, "prof": 6 } } },
			{ "type": "normal_move", "movement": { "type": "TamMove", "stepStyle": "NoStep", "src": ["O", "Z"], "firstDest": ["U", "T"], "secondDest": ["U", "Z"] } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["E", "X"], "step": ["I", "C"], "dest": ["U", "X"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 4, "infafterstep_success": true } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["AI", "N"], "dest": ["AU", "N"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["E", "N"], "step": ["I", "N"], "dest": ["O", "N"] } }, "ciurl_and_capture": { "ciurl_event": { "water_entry_ciurl": 3 }, "piece_capture": { "color": 0, "prof": 2 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["Y", "T"], "dest": ["U", "X"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 1, "prof": 4 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["E", "T"], "step": ["I", "Z"], "dest": ["U", "X"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 4, "infafterstep_success": true }, "piece_capture": { "color": 0, "prof": 4 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["AU", "L"], "step": ["AU", "N"], "dest": ["AI", "N"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["U", "X"], "dest": ["AI", "N"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 1, "prof": 7 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["AU", "T"], "dest": ["AI", "N"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 0, "prof": 4 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["I", "X"], "dest": ["U", "X"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["AI", "N"], "dest": ["U", "X"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 0, "prof": 1 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["A", "Z"], "step": ["A", "X"], "dest": ["E", "C"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "FromHand", "color": 0, "prof": 7, "dest": ["AI", "N"] } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "FromHand", "color": 1, "prof": 2, "dest": ["O", "Z"] } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["AI", "Z"], "dest": ["O", "Z"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 1, "prof": 2 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["E", "M"], "step": ["E", "C"], "dest": ["E", "X"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 3, "infafterstep_success": true } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["O", "Z"], "dest": ["O", "N"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 1, "prof": 1 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["E", "C"], "step": ["I", "M"], "dest": ["U", "P"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["AI", "N"], "step": ["U", "X"], "dest": ["U", "P"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 2, "infafterstep_success": false } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["I", "N"], "dest": ["A", "K"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["AI", "N"], "step": ["U", "X"], "dest": ["U", "P"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 2, "infafterstep_success": false } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["E", "X"], "step": ["U", "X"], "dest": ["O", "Z"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 1, "water_entry_ciurl": 3 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["AI", "N"], "step": ["U", "X"], "dest": ["U", "C"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 2, "infafterstep_success": true } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["O", "Z"], "step": ["AI", "C"], "dest": ["IA", "Z"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 3, "infafterstep_success": true }, "piece_capture": { "color": 1, "prof": 9 } } },
			{ "type": "taxot", "hands": ["地心", "王", "獣"], "score": 15 },
			{ "type": "end_season" },
			{ "type": "season_ends", "season": 1 },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["E", "M"], "step": ["I", "M"], "dest": ["U", "M"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 3, "infafterstep_success": true } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["AU", "X"], "step": ["AI", "C"], "dest": ["Y", "X"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 2, "infafterstep_success": true } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["I", "C"], "dest": ["E", "C"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["AI", "C"], "dest": ["AU", "C"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["E", "P"], "step": ["E", "C"], "dest": ["I", "C"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["Y", "X"], "step": ["U", "M"], "dest": ["I", "C"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 1, "prof": 7 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["E", "C"], "dest": ["I", "C"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 0, "prof": 4 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "FromHand", "color": 1, "prof": 7, "dest": ["AI", "C"] } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["U", "M"], "step": ["AI", "M"], "dest": ["AI", "C"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 4, "infafterstep_success": true }, "piece_capture": { "color": 1, "prof": 7 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["IA", "C"], "dest": ["AI", "C"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 1, "prof": 2 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["E", "X"], "step": ["I", "C"], "dest": ["U", "X"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 3, "infafterstep_success": true } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "FromHand", "color": 1, "prof": 2, "dest": ["Y", "C"] } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["I", "X"], "step": ["U", "X"], "dest": ["U", "C"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["AI", "X"], "dest": ["Y", "X"] } }, "ciurl_and_capture": { "ciurl_event": {} } },
			{ "type": "normal_move", "movement": { "type": "TamMove", "stepStyle": "StepsDuringLatter", "src": ["O", "Z"], "firstDest": ["U", "Z"], "step": ["I", "Z"], "secondDest": ["E", "Z"] } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["AI", "Z"], "dest": ["I", "Z"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 0, "prof": 0 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["E", "T"], "dest": ["I", "Z"] } }, "ciurl_and_capture": { "ciurl_event": { "water_entry_ciurl": 3 }, "piece_capture": { "color": 1, "prof": 0 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["Y", "X"], "dest": ["U", "X"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 1, "prof": 4 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["I", "Z"], "dest": ["U", "X"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 0, "prof": 1 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["AU", "T"], "step": ["AI", "N"], "dest": ["Y", "T"] } }, "ciurl_and_capture": { "ciurl_event": { "stepping_ciurl": 2, "infafterstep_success": true } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["U", "X"], "dest": ["Y", "T"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 1, "prof": 4 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["AI", "T"], "dest": ["Y", "T"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 0, "prof": 4 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "FromHand", "color": 1, "prof": 0, "dest": ["I", "Z"] } } },
			{ "type": "normal_move", "movement": { "type": "TamMove", "stepStyle": "NoStep", "src": ["E", "Z"], "firstDest": ["I", "X"], "secondDest": ["U", "Z"] } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "FromHand", "color": 1, "prof": 7, "dest": ["O", "Z"] } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["AI", "C"], "dest": ["O", "Z"] } }, "ciurl_and_capture": { "ciurl_event": { "water_entry_ciurl": 3 }, "piece_capture": { "color": 1, "prof": 7 } } },
			{ "type": "normal_move", "movement": { "type": "TamMove", "stepStyle": "StepsDuringLatter", "src": ["U", "Z"], "firstDest": ["U", "X"], "step": ["I", "Z"], "secondDest": ["E", "Z"] } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcStepDstFinite", "src": ["O", "Z"], "step": ["I", "C"], "dest": ["A", "P"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 0, "prof": 6 } } },
			{ "type": "normal_move", "movement": { "type": "NonTamMove", "data": { "type": "SrcDst", "src": ["I", "Z"], "dest": ["IA", "Z"] } }, "ciurl_and_capture": { "ciurl_event": {}, "piece_capture": { "color": 1, "prof": 9 } } },
			{ "type": "taxot", "hands": ["王", "同色獣"], "score": 10 },
			{ "type": "end_season" },
			{ "type": "season_ends", "season": 2 },
			{ "type": "game_set" }
		]
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