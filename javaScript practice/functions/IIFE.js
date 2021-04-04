// IIFE immeditly invoked function expression
// older approch -- new Modules
// ne koristi se vise sad se koristi modules
//jednostavan pristup da izbegnemo global skope pollution


// dosta je bio popularan i mzoe da se desi da naletim na njega


const num1 = 30;
const num2 = 50;
// const num1 = 70;

function add() {
  console.log(`the result is : ${num1 + num2}`);
}
add();

(function () {
  const num3 = 30;
  const num4 = 50;
  console.log(`the result is : ${num3 + num4}`);
})();

console.log(num1);
// ovako se namesta funkcija otvorene zagrade unutar anonimna fun. i zagrade()
// ne mogu da pristupim variablama unutar i tako ih zastitim 
(function () {
  const num3 = 30;
  const num4 = 50;
  console.log(`the result is : ${num3 + num4}`);
})();
// pass arguments
(function (num3, num4) {
  console.log(`the result is : ${num3 + num4}`);
})(500, 900);

// return/assing to variable
const result = (function (num3, num4) {
  console.log(`the result is : ${num3 + num4}`);
  return num3 + num4;
})(500, 900);

console.log(result);