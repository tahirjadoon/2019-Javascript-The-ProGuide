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
for (const listItemEl of listItemElementsAll) {
  console.dir(listItemEl);
}
