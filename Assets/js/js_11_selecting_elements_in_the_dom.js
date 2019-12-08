//getting the h1 title by ID
const h1 = document.getElementById('main-title');

//changing the title and also the text and background colcors
h1.textContent = 'Some new title!';
h1.style.color = 'white';
h1.style.backgroundColor = 'black';

//change the last li and add (Changed!) to it
const li = document.querySelector('.task-elements li:last-of-type');
li.textContent = li.textContent + ' (Changed!)';

//Selects the <body> element node
const body = document.body;

//get all li elements using querySelectorAll
const listItemElementsAll = document.querySelectorAll('.task-elements li');
//same as above but getting  via tagName
const listItemElements = document.getElementsByTagName('.task-elements li');

//iterating through the elements
setTimeout(function(){
  for (const listItemEl of listItemElementsAll) {
    console.dir(listItemEl);
    listItemEl.classList.add("default-textbox");
  }
}, 5000);

//working with the textbox 1
const input1 = document.getElementById("text1");
alert("Original textbox 1: " + input1.value);
input1.value = "JS has changing textbox 1 value";
alert("Changed textbox 1: " + input1.value)

//working with the textbox 2
const input2 = document.getElementById("text2");
alert("Original textbox 2 via getAttribute: " + input2.getAttribute("value"));
input2.setAttribute("value", "Changed via setAttribute");
alert("Changed textbox 2 via setAttribute: " + input2.getAttribute("value"));

//adding removing the css classes applied to text boxes by executing the code after 5 seconds
//additionaly check that the class is applied or not before remove/add
setTimeout(function(){
  //on input1, first remove the class and then add a new one
  if(input1.classList.contains("default-textbox"))
    input1.classList.remove("default-textbox");
  if(!input1.classList.contains("change-textbox"))
    input1.classList.add("change-textbox");
  //on textbox2 add the new class without removing the old one 
  if(!input2.classList.contains("change-textbox"))
    input2.classList.add("change-textbox");
}, 5000);
