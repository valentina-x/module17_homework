import reverseString from "../reverseString.js";

describe('test reverseString function', () => {
	it('should return reverse text, empty string, spaces', () => {
		expect(reverseString('test text')).toBe('txet tset');
		expect(reverseString('')).toBe('');
		expect(reverseString(' word ')).toBe(' drow ');
	});
});