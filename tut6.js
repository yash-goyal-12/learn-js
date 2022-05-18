console.log('we are at tut6');

const name = 'harry';
const greeting = 'good morning';

console.log(greeting + ' ' + name);

let html;

html = '<h1> this is my heading</h1> hello world';

html = html.concat(' this' , ' str');
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html);

console.log(html[1]);
console.log(html.indexOf('this'));
console.log(html.lastIndexOf('this'));
console.log(html.charAt(3));
console.log(html.endsWith('str1'));
console.log(html.includes('str'));
console.log(html.substring(1 , 4));
console.log(html.slice(0,4));
console.log(html.split('>'));

console.log(html.replace('this' , 'it'));

let fruit1 = 'orange';
let fruit2 = 'apple';

let myHtml = `Hello ${name} 
<h1> This is "my" heading</h1>
<p> you like ${fruit1} and ${fruit2}</p>
`;

document.body.innerHTML = myHtml;