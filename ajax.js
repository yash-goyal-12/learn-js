console.log('we are at ajax');

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click' , buttonClickHandler);

function buttonClickHandler() {
    console.log('you have clicked the fetchBtn');

    const xhr = new XMLHttpRequest();

    xhr.open('GET' , 'https://jsonplaceholder.typicode.com/todos/1' , true);

    xhr.onprogress = function() {
        console.log('onprogress');
    };

    xhr.onload = function() {
        if(this.status == 200) {
            console.log(this.responseText);
        } else {
console.log('some error occured');
        }
               
    }

    xhr.send();

    console.log('we are done');

}