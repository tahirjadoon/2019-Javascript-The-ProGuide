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

//create an object so that we can resuse the text values
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

//calcType being passed: ADD, SUBTRACT, MULTIPLY and DIVIDE
//calcOperation being passed: +, -, * and /
function calculateResult(calcType, calcOperation){
  //check that we have the allowed calctype, if not then exit
  calcType = calcType.toLowerCase();
  if(calcType !== mathOperations.add.toLowerCase() &&
      calcType !== mathOperations.subtract.toLowerCase() &&
      calcType !== mathOperations.multiply.toLowerCase() &&
      calcType !== mathOperations.divide.toLowerCase()
    ){
      return; //exit
    }
  //perform calculation
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  if(calcType === mathOperations.add.toLowerCase()){
    currentResult += enteredNumber;
  }
  else if(calcType === mathOperations.subtract.toLowerCase()){
    currentResult -= enteredNumber;
  }
  else if(calcType === mathOperations.multiply.toLowerCase()){
    currentResult *= enteredNumber;
  }
  else if(calcType === mathOperations.divide.toLowerCase()){
    currentResult /= enteredNumber;
  }
  createAndWriteOutput(calcOperation, initialResult, enteredNumber);
  createLogEntry(calcType.toUpperCase(), initialResult, enteredNumber, currentResult);
}

//Event listeners on action buttons
//Task10: call the calculateResult function and bind the two prameters being passed
addBtn.addEventListener('click', calculateResult.bind(this, mathOperations.add, mathOperations.addOperator));
subtractBtn.addEventListener('click', calculateResult.bind(this, mathOperations.subtract, mathOperations.subtractOperator));
multiplyBtn.addEventListener('click', calculateResult.bind(this, mathOperations.multiply, mathOperations.multiplyOperator));
divideBtn.addEventListener('click', calculateResult.bind(this, mathOperations.divide, mathOperations.divideOperator));