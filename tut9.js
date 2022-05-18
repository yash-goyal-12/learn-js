console.log('tut9');

for(let i =0; i<100; i++) {
    console.log(i);
    if(i == 5) {
        break;
    }
}
let j =0;
while(j<100) {
    console.log(j);
    j++;
    if(j == 8) {
        break;
    }

}
let k = 1000;
do{
console.log(k);
k++;
} while(k < 100);

//******************************* */

let arr = [2 , 5 , 6 , 4 , 2 , 3];





arr.forEach(
    function(element , index  , array) { 
        console.log(element , array , index);
    });