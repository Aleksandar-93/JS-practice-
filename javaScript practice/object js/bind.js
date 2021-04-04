// bind = aassign, use later , argument - list of items
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
  

// assign, call it leatter

const susanGreat = greet.bind(susan, 'torranto', 'CA');

susanGreat();
 // dodeli variabli i pozovi kasnije po potrebi 