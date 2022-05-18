console.log('we are at tut41');

// function harry() {
//     console.log('harry is best person');
// }

const harry = ()=>{
   console.log('harry is best person'); 
};

harry();

// const greet = function() {
//     return 'good morning';
// }

// const greet = ()=> {
//     return 'good morning';
// }
// const greet = () => "good morning";

//console.log(greet());

const name1 = () => ({name: 'harry'});
console.log(name1());

const greet = (name , ending)=> 'good morning ' + name + ending;
console.log(greet('yash' , 'bye'));

