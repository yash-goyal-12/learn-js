console.log('we are at tut39');


function func1() {
    return new Promise(function (resolve , reject) {
        setTimeout(() => {
            const error = true;
            if(!error) {
                console.log('your promise has been resolved');
                resolve();
            } else {
               console.log('your promise has not been resolved');
               reject('yhui');
            }
        }, 2000);
    })
}

func1().then(function() {
    console.log('thanks for resolving');
}).catch(function(e) {
    console.log('very bad bro');
});
