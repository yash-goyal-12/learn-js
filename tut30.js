console.log('this is tut30');

//employee contructor

function Employee(name , age ,salary) {
this.name = name;
this.age = age;
this.salary = salary;
}

Employee.prototype.slogan = function() {
    return `this company is best. regards ${name}`;
};

let harry = new Employee('harry' , 56 , 350000);

console.log(harry);
console.log(harry.slogan);

function programmer(name , age , salary , language) {
Employee.call(this , name , age , salary);
this.language = language;
}

programmer.prototype = Object.create(Employee.prototype);

let rohan = new programmer('rohan' , 32 , 44 , 'javascript');

console.log(rohan);