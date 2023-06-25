import sum from "../main.js"

describe('test sum', () => {
	it('sum 1 + 2', () => {
		expect(sum(1, 2)).toBe(3);
	})
});