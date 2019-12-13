//all task 11 related js has been removed

//1. select the 2nd list item, we'll be using the childrn which returns an array so will use index 1. 
const ul = document.querySelector('ul.task-elements');
const secondLi = ul.children[1];
const ulChildNodes = ul.childNodes;
alert(`Using "children" Second li selected: ${secondLi.textContent} where as \n  
      "childNodes" is an array as well but gives us text, tabs, whitespace and new line character as well\n
      Do console.log to view more information. Also Look into li:last-of-type, li:first-of-type, 
      ul.firstChild, ul.firstElementChild, ul.lastChild, ul.lastElementChild`);
console.log(ul);
console.log(secondLi);
console.log(ulChildNodes);
console.log(ul.querySelector('li:last-of-type'));
console.log(ul.querySelector('li:first-of-type'));
console.log(ul.firstChild);
console.log(ul.firstElementChild);
console.log(ul.lastChild);
console.log(ul.lastElementChild);

//2. using parentNode and parentElement 
const liFirst = ul.querySelector('li');
const parentOfLi = liFirst.parentElement //each element can only have one parent
const parentNodeOfLi = liFirst.parentNode 
alert(`Using both parentElement and parentNode. These are the same\n 
      Check console.log for more information\n
      parentElement: ${parentOfLi.textContent}\n
      parentNode: ${parentNodeOfLi.textContent}\n
      closest: ${liFirst.closest('ul').textContent}`);
console.log(liFirst);
console.log(parentOfLi);
console.log(parentNodeOfLi);
console.log(liFirst.closest('ul'));

//3. get the sibling, get one higher element which is the sibling of ul
const psUsingParentOfLi = parentOfLi.previousElementSibling;
const psUsingUl = ul.previousElementSibling; 
alert(`Note use of innerHtml in this example:\n
      psUsingParentOfLi: ${psUsingParentOfLi.innerHTML}\n
      psUsingUl: ${psUsingUl.innerHTML}\n
      View console.log for more information. 
      `);
console.log(psUsingParentOfLi);
console.log(psUsingUl)

//4. get the next sibling, get one below element which is the sibling of ul
const nsUsingParentOfLi = parentOfLi.nextElementSibling;
const nsUsingUl = ul.nextElementSibling; 
alert(`Note use of innerHtml in this example:\n
      nsUsingParentOfLi: ${nsUsingParentOfLi.innerHTML}\n
      nsUsingUl: ${nsUsingUl.innerHTML}\n
      View console.log for more information. 
      `);
console.log(nsUsingParentOfLi);
console.log(nsUsingUl)


