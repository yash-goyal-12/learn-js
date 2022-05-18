console.log('tut8');

const age = '54';

if(age == 39) {
    console.log('age is 39');
}
else if(age === 19) {
console.log('age is 19');
 
} else {
    console.log('age is not 39');
}

const vari = 34;

if(typeof vari !== 'undefined') {
    console.log('vari is defined');
} else {
    console.log('vari is not defined');
}

const ages = 45;
doesDrive = true;

if(doesDrive && age >= 18) {
    console.log('you can drive');

} else {
    console.log('you cannot dive');
}

console.log(age == 45? 'age is 45' : 'age is not 45');

switch (age) {
    case 19:
     console.log('age is 19');   
        break;

        case 54:
     console.log('age is 54');   
        break;

        case 29:
     console.log('age is 29');   
        break;

    default:
        console.log('you  are unknown age');
        break;
}