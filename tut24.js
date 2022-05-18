console.log('we are at tut 24');

let date = new Date();
console.log(date);

//let otherDate = new Date('03/04/2016');
let otherDate = new Date('03-08-2010 01:45:02');

a = otherDate.setDate(12);
console.log(a);

a = otherDate.setDate(23);
console.log(otherDate);

a = otherDate.setMinutes(23);
otherDate.setHours(23);
console.log(otherDate);

a = otherDate.getMilliseconds();
console.log(a);


a = otherDate.getDay();
console.log(a);