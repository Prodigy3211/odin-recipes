const a = 5;
const b = 4;

function add7(){
 let x = a +7;
 return x; 
}

console.log(add7());


function multiply (){
    let x = a * b;
    return x;
}

console.log(multiply());


let myString = 'hello baby';

function capitalize(){
 

 return myString.charAt(0).toUpperCase() + myString.slice(1);
}

console.log(capitalize());


function lastLetter(){
    let stringLength = myString.length;
    let x = stringLength;
    return myString.charAt(x - 1);
}

console.log(lastLetter());