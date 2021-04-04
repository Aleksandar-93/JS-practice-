// Closure

function newAccount(name, initialBalance) {
  let balance = initialBalance;
  function showBalance() {
    console.log(`Hey ${name}, your balance is ${balance}`);
  }
  return showBalance;
}

newAccount('susan', 500)();

const john = newAccount('john', 300);
const bob = newAccount('bob', 1000);

john();
bob();

// mozemo i ovako 
newAccount('susan', 400)();
// aku bikhe he da dodelimo nekoj variabli i pozovemo je kasnije na nacin ispod
const pera = newAccount('pera', 400)
pera();
// mozemo ovako da dodelimo funkciju  i kraramo variablu koja sadrzi ime i para
// i pozivamo jed isto kao funkciju 

// mozemo da napravimo koliko god zelimo instanca paja = itd.. uvek ce da uperi 
// funkciju unutra