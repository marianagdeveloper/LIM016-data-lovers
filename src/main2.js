import { example } from './data.js';
import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';


console.log(example, data);


window.onload = function () {
    printNav();
    printChampions();


}
let arrayNav = ["Champions", "Ranking","imagen", "Download", "News"];

function printNav() {

    let temp, item, a,b, i;
    temp = document.getElementById("idTemplate");
    //get the div element from the template:
    item = temp.querySelector("ul");
    //for each item in the array: 
    for (i = 0; i < arrayNav.length; i++) {
        //create elemnts li
        a = document.createElement("li");
    
       if(arrayNav[i] == arrayNav[2]){
          
       b=document.createElement("img");
       b.src= "https://www.gamerfocus.co/wp-content/uploads/2013/12/league-of-legends-modo-showdown-riot-games-experimental-1.png";
       console.log(b);
       a = b;
       
    }else  
     {
        a.textContent += arrayNav[i];
    }
        //append the new node wherever you like:
        //document.temp2.appendChild(a);
        item.appendChild(a);
   
    }
}

function printChampions(){
  alert(data)
}

