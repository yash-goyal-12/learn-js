console.log('we are at tut 42');

let myBtn = document.getElementById('myBtn');



function getData() {
    url = 'https://api.github.com/users';
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    })
}
getData();