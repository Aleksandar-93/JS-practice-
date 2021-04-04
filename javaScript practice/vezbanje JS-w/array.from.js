const udemy = 'udemy';
console.log(Array.from(udemy))

const text = document.querySelectorAll('.text');
console.log(text);

const newText = Array.from(text).find((item)=>
item.textContent ==='person'
);

console.log(newText);

const items = Array.from({length:120},(_, index)=>{
  return index;
});
console.log(items);

const itemPerPage = 10;
// zato sto je ravan broj zato ce vratiti 12 ali ako podelimo sa nekim drugi brojem vratice decimalan broj
//zato koristimo math celing
const pages = Math.ceil(items.length / itemPerPage);
console.log(pages)

const newItems = Array.from({length:pages}, (_, index)=>{
    const start = index * itemPerPage;
    const tempItems = items.slice(start, start + itemPerPage);
    return tempItems;
});

console.log(newItems);