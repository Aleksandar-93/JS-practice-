const counter = {
    count: 0,
    increment (){
        console.log(this);
        this.count++
        console.log(this.count);
    }
}

const btn = document.querySelector('.increment');

//fail
// btn.addEventListener('click', counter.increment);

// soulutions some casses

// posto dodajem btn addevent ono gleda u dugme a tamo nema nista zato smo stavili .bind(counter)
// da bu gledalo u counter {menjamo gde increment THIS gleda } kazemo gledaj u counter

// btn.addEventListener('click', counter.increment.bind(counter));


// ako obrisem addeventlisner nece da imamo referencu na  ('click',  ovu ovdee funkciju)
// imaju neki slucajevi kada moramo da obrisemo


const increment = counter.increment.bind(counter);
btn.addEventListener('click', increment);
// mozemo da obrisemo naprimer ovaj event lissner ali cemo imati referensu na nasu funkciju
btn.removeEventListener('click', increment);

// cul stvar je sto cu uvek imati referencu za ovu funkciju da je koristim bilo gde u nasem kodu




