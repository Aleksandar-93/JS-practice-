function Person(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = function(){
            console.log(
                `My full name is ${this.firstName} ${this.lastName}
                and I love React`
            );
        }
}


const sara = new Person('sara', 'adrosnon');
sara.fullName()


// New kreira nov objekat ukazuje na njega i ne moramo da koristimo return










// factory funcija odnosno blue print
function createPerson(firstName, lastName){
    return{
        firstName: firstName,
        lastName: lastName,
        fullName: function(){
            console.log(
                `My full name is ${this.firstName} ${this.lastName}
                and I love JS`
            );
        }
    }
}

const john = createPerson('john', 'petaodwad');
john.fullName()