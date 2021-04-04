// callbacks, promises, async/await
// what if no resolve, one is rejected
const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.four');
const heading3 = document.querySelector('.three');
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  addColor(1000, heading1, 'red')
    .then(() => addColor(2000, heading2, 'green'))
    .then(() => addColor(1000, heading3, 'blue'))
    .catch((err) => console.log(err)); 
});
// we can chain then and use resolve again and again and again if error trow .catch
function addColor(time, element, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(new Error(`There is no such element ${element}`));
    }
  });
}
 // u odnosu na cd-exemple ovo je mnogo lakse procitati imamo funkciju koja prima 3 argumenta
 // onda ona vraca promise ako je tacno tj ima taj element promeni boju ako ne vrati error
 // i mi zovemo elemente gore na vrhu pregledno je u odnosu na cb-exemple  ovde mozemo da ih
 // chain jednu za drugom i ako nema elementa vrati error