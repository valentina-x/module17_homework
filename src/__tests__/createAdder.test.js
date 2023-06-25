import createAdder from "../createAdder.js";

describe('test createAdder function', () => {
	let addA; 
	let number1;
	let number2;
	let result;
	let addInfinity;
	
	beforeEach(() => {
		addA = createAdder(10); 
		number1 = 5;
		number2 = 15;
		result = 20;
		addInfinity = createAdder(Infinity);
	});

	it('should return correct sum of two positive/negative numbers', () => {
		expect(addA(number1)).toBe(number2)
		expect(createAdder(-number1)(-number2)).toBe(-result)
	});

	xit('should сall the functions correctly', () => {
		expect(createAdder(number1)).toBe(result)
		expect(addA(number1)(number2)).toBe(result)
	});

	it('should handle Infinity and NaN values correctly', () => {
		expect(addInfinity(number1)).toBe(Infinity)
		expect(addInfinity(-Infinity)).toBe(NaN)
		expect(addInfinity(NaN)).toBe(NaN)
	});
});