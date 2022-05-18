console.log('we are at tut16');

let element =document.createElement('li');
let text = document.createTextNode('this is yash');
//element.appendChild(text);

element.className = 'childul';
element.id = 'createdLi';
element.setAttribute('title' , 'titled');
element.innerHTML = '<b>this is created by yash</b>';

let ul =document.querySelector('ul.this');
ul.appendChild(element);
console.log(element);