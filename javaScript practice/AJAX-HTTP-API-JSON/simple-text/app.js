const xhr = new XMLHttpRequest();

xhr.open('GET', './api/sample.txt');
xhr.onreadystatechange = function () {
  // console.log(xhr);
  if (xhr.readyState === 4 && xhr.status === 200) {
    const text = document.createElement('p');
    text.textContent = xhr.responseText;
    document.body.appendChild(text);
  } else {
    console.log({
      status: xhr.status,
      text: xhr.statusText,
      state: xhr.readyState,
    });
  }
};
xhr.send();






console.log('hello world');

//  ovo ce prvo da se log zato sto xhr radi iza sceme dok ne dodje 
// redy na 4 i status 200 nece se izvrsiti zato se ovo log prvo
// sve ovo gre se izvrsava u pozadini sve je u ms...