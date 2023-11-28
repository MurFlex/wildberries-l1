const MathX = (function () {
	function isPrime(number) {
		for (let i = 2; i * i <= number; i++) {
			// Если текущее число является делителем, то исходное число не является простым
			if (number % i === 0) {
				return false
			}
		}

		return true
	}

	// Функция для вычисления n-го числа фибоначчи
	function getNthFibonacci(number) {
		// Возьму первые 2 числа как базу
		let firstNumber = 0
		let secondNumber = 1

		// Обработка ошибочных входных данных
		if (number <= 0) throw new Error('Number must be > 0')

		// Обработка исключений
		if (number === 1) return firstNumber
		if (number === 2) return secondNumber

		// Цикл вычисления n-го числа
		for (let i = 2; i < number; i++) {
			const sum = firstNumber + secondNumber
			firstNumber = secondNumber
			secondNumber = sum
		}

		return secondNumber
	}

	// Функция для вычисления n чисел фибоначчи
	function getNthFibonacciSum(number) {
		// Массив для хранения чисел
		const fibonacciNumbers = []
		// Цикл для заполнения массива числами фибоначчи
		for (let i = 1; i <= number; i++) {
			// Воспользуюсь уже реализованной функцией
			fibonacciNumbers.push(getNthFibonacci(i))
		}

		return fibonacciNumbers
	}

	function getPrime(number) {
		// Возьму первое простое число
		let primeNumber = 2
		// Обработка ошибочных входных данных
		if (number <= 0) throw new Error('Number must be more than 0')

		if (number === 1) return primeNumber

		// 1й номер уже есть, поэтому количество простых чисел сразу поставлю 1
		let primesAmount = 1
		// Цикл, пока не найдем нужное количество простых чисел
		while (primesAmount < number) {
			primeNumber++
			// Если число простое, то увеличу количество найденный простых чисел на 1
			if (isPrime(primeNumber)) primesAmount++
		}

		return primeNumber
	}

	function getPrimeSum(number) {
		// Задам начальные параметры с учетом того, что самое первое простое число - 2
		const primes = [2]
		let currentNumber = 3
		// Пройдусь циклом, пока не достигну входного значения и добавлю в массив, если число простое, проверив его, используя уже реализованную функцию
		while (currentNumber < number) {
			if (isPrime(currentNumber)) primes.push(currentNumber)

			currentNumber++
		}

		return primes
	}

	return {
		getNthFibonacci,
		getNthFibonacciSum,
		getPrime,
		getPrimeSum,
	}
})()

console.log(MathX.getNthFibonacci(4))
console.log(MathX.getNthFibonacciSum(5))
console.log(MathX.getPrime(6))
console.log(MathX.getPrimeSum(7))
