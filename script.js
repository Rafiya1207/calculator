let numberPad = document.getElementById('number-pad')

const addButtons = (array, parentElement) => {
	for (const value of array) {
		let button = document.createElement('button')
		button.textContent = value
		button.setAttribute('type', 'button')
		parentElement.appendChild(button)
	}
	return parentElement
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const symbols = ['+', '-', '*', '/']

numberPad = addButtons(numbers, numberPad)
numberPad = addButtons(symbols, numberPad)

let equalButton = document.createElement('button')
equalButton.textContent = '='
equalButton.setAttribute('type', 'submit')
numberPad.appendChild(equalButton)