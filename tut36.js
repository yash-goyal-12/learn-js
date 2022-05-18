console.log('we are at tut 36');


class library {
    constructor(booklist) {
        this.booklist = booklist;
        this.issuedBooks = {};
     }

getbooklist() {

    this.booklist.forEach(element => {
          console.log(element);       
    });
}
issueBook(bookname , user) {
    this.issuedBooks[bookname] = user;
}

returnBook(bookname) {
    delete this.issuedBooks[bookname];
}
}