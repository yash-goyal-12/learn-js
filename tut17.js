console.log('we are at tut 17');
document.getElementById('heading').addEventListener('mouseover' , function(e) {
    let variable;
    console.log('you have clicked on heading');
    variable = e.target;
    variable = e.target.className;

    variable = e.offsetX;
    variable = e.offsetY;
    variable = e.clientY;
    variable = e.clientX;
    console.log(variable);
});