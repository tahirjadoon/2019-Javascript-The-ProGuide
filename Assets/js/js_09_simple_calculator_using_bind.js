//Get the element objects by id for input textbox, add button, minus button, divide buttin, multiply buttons and results 
const usrInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

//Display previous value, button clicked and current value
function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

//Code to perform the operation
const defaultResult = 0;
let currentResult = defaultResult;

//create a global array in which we will keep track of all the operations
//initially it will be an empty array
let logEntries = [];

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

//create a log entry
function createLogEntry(operation, prevNumber, number, result){
  //create object
  const logEntry = {
    operation: operation,
    prevResult: prevNumber,
    number: number,
    result: result
  };
  //push into array
  logEntries.push(logEntry);
  //display only the current operation and not all. .Length gives us the total length but since the array is 0 index based, we'll pick the -1 item. 
  console.log(logEntries[logEntries.length -1]);
  //this will display the full array
  //console.log(logEntries);
}

//Task9: object to reuse string, copies from Task6
let mathOperations = {
  add: "ADD",
  addOperator: "+",
  subtract: "SUBTRACT",
  subtractOperator: "-",
  multiply: "MULTIPLY",
  multiplyOperator: "*",
  divide: "DIVIDE",
  divideOperator: "/"
}

//task9: new calculate function to replace individual add/subtract/multiply/divide function
const calculate = (operation) => {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let operator;
  switch(operation){
    case mathOperations.add:
      currentResult += enteredNumber;
      operator = mathOperations.addOperator;
      break;
    case mathOperations.subtract:
      currentResult -= enteredNumber;
      operator = mathOperations.subtractOperator;
      break;
    case mathOperations.multiply:
      currentResult *= enteredNumber;
      operator = mathOperations.multiplyOperator;
      break;
    case mathOperations.divide:
      currentResult /= enteredNumber;
      operator = mathOperations.divideOperator;
      break;
  }
  createAndWriteOutput(operator, initialResult, enteredNumber);
  //add the log entry
  createLogEntry(operation, initialResult, enteredNumber, currentResult);
};

//Event listeners on action buttons
//Task9: use the new calculate function as CallBack and bind the operation
addBtn.addEventListener('click', calculate.bind(this, mathOperations.add));
subtractBtn.addEventListener('click', calculate.bind(this, mathOperations.subtract));
multiplyBtn.addEventListener('click', calculate.bind(this, mathOperations.multiply));
divideBtn.addEventListener('click', calculate.bind(this, mathOperations.divide));