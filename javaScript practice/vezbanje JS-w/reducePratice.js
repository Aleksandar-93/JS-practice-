const cart=[
    {title:'Samsung Galaxy S7', price: 599.99, ammount:1,},
    {title:'Google picel', price: 499.99, ammount:2,},
    {title:'xhaomi redmie note 2', price: 799.99, ammount:4,},
    {title:'xhaomi redmie note 5', price: 399.99, ammount:3,},

];

// racuna ukupan broj predmeta i koliko kostaju kolica // ali ako pozovemo total vraca objekat 
let total = cart.reduce((total, cartItems)=>{
    const {ammount,price} = cartItems;
    // count items
    total.totalItems += ammount;
    //count summ
    total.cartTotal += price * ammount;

    return total;
},{
    totalItems: 0,
    cartTotal: 0
});

console.log(total);

    //upotrebili smo destructuring i napravili nase 2 varibale koje sadrze nase vrednosti
let {totalItems,cartTotal} = cart.reduce((total, cartItems)=>{
    const {ammount,price} = cartItems;
    // count items
    total.totalItems += ammount;
    //count summ
    total.cartTotal += price * ammount;

    return total;
},{
    totalItems: 0,
    cartTotal: 0
});
console.log(totalItems,cartTotal);