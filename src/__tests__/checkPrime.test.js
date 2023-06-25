import checkPrime from "../checkPrime.js";

describe('checkPrime function', () => {
	let validSimple;
	let validComplex;
	let invalid;
	beforeEach(() => {
		validSimple = 17;
		validComplex = 18;
		invalid = 1100;
	})
	it('should operate correctly with simple, complex, invalid number, string or object', () => {
		expect(checkPrime(validSimple)).toBe(`${validSimple} - простое число`);
		expect(checkPrime(validComplex)).toBe(`${validComplex} - не является простым числом`);
		expect(checkPrime(invalid)).toBe('Данные неверны');
		expect(checkPrime('text')).toBe('Данные неверны');
		expect(checkPrime(Object)).toBe('Данные неверны');
	});
});