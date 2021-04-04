// ovo je name export ime mora da bude isto kao variabla u filu
import {random, people} from './utils/data.js' 
// ovo je default ime ne mora da bude isto 
import showPeople from './utils/showPeople.js'
import get from './utils/getElement.js'
// ovde sam uzeo anonimnu funkciju i ovde sam joj dodelio ime export default


console.log(random);


const container = get('.container');
const btn = get('.btn');
// const container1= get('.container1');

btn.addEventListener('click', ()=>{
    container.innerHTML = showPeople(people);
})