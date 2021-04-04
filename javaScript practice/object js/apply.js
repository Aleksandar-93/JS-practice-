// apply = izvrsava se instant, argument - vraca niz predmeta (itema)
const john={
    name:'john',
    age:24,
}
const susan={
    name:'susan',
    age:21
}


function greet (city, country){
        console.log(this);
        console.log(`Hello, i ${this.name} and i am ${this.age} years old and I live in ${city}, ${country}`);
    }


greet.call(john, 'sand diego' , 'US');
greet.call(susan, 'sand diego' , 'US');
greet.call({name:'peeter', age: 30}, 'sand diego' , 'US')

console.log('----------------------');

greet.apply(john, ['sand diego' , 'US' ]);
greet.apply(susan , ['sand diego' , 'US' ]);
greet.apply({name:'peeter', age: 30}, ['sand diego' , 'US' ])


// oboje rade isto samo je razlika kako cemo da ubacimo argumente

//CALL saljem kao listu predmeta
// APPLY saljem kao array niz






