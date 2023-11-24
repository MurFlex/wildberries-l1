const isWeird = number => {
	// Исключения
	if (number === 0) return false
	if (number === 1) return false

	// Найду делители и сразу буду складывать их с общей суммой
	let sum = 1
	for (let i = 2; i * i < number; i++) {
		if (number % i == 0) {
			sum += i
			sum += number / i
		}
	}
	// Если сумма = числу, то число странное
	return sum === number
}

// Проверка
for (let i = 0; i < 100; i++) {
	console.log(i + ' ' + isWeird(i))
}
