let divElem = document.createElement('div');

let container = document.querySelector('.container');

let first = document.getElementById('myfirst');

console.log(divElem , container , first);

let text = document.createTextNode('this is my element. click to edit');

divElem.appendChild(text);
divElem.setAttribute('id' , 'elem');

container.insertBefore(divElem , first);