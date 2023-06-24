function checkPrime(n) {
	return (typeof (n) == 'number' && !isNaN(n) && (n > 1 && n <= 1000)) ?
		(n % n == 0 && n % 1 == 0 && n % 2 != 0 || n == 2) ?
		`${n} - простое число` : `${n} - не является простым числом` :
		(n === 1) ? `${n} - не является простым числом` : "Данные неверны";
}

// alert(checkPrime(11));

export default checkPrime;