class Account {
    constructor(name, initialBalance){
        this.name = name;
        this.balance = initialBalance;
    }
    bankar = "mira"  // ide u svakom kreiranom kao nova vrednost
    deposit(amount){
        this.balance += amount;
        console.log(`Hello ${this.name}, your balance is ${this.balance}`);
    }
}

const john = new Account('john',0);
console.log(john);
console.log(john.name);
john.deposit(200);

 console.log('----------------------');
Account.prototype.bank = 'chase';
// a ovde smo dodali ovu vrednost u prototype

 console.log('----------------------');

const bob = new Account('bob',0);
console.log(bob);
console.log(bob.name);
bob.deposit(444);


