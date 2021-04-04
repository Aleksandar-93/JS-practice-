function Account (name, initialBalance){
    this.name = name;
    this.balance = initialBalance;
}
const john = new Account('john', 200);
const bob = new Account('bob', 0);

Account.prototype.bank = "CHASE";
Account.prototype.deposit = function(amount){
        this.balance += amount;
        console.log(`Hello ${this.name}, your balance is ${this.balance}`);
    }

// console.log(john.bank);
console.log(bob);

john.deposit(300);
bob.deposit(444);
bob.deposit(300);

// kada umamo konstruktur funkciju umesto da kada pozoivamo odnosno pravimo nov objekat pozivamo svaki put
//napreprimer ime banke mi je stavimo u prototyoe i pozivamo po potrebi

/* js prvo gleda dali ima vrenost u nasem objektu ako nema potrazice u prototype*/

console.log(bob);
console.log({});
console.log([]);

// svaka funkcija niz i objekat ima prototype u sebi to su metode kojima mozemo da pristupimo
// ali nisu vidljove i upotrebljive dok ih ne pozovemo .concat itd...