const section = document.querySelector('section');
const ul = section.firstElementChild;
const firstLi = ul.firstElementChild;

console.log(section);
console.log(ul);
console.log(firstLi);

// section.style.backgroundColor = 'blue';
section.className = 'red-bg';

const button = document.querySelector('#toggleUlLi');
const buttonBg = document.querySelector('#toggleBg');
button.addEventListener('click', () => {
      //either using the .className check which classes are applied and then reapply the classes
      /*
      if (section.className === 'red-bg visible') {
            section.className = 'red-bg invisible';
      } else {
            section.className = 'red-bg visible';
      }
      */
      //or toggle the invisible class
      section.classList.toggle('invisible');

      //toggle the bg button as well
      buttonBg.classList.toggle('invisible');
});

buttonBg.addEventListener('click', () => {
      //toggle the bg color for the section
      section.classList.toggle('blue-bg');
});

