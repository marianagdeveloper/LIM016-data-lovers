import { example } from './data.js';
import data from './data/lol/lol.js';

const dataGet = JSON.stringify(data);
const aux = JSON.parse(dataGet);
let arrayData = Object.values(aux);
let champion;
window.onload = function () {
    printNav();

    printChampions(arrayData,"Aatrox");
    printChampions(arrayData,"Alistar");
    printChampions(arrayData,"Vladimir");
    printChampions(arrayData,"Akali");
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
/* ------------ Get Id div Cards ----- */

let divCard = document.getElementById("divCard");
/* --Create function PrintChampions in cards-- */
function printChampions(arrayData,champion) {
    let imagen, varChampion;
    console.log("imprime",arrayData) 
    varChampion = arrayData[3][champion];
    imagen = (varChampion.splash).toString();
    let x = document.createElement("img");
    divCard.appendChild(x);
    x.setAttribute("class","imagen");
    x.src = imagen;
    let y = document.createElement("button");
    divCard.appendChild(y);
    console.log("nombre "+varChampion.id);
    let text=document.createTextNode(varChampion.id);
    y.appendChild(text);
}
///// esto es una prueba despues de comentar el map y ahora enviare parametros
//// a comenxrarara aaaaaa !!!!
///// listtoooo
