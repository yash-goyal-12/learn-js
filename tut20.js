console.log('we are tut 20');

let impArray = ['adrak' , 'pyaaz' , 'bhindi'];

// localStorage.setItem('sabzi' , JSON.stringify(impArray));

// localStorage.setItem('name' , 'yash');
// localStorage.setItem('name2' , 'yashu');

//localStorage.clear();
let name = localStorage.getItem('name');
console.log(name);

let a = JSON.parse(localStorage.getItem('sabzi'));
console.log(a);
// localStorage.removeItem('name2');

// sessionStorage.setItem('sessionname' , 'syash');
// sessionStorage.setItem('sessionname2' , 'syashu');
