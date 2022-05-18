console.log('we are at tut 37');

const students = [
    {name: 'harry' , subject: 'javascript'},
    {name: 'rohan' , subject: 'machine learning'}
];

function enrollStudent(student , callback) {
    setTimeout(() => {
         students.push(student);  
         console.log('student has been enrolled');  
         callback();    
    }, 3000);
};

function getStudents() {
    setTimeout(() => {
       let str = "";
       students.forEach(function(student) {
           str += `<li> ${student.name} </li>`;
       });
       document.getElementById('students').innerHTML = str; 
    }, 1000);
}

enrollStudent({name: 'yaash' , subject : 'java'} , getStudents);