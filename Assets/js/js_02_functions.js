//#1
//Two functions with and without params
function noParams(){
    alert("No params function alert");
}

function withParam(name){
    alert("Hi " + name);
}

//#2
//calling the functions
noParams();
withParam("John");

//#3
//creating an event listener
//click #3 task and the noParams function will get called
//The li element is put as ==> <li id="task-3">
//we are getting the element with document.getElementById
const task3Element = document.getElementById('task-3');
task3Element.addEventListener('click', noParams);

//#4
//function that received 3 params and returns a concatenated string
function concatString(param1, param2, param3){
    return `${param1} ${param2} ${param3}`;
    //we can also do this as
    return param1 + " " + param2 + " " + param3;
}

//#5
//calling the concatString function
var newString = concatString("John", "Smith", "Dad");
alert(newString);

//#6
//function expression which is also an: Anonymous function
function myFunction(a, b) {
    return a * b;
  }
console.log("Function Expression result for #6: " + myFunction(2, 3));

//#7
//Self-Invoking function which is also an: Anonymous function. 
(function () {
    console.log('#7 Self-InvokingFunction: I have invoked myself!');
})();

//#8 
//Arrow functions  
//ES6 arrow function, incase of a single statement, no return is needed
const es6_1 = (x, y) => x * y;
//arrow function with a return 
const es6_2 = (x, y) => { return x * y };
console.log("Arrow function #8: " + es6_1(2,4));
console.log("Arrow function #8: " + es6_2(2,5));

//default
const add = (a, b) => {
    const result = a + b;
    return result; // like in "normal" functions, parameters and return statement are OPTIONAL!
};
console.log(add(2, 3));
//Noteworthy: Semi-colon at end, no function keyword, parentheses around parameters/ arguments.

//Shorter parameter syntax, if exactly one parameter is received:
const log = message => {
    console.log(message); // could also return something of course - this example just doesn't
};
log('How are you?')
//Noteworthy: Parentheses around parameter list can be omitted (for exactly one argument).

//Empty parameter parentheses if NO arguments are received:
const greet = () => {
    console.log('Hi there!');
};
greet();
//Noteworthy: Parentheses have to be added (can't be omitted)

//Shorter function body, if exactly one expression is used:
const add2 = (a, b) => a + b;
console.log(add2(4, 5));
//Noteworthy: Curly braces and return statement can be omitted, expression result is always returned automatically

//Function returns an object:
const loadPerson = pName => ({name: pName });
const myPerson = loadPerson('John');
console.log(myPerson.name);
//Noteworthy: Extra parentheses are required around the object, since the curly braces would otherwise be interpreted as the function body delimiters (and hence a syntax error would be thrown here).

//#9. REST operator, can pass any number of params
const sumUp = (...numbers) => {
    let sum = 0;
    for (const num of numbers){
      sum += num;
    }
    return sum;
  };
  console.log("REST operator #9: "+ sumUp(1,2,-4,5,9));
  console.log("REST operator #9: "+ sumUp(4,3,6,7,-4,6,5,-2));

  //REST operator with function keyword, use arguments keyword
const subtractUp = function(...numbers) {
    let result = 0;
    for (const num of arguments){
        result -= num;
    }
    return result;
};
console.log(subtractUp(1,2,-4,5,9));
console.log(subtractUp(4,3,6,7,-4,6,5,-2));

//#10. Writing a function inside a function
const sumUp2 = (...numbers) => {
    //validate numbers
    const validateNumber = num => {
        //if not a number then return 0
        return isNaN(num) ? 0 : +num;
    };

    let sum = 0;
    for (const num of numbers){
        sum += validateNumber(num);
    }
    return sum;
};
console.log("Writing a function inside a function #10: "+sumUp2(1,2,-4,5,9, 'B'));
console.log("Writing a function inside a function #10: "+sumUp2(4,3,6,7,-4,6,5,-2, 'A'));

//#11. CallBack Function 
//result of sum is printed by this function which is a callback function
const myResultHandlerFunction = sum => {
console.log("CallBack function #11: " + sum);
};

//resultHandler is the callback function
const sumUp3 = (resultHandler, ...numbers) => {
    //validate numbers
    const validateNumber = num => {
        //if not a number then return 0
        return isNaN(num) ? 0 : +num;
    };

    let sum = 0;
    for (const num of numbers){
        sum += validateNumber(num);
    }
    //call the callback funcion
    resultHandler(sum);
};
sumUp3(myResultHandlerFunction, 1,2,-4,5,9, 'B');
sumUp3(myResultHandlerFunction, 4,3,6,7,-4,6,5,-2, 'A');

//#12. BIND()
//result of sum is printed by this function which is a callback function
//since we are binding the message, it would be the first parameter
const addSubtractShowMessage = (message, result) => {
    console.log(message.toString()+ result);
};

//resultHandler is the callback function
const addSubtract = (resultHandler, operation, ...numbers) => {
    //validate numbers
    const validateNumber = num => {
        //if not a number then return 0
        return isNaN(num) ? 0 : +num;
    };

    let sum = 0;
    for (const num of numbers){
        if (operation === 'ADD')
        sum += validateNumber(num);
        else
        sum -= validateNumber(num);
    }
    //call the callback funcion, showing message via BIND()
    resultHandler(sum);
};
//call the operation function with a CallaAck function and Bind the message to display
//here the first argument would be 'this' keyword and second argument would be the message
addSubtract(addSubtractShowMessage.bind(this, 'Result of ADD operation #12: '), 'ADD', 1,2,-4,5,9, 'B');
addSubtract(addSubtractShowMessage.bind(this, 'Result of ADD operation #12: '), 'ADD', 6,2,-4,'C',7,9, 'B');
addSubtract(addSubtractShowMessage.bind(this, 'Result of SUBTRACT operation #12: '), 'SUBTRACT', 4,3,6,7,-4,6,5,-2, 'A');