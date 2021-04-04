// call = izvrsava se instant, argument - vraca listu predmeta (itema)
const john={
    name:'john',
    age:24,
    greet: function(){
        console.log(this);
        console.log(`Hello, i ${this.name} and i am ${this.age} years old`);
    }
}
const susan={
    name:'susan',
    age:21
}


function greet (){
        console.log(this);
        console.log(`Hello, i ${this.name} and i am ${this.age} years old`);
    }
// this will fail

// susan.greet();
// greet();

// const secondGreet = john.greet;

// secondGreet()


// ovoo radi


greet.call(john);
greet.call(susan);


/* ovo ce da uzme ovu funkciju i da prodje kroz pozvani niz i da je primeni ali razlika 
je sto ne moramo da se ponavljamo kad bi imali 10 objekta da ne pisemo istu metodu u svima
samo je pozovemo kao ovde ako vrednost ne postoji izbacice undifinde */


greet.call({name:'peter', age:30}); // ovo ce gledati u objekat koji se nalazi unutar zagrada
// i izvrsice funkciju na njemu


john.greet.call(susan);

//ovde sam iskoristio metodu koju ima jhon i upotrebio je na susan











