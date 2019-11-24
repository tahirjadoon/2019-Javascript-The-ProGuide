//#1: Get the element objects by id for input textbox, add button, minus button, divide buttin, multiply buttons and results 
const usrInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

//#2. Display previous value, button clicked and current value
function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

//#4.A. Code to perform the operation
const defaultResult = 0;
let currentResult = defaultResult;

//helper function to get the userinput value using the object created in #1 above
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

//another hepler function to call the main outputResult function in #1 above
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
  
  //put the focus back in the inputbox
  usrInput.focus();
}

//individual operations
function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
}

//#4.B. Event listeners on action buttons
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);