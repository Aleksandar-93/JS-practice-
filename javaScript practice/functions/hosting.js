// Hoisting
// function and var declarations are hoisted
// safer to access only after initialized
display();
moreComplex();
console.log(display);
console.log(moreComplex);
// console.log(firstName);
// console.log(lastName);
// console.log(random);

const firstName = 'john';
let lastName = 'jordan';
var random = 'random';

function display() {
  console.log('hello world');
}

function moreComplex() {
  console.log(` ${random}`);
}

// mozemo da pozovemo funkciju gore pre nego gde smo je 
// napravili dok kod variabli to ne moze
// js kad vidi funkciju ona je dize na vrh to se desava 
// iza mi to ne mozemo da vidimo 