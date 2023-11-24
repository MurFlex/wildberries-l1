const tests = [
	{
		test: 'аргентина манит негра',
		expect: true,
	},
	{
		test: 'АрГент ина Ма н ит негра',
		expect: true,
	},
	{
		test: 'арка: акра',
		expect: true,
	},
	{
		test: 'да, нет',
		expect: false,
	},
]

const isPalindrome = str => {
	const formattedStr = str.replace(/[^а-яa-z0-9]/gi, '').toLowerCase()
	return formattedStr === formattedStr.split('').reverse().join('')
}

tests.forEach(test => {
	if (isPalindrome(test.test) === test.expect) return console.log('Good!')

	return console.log('Bad!')
})
