console.log('we are at tut27');

let obj1 = {
    name: 'maruti800',
    topSpeed: 80,
    run : function() {
        console.log('car is running');
    }
};
console.log(obj1);

function GeneralCar(name , topSpeed) {
    this.name = name;
    this.topSpeed = topSpeed;
    this.run = function() {
        console.log(`${name} is running at topspeed ${topSpeed}`);
    };
    this.analyse = function() {
        console.log(`${name} is slower by ${250 - topSpeed} km/h than mercedes`);
    }
};

car1 = new GeneralCar('mercedes' , 250);
console.log(car1);
car1.run();
car1.analyse();

car2 = new GeneralCar('audi' , 200);

car2.analyse();
