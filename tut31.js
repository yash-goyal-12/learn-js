console.log('this is tut 31');

class Employee {
    constructor(givenName , givenExperience , givenDivision ){
          this.name = givenName;
          this.experience = givenExperience;
          this.division = givenDivision;    
    }

    slogan() {
        return `i am ${this.name} and this company is best`;
    }
    joiningYear() {
        return 2022 - this.experience;
    }

    static add(a , b ) {
     return a+b;
    }
}

// harry = new Employee('harry' , 45 , 'manager');
// console.log(harry);

console.log(Employee.add(6 , 7));


class Programmer extends Employee {
constructor(givenName , givenExperience , givenDivision , language , github){
    super(givenName , givenExperience , givenDivision);
    this.language = language;
    this.github = github;
}

favouriteLanguage() {
    if(this.language == 'python' ) {
        return 'python';
    } else {
        return 'javascript';
    }
}

static multiply(a ,b) {
    return a*b;
}

}

tushar = new Programmer('tushar' , 2 , 'lays' , 'javascript' , 'tushar32');

console.log(tushar);
tushar.favouriteLanguage();

console.log(Programmer.multiply(4 , 8));