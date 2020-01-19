const togglelist = document.getElementById("togglelist");
const listDiv = document.querySelector(".list");
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
// dodao sam klasu .description u input i button da bi objasnio da su ova 2 u istoj gurpi 
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const listUl = listDiv.querySelector('ul');
const lis =listUl.children;
const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;

firstListItem.style.backgroundColor = "lightskyblue";
lastListItem.style.backgroundColor = "lightsteelblue";

function attachListItemButtons (li) {
  
    let up = document.createElement('button');
    up.className = 'up';
    up.textContent = 'Up';
    li.appendChild(up);
  
    let down = document.createElement('button');
    down.className = 'down';
    down.textContent = 'Down';
    li.appendChild(down);
  
    let remove = document.createElement('button');
    remove.className = 'remove';
    remove.textContent = 'Remove';
    li.appendChild(remove);
}
// ovde sam dodao dugmice svi listama koje napravim 

  for (let i = 0; i < lis.length; i += 1){
  attachListItemButtons(lis[i]);
    
  }
  
listUl.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    if(event.target.className == 'remove') {
        let li = event.target.parentNode;
        let ul = li.parentNode;
         ul.removeChild(li);
    }
     if(event.target.className == 'up') {
        let li = event.target.parentNode;
        let prevLi = li.previousElementSibling;
        let ul = li.parentNode;
       if (prevLi){
        ul.insertBefore(li, prevLi);
       }
    }
    
    if(event.target.className == 'down') {
        let li = event.target.parentNode;
        let nextLi = li.nextElementSibling;
        let ul = li.parentNode;
       if (nextLi){
        ul.insertBefore(nextLi, li);
       }
    }
  }
});




togglelist.addEventListener('click', () => {
                            
if (listDiv.style.display == "none"){
  togglelist.textContent = "Hide list"
 listDiv.style.display = "block";

}else {
togglelist.textContent = "Show list"
listDiv.style.display = "none";
  
}
});


descriptionButton.addEventListener('click', () => {
descriptionP.innerHTML = descriptionInput.value + ':';
 descriptionInput.value =" " ;
                    });


addItemButton.addEventListener('click', () => {
 let li = document.createElement('li');
 let ul = document.getElementsByTagName('Ul')[0];
  li.textContent = addItemInput.value;
  attachListItemButtons(li);
  ul.appendChild(li);
  addItemInput.value = "";
                         });


