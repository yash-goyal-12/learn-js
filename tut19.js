console.log('we are at tut 19');

let str = 'python';
let links = document.links;
console.log(links);
let href;
Array.from(links).forEach(function(element){
href = element.href;
if(href.includes(str)){
  console.log(href);
} 
});


let str = "python";
let links = document.links;
console.log(links);
let href;
Array.from(links).forEach(function(element) {
  href = element.href;
  if (href.includes(str)) {
    console.log(href);
  }
});