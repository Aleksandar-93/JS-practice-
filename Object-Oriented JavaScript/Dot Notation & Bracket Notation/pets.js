const ernie = {
    animal: 'dog',
    age: '1',
    breed: 'pug',
    bark: function(){
        console.log('Woof!');
    }
}

console.log(ernie['age']);
console.log(ernie['breed']);

ernie['bark']();

var prop = 'breed';
ernie[prop];
