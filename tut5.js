console.log('tut5');
let myVar;
myVar = String(34);

console.log(myVar , typeof(myVar));

let booleanVar = String(true);
console.log(booleanVar , typeof(booleanVar));

let date = String(new Date());
console.log(date , typeof(date));

let arr = String([1 ,2 ,3,4,5]);
console.log(arr , arr.length);

let i = 75;
i.toString();
console.log( typeof(i));

let stri = Number("3435");
stri = Number("34n54");
stri = Number(false);
stri = Number([1,2,3,4,5,6,7,8,9]);
console.log(stri , typeof(stri));

let number = parseFloat('34.098');

console.log(number.toFixed(2) , typeof(number));

//type coercion

let myStr ="698";
let myNum = 34;

console.log(myNum + myStr);