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

