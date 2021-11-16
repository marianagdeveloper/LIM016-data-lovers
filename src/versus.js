
import { dataChampions } from './data.js';
let image = [];
let arraychampion = [];
let arrayRole = ["Fighter", "Marksman", "Mage", "Assassin", "Tank", "Support"];
let arrayIdPanel = ["uno", "dos", "tres", "cuatro", "cinco", "seis"];
let containerImage = document.getElementById("img1");
let containerImage2 = document.getElementById("img2");
let pName1 = document.getElementById("pName1");
let pName2 = document.getElementById("pName2");
let divGraficVersus = document.getElementById("graficVersus");
async function carga() {
  await dataChampions().then((data) => {
    arraychampion = data;

    for (let i = 0; i < 5; i++) {
      arrayIdPanel[i] = document.getElementById(arrayIdPanel[i]);
    }

    uno.addEventListener("click", championIcon(arrayRole[0], uno));
    dos.addEventListener("click", championIcon(arrayRole[1], arrayIdPanel[1]));
    tres.addEventListener("click", championIcon(arrayRole[2], arrayIdPanel[2]));
    cuatro.addEventListener("click", championIcon(arrayRole[3], arrayIdPanel[3]));
    cinco.addEventListener("click", championIcon(arrayRole[4], arrayIdPanel[4]));
    seis.addEventListener("click", championIcon(arrayRole[5], seis));







  });
}
carga();

window.onload = () => {

  carga2(arraychampion);
}

function carga2(arraychampion) {

  let ivi = [];
  let name = [];
  for (let i = 0; i < arraychampion.length; i++) {

    image[i] = arraychampion[i].splash;

    ivi[i] = document.getElementById(arraychampion[i].id);
    name[i] = arraychampion[i].name;
    ivi[i].addEventListener("click", function () {
      console.log("aaaa", ivi[i])
      console.log("imagen ruta " + image[i]);

      if (containerImage.src == "") {

        console.log("acaaaaaa");
        containerImage.src = image[i];
        let texto = document.createTextNode(name[i]);
        let primero = name[i];
        console.log("eeeeeeeeeeeeeeeeeeee", primero);
        pName1.appendChild(texto);
      } else {
        containerImage2.src = image[i];
        let texto2 = document.createTextNode(name[i]);
        let segundo = name[i];
        console.log("eeeeeeeeeeeeeeeeeeee", segundo);
        pName2.appendChild(texto2);
        championElegido(primero, segundo);
      }



      //aqui realizar los graficos

      function championElegido(primero, segundo) {

        for (let i = 0; i < arraychampion.length; i++) {

          if (arraychampion[i].name == primero) {
            let cpp = arraychampion[i];
            for (let i = 0; i < arraychampion.length; i++) {
              if (arraychampion[i].name == segundo) {
                let css = arraychampion[i];
              }
            }
            /* eslint-disable */
            google.charts.setOnLoadCallback(drawChartVersus);

            function drawChartVersus() {

              let arrayColors = ["blue", "red"];
              let datas = google.visualization.arrayToDataTable([
//falta cambiar 
                ['Abilities', cpp.name, css.name],
                ['Hp', cpp.stats.hp, arrayColors[0]],
                ['Move Speed', cpp.stats.movespeed, arrayColors[0]],
                ['hpperlevel', cpp.stats.hpperlevel, arrayColors[0]],
                ['spellblock', cpp.stats.spellblock, arrayColors[0]],
                ['armor', cpp.stats.armor, arrayColors[0]],
                ['hpregen', cpp.stats.hpregen, arrayColors[0]],
                ['Atacck Range', cpp.stats.attackrange, arrayColors[0]],
                ['Crit', cpp.stats.crit, arrayColors[0]],
                ['Attack Damage', cpp.stats.attackdamage, arrayColors[0]],
                ['attackdamageperlevel', cpp.stats.attackdamageperlevel, arrayColors[0]],

                //fdsfsdfd
                /* var data = google.visualization.arrayToDataTable([
                  ['Galaxy', 'Distance', 'Brightness'],
                  ['Canis Major Dwarf', 8000, 23.3],
                  ['Sagittarius Dwarf', 24000, 4.5],
                  ['Ursa Major II Dwarf', 30000, 14.3],
                  ['Lg. Magellanic Cloud', 50000, 0.9],
                  ['Bootes I', 60000, 13.1]
                ]); */
                //dsfsdfdsf

              ]);

              let view = new google.visualization.DataView(datas);
              view.setColumns([0, 1,
                {
                  calc: "stringify",
                  sourceColumn: 1,
                  type: "string",
                  role: "annotation"
                },
                2]);

              let options = {
                title: "The most populares Champions",
                width: 600,
                height: 350,
                bar: { groupWidth: "95%" },
                legend: { position: "none" },
              };
              let chart = new google.visualization.ColumnChart(divGraficVersus);
              chart.draw(view, options);

            }
          }
        }
      }




      //aqui termina grafico

    });

  }

}



function championIcon(btnRol, m) {
  let array = arraychampion.filter(e => e.tags.includes(btnRol));

  const elements = array.reduce((acc, champion) => acc + iconTemplate(champion), "");



  m.innerHTML = elements;


}

function iconTemplate(champion) {

  return `
    <div class="containerIcono" >
    <img  width="50px"  src=${champion.img} alt="">
      <button id=${champion.id} > ${champion.name} </button>   
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