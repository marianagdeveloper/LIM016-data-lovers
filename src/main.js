import { example } from './data.js';
import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

// eslint-disable-next-line no-console
console.log(example, data);


window.onload = function () {
    printNav();
    printChampions();

}
let arrayNav = ["Champions", "Ranking","imagen", "Download", "News"];

function printNav() {
    let temp, item, a, i;
    temp = document.getElementById("idTemplate");
    //get the div element from the template:
    item = temp.querySelector("ul");
    //for each item in the array:
    for (i = 0; i < arrayNav.length; i++) {
        //create elemnts li
        a = document.createElement("li");
        //Add data from the array:

        //(arrayNav[2]).innerHtml= <img src='./img/"+cards[rand][0]+"' />
        a.textContent += arrayNav[i];
        //append the new node wherever you like:
        //document.temp2.appendChild(a);
        item.appendChild(a);
    }
}

/* function printFoot(){

} */

function printChampions(){
  alert(data)
}
