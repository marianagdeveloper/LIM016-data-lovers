
import { dataChampions } from './data.js';
let arraychampion = [];
let sectionGrafic = document.getElementById("graficRanking");


async function carga() {
    await dataChampions().then((data) => {
        arraychampion = data;
        let newArray = [];
        let arrayTop = arraychampion.filter(e => (e.info.attack + e.info.defense + e.info.magic + e.info.difficulty) > 24);
        console.log("arreglo ordenado primero", arrayTop);

        let arrayOrderM = arrayTop.sort(function (a, b) { return (a.info.attack + a.info.defense + a.info.magic + a.info.difficulty) - (b.info.attack + b.info.defense + b.info.magic + b.info.difficulty) });

        let arrayOrder = arrayOrderM.reverse();
        if (arrayOrder.length > 10) {
            for (let i = 0; i < arrayOrder.length; i++) {
                newArray[i] = arrayOrder[i];
                if (newArray.length == 10) {
                    i = arrayOrder.length;
                }
            }
        }

        const elements = newArray.reduce((acc,champion) =>acc+ topTemplate(champion),"");
       

        sectionGrafic.innerHTML = elements;


        function topTemplate(champion) {
            const { attack, defense, magic, difficulty } = champion.info;

            return `
              <div class="divTop">
              <img class="imgTop" src=${champion.img} alt="">
                <p class="nameTop">
                  <b>${champion.name}</b>
                </p>
                <p class="rayita"></p>
                <p class="puntajeTop">${attack + defense + magic + difficulty}</p>
              </div>
            `
        }


    });
}


carga();








/*  google.charts.setOnLoadCallback(drawChartTop);

 function drawChartTop() {
     let arrayColors = ["blue", "yellow", "green", "black", "red", "grey", "silver", "gold", "platinum", "copper"];
     console.log("arraycolor", arrayColors);

     let datas = google.visualization.arrayToDataTable([

         ['Element', 'Values', { role: 'style' }],
         [newArray[0].name, newArray[0].info.attack + newArray[0].info.defense + newArray[0].info.magic + newArray[0].info.difficulty, arrayColors[0]],
         [newArray[1].name, newArray[1].info.attack + newArray[1].info.defense + newArray[1].info.magic + newArray[1].info.difficulty, arrayColors[1]],
         [newArray[2].name, newArray[2].info.attack + newArray[2].info.defense + newArray[2].info.magic + newArray[2].info.difficulty, arrayColors[2]],
         [newArray[3].name, newArray[3].info.attack + newArray[3].info.defense + newArray[3].info.magic + newArray[3].info.difficulty, arrayColors[3]],
         [newArray[4].name, newArray[4].info.attack + newArray[4].info.defense + newArray[4].info.magic + newArray[4].info.difficulty, arrayColors[4]],
         [newArray[5].name, newArray[5].info.attack + newArray[5].info.defense + newArray[5].info.magic + newArray[5].info.difficulty, arrayColors[5]],
         [newArray[6].name, newArray[6].info.attack + newArray[6].info.defense + newArray[6].info.magic + newArray[6].info.difficulty, arrayColors[6]],
         [newArray[7].name, newArray[7].info.attack + newArray[7].info.defense + newArray[7].info.magic + newArray[7].info.difficulty, arrayColors[7]],
         [newArray[8].name, newArray[8].info.attack + newArray[8].info.defense + newArray[8].info.magic + newArray[8].info.difficulty, arrayColors[8]],
         [newArray[9].name, newArray[9].info.attack + newArray[9].info.defense + newArray[9].info.magic + newArray[9].info.difficulty, arrayColors[9]]

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
     let chart = new google.visualization.BarChart(document.getElementById("graficRanking"));
     chart.draw(view, options);


 }
 let radioAtacck = document.getElementById("menuAttack");
 radioAtacck.addEventListener("click", attack);

 function attack() {

     let arrayAttack = [];
     arrayAttack = arraychampion.filter(e => (e.info.attack) == 10);
     console.log("array attack ", arrayAttack); n
     google.charts.setOnLoadCallback(drawChartAttack);

     function drawChartAttack() {
         let arrayColors = ["blue", "yellow", "green", "black", "red", "grey", "silver", "gold", "platinum", "copper"];
         console.log("arraycolor", arrayColors);

         let datas = google.visualization.arrayToDataTable([

             ['Element', 'Values', { role: 'style' }],
             [arrayAttack[0].name, arrayAttack[0].info.attack, arrayColors[0]],
             [arrayAttack[1].name, arrayAttack[1].info.attack, arrayColors[1]],
             [arrayAttack[2].name, arrayAttack[2].info.attack, arrayColors[2]],
             [arrayAttack[3].name, arrayAttack[3].info.attack, arrayColors[3]],
             [arrayAttack[4].name, arrayAttack[4].info.attack, arrayColors[4]]


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
         let chart = new google.visualization.BarChart(sectionGrafic);
         chart.draw(view, options);

     }

 } */


