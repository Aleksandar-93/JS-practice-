// Closure

function newAccount(name, initialBalance) {
  let balance = initialBalance;
  // niko ! nema pristup ovom balancu samo mi sa metodama kojima smo kreirali
  function showBalance() {
    console.log(`Hey ${name}, your balance is ${balance}`);
  }
  function deposit(amount) {
    balance += amount;
    showBalance();
  }
  function withdraw(amount) {
    if (amount > balance) {
      console.log(`Hey, ${name}, sorry not enough funds`);
      return;
    }
    balance -= amount;
    showBalance();
  }
  return { showBalance: showBalance, deposit: deposit, withdraw: withdraw };
  //mozemo da vratimo funkciju a mozemo da napravimo objekat i sad ova funkcija je
  // metoda mozemo sa tackom da pozovemo .showBalance()
  // sad mogu samo da napravimo jos funkcija i da vratim u objektu  
}

const john = newAccount('john', 1000);
const bob = newAccount('bob', 1000);

john.showBalance();
john.deposit(400);
john.deposit(1000);
john.withdraw(400);
john.balance = 10000; // ne mozemo da pristupimo balancu nismo ga stavili u objekat koji vracamo
john.withdraw(2001);
bob.showBalance();
bob.deposit(400);

// samo su metode dostupne i moze da se pristupi balancu preko metoda koje imamo
