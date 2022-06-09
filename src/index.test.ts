import { foo } from './index';

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

test('main test', () => {
    expect(foo(case1)).toEqual({foo: 1});
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