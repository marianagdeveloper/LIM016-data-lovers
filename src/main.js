
import { dataChampions } from './data.js';
// listo funcion en data hecha
let arraychampion = dataChampions();
let divChampion = document.getElementById("divShowChampions");
let arrayButton = ["Fighter", "Marksman", "Mage", "Assassin", "Tank", "Support"];
let button, btnRol = [], textButton, cards, rolChampion;

window.onload = function () {
    printNav();
    recorrerData();
    printButton();

}
//probando foreach listoo o
function recorrerData() {
    arraychampion.forEach(element => printChampions(element));
}
/* ---Create array Nav dinamic------ */
let arrayNav = ["Champions", "Ranking", "https://www.gamerfocus.co/wp-content/uploads/2013/12/league-of-legends-modo-showdown-riot-games-experimental-1.png", "Download", "News"];
/* ----Create function Nav dinamic --- */
function printNav() {

    let temp, item, list, b, i, enlace;
    temp = document.getElementById("navDinamic");

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
///---------End of function Nav -------


/* --Create function PrintChampions in cards-- */
function printChampions(arraychampion) {
    console.log(arraychampion);
    let imagen;
    imagen = arraychampion.splash;
    cards = document.createElement("div");
    divChampion.appendChild(cards);
    cards.setAttribute("class", "card");
    let imgbox = document.createElement("div");
    cards.appendChild(imgbox);
    imgbox.setAttribute("class", "img-box");
    let x = document.createElement("img");
    imgbox.appendChild(x);
    x.setAttribute("class", "imagen");
    x.src = imagen;
    let conten = document.createElement("div");
    cards.appendChild(conten);
    conten.setAttribute("class", "content");
    let y = document.createElement("h2");
    conten.appendChild(y);
    let text = document.createTextNode(arraychampion.id);
    y.appendChild(text);
    let p = document.createElement("p");
    conten.appendChild(p);
    let texto = document.createTextNode(arraychampion.blurb);
    p.appendChild(texto);
}

//// acaaa estoy empezando de nuevooo


/* ----Create function Button rol dinamic --- */
function printButton() {
    let i;

    rolChampion = document.getElementById("rolChampion");

    for (i = 0; i < arrayButton.length; i++) {
        button = document.createElement("button");
        textButton = document.createTextNode(arrayButton[i])
        button.appendChild(textButton);
        rolChampion.appendChild(button);
        button.setAttribute("class", "btn third");
        button.setAttribute('id', (arrayButton[i]));

        btnRol[i] = document.getElementById(arrayButton[i]);
    
     
}
    for(let i=0;i<btnRol.length;i++){
        btnRol[i].addEventListener('click',function() {
            filter(btnRol[i]);
            
        });
    }
 
}
/* ----Create function filter eventlistener --- */
function filter(btnRol) {
    
    divChampion.innerHTML = "";
    arraychampion.forEach(element => filterRol(element,btnRol));


}

/* ----Create function filterRol call filter --- */
function filterRol(arraychampion,btnRol) {
 
            for (let i = 0; i < (arraychampion.tags).length; i++) {
      
            if(arraychampion.tags[i] == btnRol.id) {

                printChampions(arraychampion);
    
            } 
            
        }
    }
   ///khbefhiweb kjnfnwekjnfwe  kmnkmn
///---------End of function Print Button -------<<



