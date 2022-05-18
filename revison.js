//alert('this');
// console.time('mytime')
// console.log(34+7);
// console.log({harry: 'this' , marks: 34 } );
// console.table({harry: 'this' , marks: 34 , language: 'javascript' });
// console.warn('this is warning');
// console.timeEnd('mytime');
// console.clear();
// console.error('this is error');

// var name = 'harry';
// console.log(name);
// name = 'yash';
// console.log(name);


// const ownerName = 'hari ram';
// console.log(ownerName);
// //ownerName = 'yash';
// console.log(ownerName);
// //const mark;

// {
//     let ownerName = 'yash';
//     console.log(ownerName);

// }
// console.log(ownerName);

// const arr1 = [2 , 5 , 8 , 9 ,76 ];
// console.log(arr1);
// arr1.pop();
// console.log(arr1);


//primitive data type



// var name1 = 54;
// console.log(typeof(name1));

// var name1 = 'yash';
// console.log(typeof(name1));


// var name1 = true;
// console.log(typeof(name1));

// var name1 = 54;
// console.log(typeof(name1));

// var name1 = null;
// console.log(typeof(name1));

// var name1;
// console.log(typeof(name1));

// let mark = {
//     harry: 45, 
//     yash: 34,
//     tushar: 49

// }

// console.log(mark);
// console.log(typeof(mark));

// function findName() {

// }
// console.log(typeof(findName));

// let date = new Date();
// console.log(typeof(date));

// let marks = String(34);
// console.log(marks);

// let boolean = String(true);
// console.log(boolean);

// let arr = String([1 , 4 , 5 , 3 ,3 ]);
// console.log(arr.length , typeof(arr));

// let date = String(new Date());
// console.log(date , typeof(date));

// let i = 14.098;
// console.log(i , typeof(i));
//  i = i.toString();
// console.log(i , typeof(i));

// console.log(parseInt(i));
// parseFloat(i);
// console.log(i);

// let num = 34.098;
// console.log(parseInt(num));


// const name = 'harry';
// const greeting = 'good morning';

// console.log(name + ' ' + greeting);

// let html;
 
// html = "hello my name is yash can you "+ 

// "help me. i am stuck in the problem";

// console.log(html);

// html = html.concat(' hello');
// console.log(html);

// console.log(html.length);
// console.log(html.indexOf('e'));

// console.table(html.split(' '));

// console.log(html.replace('a' , 'r'));

// let fruit1  = 'orange';
// let fruit2 = 'apple';

// let name1 = 'yash';
// let myHtml = `<h1> hello my name is ${name1}</h1>. i don't like fruit ${fruit1} and ${fruit2}`;
// console.log(myHtml);

// document.body.innerHTML = myHtml;

// const marks = [34 , 54 , 32 , 22 , 98];
// marks[0] = 12;
// console.log(marks);
// const fruits  = ['orange' , 'apple' , 'mango'];

// let myObj = {
//     name: 'harry,',
//     channel: 'codewithharry',
//     marks: 55
// };
// console.log(myObj);

// const age = '19';

// if(age === '19') {
//     console.log('age is 19');
// }else if(age == 29){
//     console.log('age is 29');
// } else {
//     console.log('age is not 19');
// }

// let c = age > 20? 'age is greater than 18':'age is less than 18';
// console.log(c);

// const age = 1;
// switch(age) {
//     case 1:
//         console.log('age is 1');
//         break;
//         case 2:
//         console.log('age is 1');
//         break;
//         case 34:
//         console.log('age is 1');
//         break;
//         case 23:
//         console.log('age is 23');
//         break;
//         case 18:
//         console.log('age is 18');
//         break;
//         default :
//         console.log('age is not given');
//         break;
// }
// const n =21;
// for(let i =0; i<n; i++) {
//     console.log(i);
// }
// let j = 10;
// while(j < 20) {
//     console.log(j);
//     j++;
// }

// let n =101;

// do{
//     console.log(n);
//     n++;
// } while(n<100);

// function greet(name , thanks= "thanku") {
//     console.log(`Happy Birthday ${name} , how i wish i could fly to you to right now and be with you on this special day of yours. but remember , my good wishes are always there with you. Happy birthday! ${thanks}`);
// }

// let name = 'yash';
// thanks = 'thanks a lot';

// greet('yash');


// let myObj = {
//     name: 'yash',
//     channel: 'codewithyash',
//     language: 'JS'
// };

// let myObj = [3 , 5 , 6 ,5];

// for (const key of myObj) {
//     console.log(key);
// }

let a = window;

// alert('hello harry');
// a = prompt('enter your name');
// a = confirm('are you you want to delete');
a = innerHeight;
a=innerWidth;
a = scrollX;
a = scrollY;
console.log(a);