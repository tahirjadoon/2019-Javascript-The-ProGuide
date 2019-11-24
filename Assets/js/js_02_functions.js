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
