import reverseString from "../reverseString.js";

describe('test reverseString function', () => {
	it('should return reverse text', () => {
		expect(reverseString('test text')).toBe('txet tset');
	});
});