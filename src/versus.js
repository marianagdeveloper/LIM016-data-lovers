
import { dataChampions } from './data.js';
let imgId = 0;
let arraychampion = [];
let arrayRole = ["Fighter", "Marksman", "Mage", "Assassin", "Tank", "Support"];
let arrayIdPanel = ["uno", "dos", "tres", "cuatro", "cinco", "seis"];

async function carga() {
  await dataChampions().then((data) => {
    arraychampion = data;

    for (let i = 0; i < 5; i++) {
      arrayIdPanel[i] = document.getElementById(arrayIdPanel[i]);
    }
    uno.addEventListener("click", championIcon(arrayRole[0], arrayIdPanel[0]));
    dos.addEventListener("click", championIcon(arrayRole[1], arrayIdPanel[1]));
    tres.addEventListener("click", championIcon(arrayRole[2], arrayIdPanel[2]));
    cuatro.addEventListener("click", championIcon(arrayRole[3], arrayIdPanel[3]));
    cinco.addEventListener("click", championIcon(arrayRole[4], arrayIdPanel[4]));
    seis.addEventListener("click", championIcon(arrayRole[5], seis));

   /*   document.getElementById("1").addEventListener("click",hola()); */
  });
}

carga();





function hola() {
  console.log("holaaa")

}



function championIcon(btnRol, m) {
  let array = arraychampion.filter(e => e.tags.includes(btnRol));

  const elements = array.reduce((acc, champion) => acc + iconTemplate(champion), "");

  m.innerHTML = elements;


}

function iconTemplate(champion) {
  imgId = imgId + 1;
  return `

    <div class="containerIcono" >
    <img  width="50px"  src=${champion.img} alt="">
      <button id=${imgId} > ${champion.name} </button>   
    </div>
  `
}

const tabLinks = document.querySelectorAll(".tabs a");
const tabPanels = document.querySelectorAll(".tabs-panel");

for (let el of tabLinks) {
  el.addEventListener("click", e => {
    e.preventDefault();

    document.querySelector(".tabs li.active").classList.remove("active");
    document.querySelector(".tabs-panel.active").classList.remove("active");

    const parentListItem = el.parentElement;
    parentListItem.classList.add("active");
    const index = [...parentListItem.parentElement.children].indexOf(parentListItem);

    const panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
    console.log("poanel ", panel);
    panel[0].classList.add("active");

  });
}