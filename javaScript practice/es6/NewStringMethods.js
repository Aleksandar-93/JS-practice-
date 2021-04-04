// new string methods
// startWith(), endWith(), include(), repeat()

const person = 'Peter Smith';
const employee = '23456-EMP-PETER-SMITH';
const menager = '23456-MAN-JOHN-DOE';

// startWith

console.log(person.startsWith('Pet'));
console.log(person.startsWith('peter'));
console.log(employee.startsWith('EMP', 6)); // pocinje sa EMP od index 6

console.log('--------------');
//end with
console.log(person.endsWith('Smith'));
console.log(person.endsWith('peter'));
console.log(menager.endsWith('MAN', 9)); // zavrsava se sa EMP od index 6

console.log('------------------');

//include

console.log(employee.includes('EMP')); // sadrzi sa EMP od index 6

const multiplyPeople = (person, amount) => person.repeat(amount);

// repeat

const people = multiplyPeople(person, 10);

console.log(people);// koliko puta da ponovimo sepcifican string