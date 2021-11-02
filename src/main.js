import { dataChampions } from './data.js';
// listo funcion en data hecha
let arraychampion = dataChampions();

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
        list = document.createElement("li");
        enlace = document.createElement("a");
        enlace.href = "#";
        if (arrayNav[i] == arrayNav[2]) {
            b = document.createElement("img");
            enlace.appendChild(b);
            b.src = arrayNav[2].toString();
            enlace.href = "#";
            // console.log(b);
        } else {
            enlace.textContent += arrayNav[i].toString();
        }
        list.appendChild(enlace);
        item.appendChild(list);
    }
}
///---------End of function Nav -------
/* ---Create array button rol------ */
let arrayButton = ["Fighters", "Shooters", "Magicians", "Assassins", "Tanks", "Supports"];
/* ----Create function Button rol dinamic --- */
function printButton() {

    let rolChampion, button, i;

    rolChampion = document.getElementById("rolChampion");

    for (i = 0; i < arrayButton.length; i++) {
        button = document.createElement("button");
        let textButton = document.createTextNode(arrayButton[i])
        button.appendChild(textButton);
        button.setAttribute("class", "btn third");
       button.setAttribute("id","idRol"+arrayButton[i])
        rolChampion.appendChild(button);
    }
}
///---------End of function Nav -------
/* ------------ Get Id div Cards ----- */
let divChampion = document.getElementById("divShowChampions");
/* --Create function PrintChampions in cards-- */
function printChampions(arraychampion) {
    let imagen;
    imagen = arraychampion.splash;
    let cards = document.createElement("div");
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
/// esto es para regresarrr hasta donde estaba bien jujuju
// areglare estilos de roles
