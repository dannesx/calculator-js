let equalPressed = false

let buttons = document.querySelectorAll('.input-button')

let input = document.querySelector('#input')
let equal = document.querySelector('#equal')
let clear = document.querySelector('#clear')
let erase = document.querySelector('#erase')

buttons.forEach(btn => {
	btn.addEventListener('click', () => {
		if (equalPressed) {
			input.value = ''
			equalPressed = false
		}

		input.value += btn.value
	})
})

equal.addEventListener('click', () => {
	equalPressed = true
	let inputValue = input.value

	try {
		let solution = eval(inputValue)

		if (Number.isInteger(solution)) {
			input.value = solution
		} else {
			input.value = solution.toFixed(2)
		}
	} catch (err) {
		alert('Invalid Input')
		input.value = ''
	}
})

clear.addEventListener('click', () => {
	input.value = ''
})

erase.addEventListener('click', () => {
	input.value = input.value.substr(0, input.value.length - 1)
})
