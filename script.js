const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equal]')
const deleteButton = document.querySelector('[data-delete]')
const dataDeleteCurrent = document.querySelector('[data-delete-current]')
const clearButton = document.querySelector('[data-all-clear]')
const piButton = document.querySelector('[data-pi]')
const squareButton = document.querySelector('[data-sup]')
const sqrtButton = document.querySelector('[data-sqrt]')
const previousOperandText = document.querySelector('[data-previous]')
const currentOperandText = document.querySelector('[data-current]')

class Calculator{
	constructor(previousOperandText, currentOperandText){
		this.previousOperandText = previousOperandText
		this.currentOperandText = currentOperandText
		this.clear();
	}
	
	clear(){
		this.currentOperand = '0'
		this.previousOperand = ''
		this.operation = ''
	}
	
	clearCurrent(){
		this.currentOperand = ''
	}
	
	delete(){
		this.currentOperand = this.currentOperand.toString().slice(0, -1)

	}
	
	appendNumber(number){
		if(this.currentOperand == '0') this.currentOperand = number.toString()
		else if(this.currentOperand == 'MathError') this.currentOperand = number.toString()
		else if(number === '.' && this.currentOperand.includes('.')) return
		else
			this.currentOperand = this.currentOperand.toString() + number.toString()
		if(number == 'π'){
			this.currentOperand = 3.14159265359
		}
	}
	
	chooseOperation(operation){
		if(this.currentOperand === 'MathError') return
		else if(this.currentOperand === ''){
			if(this.previousOperand == '') return
			this.operation = operation
			return
			}
		else if(this.previousOperand !== ''){
			this.compute();
		}
		this.operation = operation
		this.previousOperand = this.currentOperand
		this.currentOperand = ''
	}
	
	compute(){
		let computation
		const prev = parseFloat(this.previousOperand)
		//window.alert(prev)
		let current = parseFloat(this.currentOperand)
		//window.alert(this.operation)
		if(this.operation == '^2' || this.operation == '√')
			current =  parseFloat(this.previousOperand)
		if(isNaN(prev) || isNaN(current)) return
		switch(this.operation){
			case '+':
				computation = prev + current
				this.currentOperand = computation
				this.operation = undefined
				this.previousOperand = ''
				break
			case '-':
				computation = prev - current
				this.currentOperand = computation
				this.operation = undefined
				this.previousOperand = ''
				break
			case '*':
				computation = prev * current
				this.currentOperand = computation
				this.operation = undefined
				this.previousOperand = ''
				break
			case '÷':
				if(current == '0'){
					this.currentOperand = 'MathError'
					this.previousOperand = ''
					this.operation = undefined
					break
				}
				computation = prev / current
				this.currentOperand = computation
				this.operation = undefined
				this.previousOperand = ''
				break
			case '^2':
				computation = current * current
				this.currentOperand = computation
				this.operation = undefined
				this.previousOperand = ''
				break
			case '√':
				if(current < 0){
					this.currentOperand = 'MathError'
					this.previousOperand = ''
					this.operation = undefined
					break
				}
				computation = Math.sqrt(current)
				this.currentOperand = computation
				this.operation = undefined
				this.previousOperand = ''
				break
			case 'π':
				computation = 3.14159265359
				this.currentOperand = computation
				this.operation = undefined
				this.previousOperand = 'π'
				break
			default:
				return
		}
	}
	
	updateDisplay(){
		this.currentOperandText.innerText = this.currentOperand
		this.previousOperandText.innerText = this.previousOperand
		if(this.operation != null){
			if(this.operation == '√')
				this.previousOperandText.innerText =
				`${this.operation} ${this.previousOperand}`
			else{
				this.previousOperandText.innerText =
				`${this.previousOperand} ${this.operation}`
			}
		}
	}
}

const calculator = new Calculator(previousOperandText, currentOperandText)

numberButtons.forEach(button => {
	button.addEventListener('click', () => {
		calculator.appendNumber(button.innerText)
		calculator.updateDisplay()
	})
})

operationButtons.forEach(button => {
	button.addEventListener('click', () => {
		calculator.chooseOperation(button.innerText)
		calculator.updateDisplay()
	})
})

equalButton.addEventListener('click', button => {
	calculator.compute()
	calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
	calculator.delete()
	calculator.updateDisplay()
})

dataDeleteCurrent.addEventListener('click', button => {
	calculator.clearCurrent()
	calculator.updateDisplay()
})

clearButton.addEventListener('click', button => {
	calculator.clear()
	calculator.updateDisplay()
})