
import { dataChampions } from './data.js';
let arraychampion = [], newArray = [];
let sectionGrafic = document.getElementById("graficRanking");
let grafic = document.getElementById("grafic");
let aux = ["attack", "defense", "magic", "difficulty"];
async function carga() {
    await dataChampions().then((data) => {
        arraychampion = data;
        rankingTop();
        /* eslint-disable */
        google.charts.setOnLoadCallback(drawChartTop);

        for (let i = 0; i < 5; i++) {
            document.getElementsByName("menuRanking")[i].addEventListener('change', function () { graficAbility(aux[i]); });
        }
    });
}

carga();

function rankingTop() {
    let arrayTop = arraychampion.filter(e => (e.info.attack + e.info.defense + e.info.magic + e.info.difficulty) > 24);
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

    const elements = newArray.reduce((acc, champion) => acc + topTemplate(champion), "");

    sectionGrafic.innerHTML = elements;
}

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
function drawChartTop() {
    let arrayColors = ["#98E55B", "#F39C12", "#B479EC", "#3498DB", "#F0F3F4", "#FFC300", "#C70039", "#76D7C4", "#EC7063 ", "#E283C2"];
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
        title: "The most popular Champions",
        width: 500,
        height: 580,
        fontSize: 18,
        backgroundColor: "none",
        color: 'black',
        bar: { groupWidth: "80%" },
        legend: { position: "none" },
        titleTextStyle: {
            color: 'white',
            fontSize: 20,
        },
        hAxis: {

            textStyle: {
                color: "white",
                fontSize: 14
            },
        },
        vAxis: {
            textStyle: {
                color: "white",
                fontSize: 14
            },
        }
    };
    let chart = new google.visualization.BarChart(grafic);
    chart.draw(view, options);


}


function graficAbility(ability) {
    let arrayAbilityOrder = [];
    let arrayAbility = [];
    let arrayFilter = [];
    arrayFilter = arraychampion.filter(e => (e.info[ability]) >= 8);

    arrayAbilityOrder = arrayFilter.sort(function (a, b) { return (a.info[ability]) - (b.info[ability]) });

    let arrayOrder = arrayAbilityOrder.reverse();
    if (arrayOrder.length > 10) {
        for (let i = 0; i < arrayOrder.length; i++) {
            arrayAbility[i] = arrayOrder[i];
            if (arrayAbility.length == 10) {
                i = arrayOrder.length;
            }
        }
    }

    viewRanking(ability, arrayAbility);
    /* eslint-disable */
    google.charts.setOnLoadCallback(drawChartAbility);

    function drawChartAbility() {

        let arrayColors = ["#98E55B", "#F39C12", "#B479EC", "#3498DB", "#F0F3F4", "#FFC300", "#C70039", "#76D7C4", "#EC7063 ", "#E283C2"];
        let datas = google.visualization.arrayToDataTable([

            ['Element', 'Values', { role: 'style' }],
            [arrayAbility[0].name, arrayAbility[0].info[ability], arrayColors[0]],
            [arrayAbility[1].name, arrayAbility[1].info[ability], arrayColors[1]],
            [arrayAbility[2].name, arrayAbility[2].info[ability], arrayColors[2]],
            [arrayAbility[3].name, arrayAbility[3].info[ability], arrayColors[3]],
            [arrayAbility[4].name, arrayAbility[4].info[ability], arrayColors[4]],
            [arrayAbility[5].name, arrayAbility[5].info[ability], arrayColors[5]],
            [arrayAbility[6].name, arrayAbility[6].info[ability], arrayColors[6]],
            [arrayAbility[7].name, arrayAbility[7].info[ability], arrayColors[7]],
            [arrayAbility[8].name, arrayAbility[8].info[ability], arrayColors[8]],
            [arrayAbility[9].name, arrayAbility[9].info[ability], arrayColors[9]]

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
            title: "The most popular Champions",
            width: 500,
            height: 580,
            fontSize: 16,
            backgroundColor: "none",
            color: 'white',
            bar: { groupWidth: "80%" },
            legend: { position: "none" },
            titleTextStyle: {
                color: 'white',
                fontSize: 20,
                fontName: 'Flamenco',
            },
            hAxis: {

                textStyle: {
                    color: "white",
                    fontSize: 14
                },
            },
            vAxis: {
                textStyle: {
                    color: "white",
                    fontSize: 14
                },
            }
        };
        let chart = new google.visualization.BarChart(grafic);
        chart.draw(view, options);

    }

}

function viewRanking(ability, arrayAbility) {

    if (ability == "attack") {
        const elements = arrayAbility.reduce((acc, champion) => acc + topTemplateAbility(champion, ability), "");
        sectionGrafic.innerHTML = elements;

    }
    if (ability == "defense") {
        const elements = arrayAbility.reduce((acc, champion) => acc + topTemplateAbility(champion, ability), "");
        sectionGrafic.innerHTML = elements;

    }
    if (ability == "magic") {
        const elements = arrayAbility.reduce((acc, champion) => acc + topTemplateAbility(champion, ability), "");
        sectionGrafic.innerHTML = elements;

    }
    if (ability == "difficulty") {
        const elements = arrayAbility.reduce((acc, champion) => acc + topTemplateAbility(champion, ability), "");
        sectionGrafic.innerHTML = elements;
    }
}

function topTemplateAbility(champion, ability) {
    return `
      <div class="divTop">
      <img class="imgTop" src=${champion.img} alt="">
        <p class="nameTop">
          <b>${champion.name}</b>
        </p>
      
        <p class="puntajeTop">${champion.info[ability]}</p>
      </div>
    `
}
