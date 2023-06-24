import createAdder from "../createAdder.js";

describe('test createAdder function', () => {
	const addA = createAdder(10); 
	const number1 = 5;
	const number2 = 15;
	const result = 20;

	it('should return the sum of two numbers (success tests)', () => {
		expect(addA(number1)).toBe(number2)
		expect(createAdder(-number1)(-number2)).toBe(-result)
	});

	xit('should return the sum of two numbers (failure tests)', () => {
		expect(createAdder(number1)).toBe(result)
		expect(addA(number1)(number2)).toBe(result)
	});

	const addInfinity = createAdder(Infinity);

	it('should return infinity (corner cases)', () => {
		expect(addInfinity(number1)).toBe(Infinity)
		expect(addInfinity(-Infinity)).toBe(NaN)
		expect(addInfinity(NaN)).toBe(NaN)
	});
});