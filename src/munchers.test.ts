import { munchCoord, munchFromHopZuo } from "./munchers"

test('munchCoord', () => {
	expect(munchCoord("CAIあ")).toEqual({ ans: ["AI", "C"], rest: "あ" });
	expect(munchCoord("CA")).toEqual({ ans: ["A", "C"], rest: "" });
	expect(munchCoord("C")).toBe(null);
});
test('munchFromhand', () => {
	expect(munchFromHopZuo("")).toBe(null)
	expect(munchFromHopZuo("黒")).toBe(null)
	expect(munchFromHopZuo("黒弓")).toBe(null)
	expect(munchFromHopZuo("黒弓M")).toBe(null)
	expect(munchFromHopZuo("黒弓MY")).toEqual({
		ans: {
			color: 1,
			prof: 2,
			dest: ["Y", "M"]
		}, rest: ""
	})
});