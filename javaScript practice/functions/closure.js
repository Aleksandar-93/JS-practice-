// Closure
// closure gives you an access to an outer function's scope from an inner function
// make private variables with closures

function outer() {
  let privateVar = 'secret';
  function inner() {
    console.log(`hello there secret is : ${privateVar} `);
  }
  return inner;
  inner();
}
// console.log(privateVar);

outer()();

const value = outer();
console.log(value);
value();

// pristup funkciji koja se nalazi u drugoj funkciji 
// fora je sto inner ima pristup variablama koje se nalaze unutrar outter
// dok nemozemo da pristupimo onima koje se nalaze unutar