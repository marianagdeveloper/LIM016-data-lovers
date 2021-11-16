
import { dataChampions } from './data.js';
let image = [];
let arraychampion = [];
let primero=[],segundo=[];
let arrayRole = ["Fighter", "Marksman", "Mage", "Assassin", "Tank", "Support"];
let arrayIdPanel = ["uno", "dos", "tres", "cuatro", "cinco", "seis"];
let containerImage = document.getElementById("img1");
let containerImage2 = document.getElementById("img2");
let pName1 = document.getElementById("pName1");
let pName2 = document.getElementById("pName2");
let divGraficVersus = document.getElementById("graficVersus");

let btnvs = document.getElementById("btnvs");
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
  let css=[];
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
        primero = name[i];
        console.log("eeeeeeeeeeeeeeeeeeee", primero);
        pName1.appendChild(texto);
      } else {
        containerImage2.src = image[i];
        let texto2 = document.createTextNode(name[i]);
        segundo = name[i];
        console.log("eeeeeeeeeeeeeeeeeeee", segundo);
        pName2.appendChild(texto2);
        btnvs.addEventListener("click",function championElegido(){
        

            for (let i = 0; i < arraychampion.length; i++) {
    
              if (arraychampion[i].name == primero) {
                let cpp = arraychampion[i];
                for (let i = 0; i < arraychampion.length; i++) {
                  if (arraychampion[i].name == segundo) {
                    css = arraychampion[i];
                  }
                }
                /* eslint-disable */
                google.charts.setOnLoadCallback(drawChartVersus);
    
                function drawChartVersus() {
    
                  let arrayColors = ["blue", "red"];
                  let datas = google.visualization.arrayToDataTable([
   
                    ['Abilities', cpp.name, css.name],
                    ['Hp', cpp.stats.hp, css.stats.hp],
                    ['Mp', cpp.stats.mp, css.stats.mp],
 
                    ['Move Speed', cpp.stats.movespeed,css.stats.movespeed],
                    
                    ['Atacck Range', cpp.stats.attackrange, css.stats.attackrange],
                    
                    ['Attack Damage', cpp.stats.attackdamage, css.stats.attackdamage],
                    ['hpperlevel', cpp.stats.hpperlevel, css.stats.hpperlevel],
                    ['spellblock', cpp.stats.spellblock, css.stats.spellblock],
                    ['armor', cpp.stats.armor, css.stats.armor],
                    ['hpregen', cpp.stats.hpregen,css.stats.hpregen],
                /*     ['attackdamageperlevel', cpp.stats.attackdamageperlevel, css.stats.attackdamageperlevel],
                    ['armorperlevel', cpp.stats.armorperlevel, css.stats.armorperlevel],
                    ['Criattackspeedperlevelt', cpp.stats.attackspeedperlevel, css.stats.attackspeedperlevel], */
                 
    
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
                    width: 950,
                    height: 370,
                    bar: { groupWidth: "95%" },
                    legend: { position: "none" },
                  };
                  let chart = new google.visualization.BarChart(divGraficVersus);
                  chart.draw(view, options);
    
                }
              }
            }
          
        })
       ;
      }



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