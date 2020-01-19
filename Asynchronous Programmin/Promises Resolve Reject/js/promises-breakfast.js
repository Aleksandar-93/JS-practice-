  const order = true;
const brakfastPromise = new promise((resolve, reject) =>{
  setTimeout(() =>{
     if(order) {
          resolve('Your orther is ready. come and get it !');   
      }else{
       reject( Error('Oh no! There was a problem with your orther.'));      
}    
   },3000);                                  
});
console.log(brakfastPromise);
brakfastPromise.then(val => console.log(val)).catch(err => console.log(err))
