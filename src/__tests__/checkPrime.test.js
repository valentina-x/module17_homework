import checkPrime from "../checkPrime.js";

describe('test checkPrime function', () => {
	const simple = 17;
	const complex = 18;
	const invalid = 1100;
	it('should operate correctly with simple, complex and invalid number', () => {
		expect(checkPrime(simple)).toBe(`${simple} - простое число`);
		expect(checkPrime(complex)).toBe(`${complex} - не является простым числом`);
		expect(checkPrime(invalid)).toBe('Данные неверны');
	});
});