const myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i+=1){
  myList[i].style.color="purple";
  myList[i].style.fontSize="130%";
}

const errorNotPurple = document.querySelectorAll('.error-not-purple');

for (let i = 0; i < errorNotPurple.length; i+=1){
  errorNotPurple[i].style.color="red";
  errorNotPurple[i].style.fontSize="130%";
}

const evens = document.querySelectorAll('li:nth-child(odd)');

for (let i = 0; i < evens.length; i+=1){
  evens[i].style.backgroundColor="lightgray";
  evens[i].style.fontSize="130%";
}



 























/*
const myHeading = document.getElementsByTagName('h1')[0];
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');

myButton.addEventListener('click', () => {
                          
     myHeading.style.color = myTextInput.value;                           
                           
 }); */                         