
import { dataChampions, isFilterRol } from './data.js';

let arraychampion = [];
let divChampion = document.getElementById("divShowChampions");
let inputSearch = document.getElementById("inputSearch");
let arrayButton = ["All", "Fighter", "Marksman", "Mage", "Assassin", "Tank", "Support"];
let button, btnRol = [], textButton, cards = [], rolChampion;

//modal
let cerrar = document.getElementById("close");
let modal = document.getElementById("modal");
let modalC = document.getElementById("modal-container");
const arrayNavEnlaces = ["champions.html", "ranking.html", "index.html", "download.html", "versus.html"]
let arrayNav = ["Champions", "Ranking", "https://www.gamerfocus.co/wp-content/uploads/2013/12/league-of-legends-modo-showdown-riot-games-experimental-1.png", "Download", "Versus"];

async function carga() {
    await dataChampions().then((data) => {
        arraychampion = data;

        const URLactual = window.location;
        console.log(URLactual);

      /*   if (URLactual.pathname == "/") {
         
        }
 */
        if (URLactual.pathname == "/champions") {

            printNav();
            recorrerData();
            printButton();
            searchChampion();
        }
        else{
            printNav();
        }

    });
}

carga();

function searchChampion() {
    inputSearch.addEventListener("keyup", function () {
        divChampion.innerHTML = '';
        let texto = inputSearch.value.toLowerCase();
        const searchHero = arraychampion.filter(e => e.name.toLowerCase().indexOf(texto) > -1).map(e => printChampions(e));

        if (searchHero.length == 0) {
            divChampion.innerHTML = '<p style="font-size:30px">Champion no found</p>';
        }

    });
}

//modal
function printModal(champions) {

    const containerModal = document.createElement("div");
    containerModal.setAttribute("class", "containerModal")
    modal.appendChild(containerModal);

    const divNameRole = document.createElement("div");
    divNameRole.setAttribute("class", "divNameRole");
    containerModal.appendChild(divNameRole);
    const nameModal = document.createElement("h2");
    const textName = document.createTextNode(champions.id.toUpperCase());
    nameModal.setAttribute("class", "nameModal")
    nameModal.appendChild(textName);
    divNameRole.appendChild(nameModal);

    const containerRole = document.createElement("div");
    containerRole.setAttribute("class", "containerRole");
    // const textTittleRole = document.createTextNode("Rol:");
    // containerRole.appendChild(textTittleRole);
    divNameRole.appendChild(containerRole);
    const roles = document.createElement("p");
    roles.setAttribute("class", "role");
    // const textRole = document.createTextNode(champions.tags);
    // console.log(roles);
    // roles.appendChild(textRole);
    containerRole.appendChild(roles);

    const containerImageDescrip = document.createElement("div");
    containerImageDescrip.setAttribute("class", "containerImageDescrip");
    containerModal.appendChild(containerImageDescrip);

    const containerImage = document.createElement("div");
    containerImage.setAttribute("class", "containerImage");
    containerImageDescrip.appendChild(containerImage);

    const imageModal = document.createElement("img");
    imageModal.setAttribute("class", "imageModal");
    imageModal.src = champions.splash;
    containerImage.appendChild(imageModal);

    const containerDesAbil = document.createElement("div");
    containerDesAbil.setAttribute("class", "containerDesAbil");
    containerImageDescrip.appendChild(containerDesAbil);

    const descriptionModal = document.createElement("p");
    // const textDescription = document.createTextNode(champions.blurb);
    // const textDescription = document.createTextNode(champions.title);
    let textHabilidades = "HABILIDADES: " + champions.tags;
    const textDescription = document.createTextNode(textHabilidades);
    descriptionModal.setAttribute("class", "descriptionModal")
    descriptionModal.appendChild(textDescription);
    containerDesAbil.appendChild(descriptionModal);

    const containerAbilities = document.createElement("div");
    containerAbilities.setAttribute("class", "containerAbilities");
    containerAbilities.setAttribute("id", "containerAbilities")
    containerDesAbil.appendChild(containerAbilities);


    //Add function grafic
    //Add line ignore jest
    /* eslint-disable */
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {

        let data = google.visualization.arrayToDataTable([
            ['Element', 'Values', { role: 'style' }],
            ['Attack', champions.info.attack, '#BB8FCE'],
            ['Defense', champions.info.defense, ' #5DADE2'],
            ['Magic', champions.info.magic, '#82E0AA'],
            ['Difficulty', champions.info.difficulty, '#F0B27A']

        ]);

        let view = new google.visualization.DataView(data);
        view.setColumns([0, 1,
            {
                calc: "stringify",
                sourceColumn: 1,
                type: "string",
                role: "annotation"
            },
            2]);
        let options = {
            //   title: "INFO:",
            width: 500,
            height: 140,
            fontSize: 18,
            backgroundColor: "none",
            color: 'white',
            bar: { groupWidth: "80%", color: "white" },
            legend: { position: "none" },

            titleTextStyle: {
                color: 'white',
                fontSize: 20,
            },

            hAxis: {

                textStyle: {
                    color: "white",
                    fontSize: 20
                },
                minorGridlines: {
                    color: "black",
                    count: 0
                },
                gridlines: {

                    color: "black",
                    count: 0
                },
                baselineColor: {
                    color: "black"
                },

            },



            vAxis: {
                textStyle: {
                    color: "white",
                    fontSize: 20
                },
                baselineColor: {
                    color: "white"
                },
                minorGridlines: {
                    color: "white"
                },
                gridlines: {

                    color: "white",
                    count: 0
                },
            },


        };

        let chart = new google.visualization.ColumnChart(document.getElementById('containerAbilities'));
        chart.draw(view, options);
    }

    //properties modal
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";


    cerrar.addEventListener("click", function () {
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
        containerModal.innerHTML = "";
    });
}

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
        enlace.href = arrayNavEnlaces[i];
        if (arrayNav[i] == arrayNav[2]) {
            b = document.createElement("img");
            enlace.appendChild(b);
            b.src = arrayNav[2].toString();
            enlace.href = arrayNavEnlaces[i];
            // console.log(b);
        } else {
            enlace.textContent += arrayNav[i].toString();
        }
        list.appendChild(enlace);
        item.appendChild(list);

    }
}
///---------End of function Nav -------

/* --Create function PrintChampions in cards-- */
function recorrerData() {
    console.log("arreglo array ", arraychampion);
    arraychampion.map(element => printChampions(element));

}
function printChampions(arraychampion) {

    let imagen;
    imagen = arraychampion.splash;
    cards = document.createElement("div");
    divChampion.appendChild(cards);
    cards.setAttribute("class", "card");
    cards.setAttribute('id', (arraychampion.key));
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
    let textoUper = arraychampion.title;
    let texto = document.createTextNode(textoUper.toUpperCase());
    p.appendChild(texto);


    let idcard = document.getElementById(arraychampion.key);

    idcard.addEventListener("click", function () {
        console.log("arraychampion.key:", arraychampion.key);
        printModal(arraychampion);
    });

}

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
    for (let i = 0; i < btnRol.length; i++) {
        btnRol[i].addEventListener('click', function () {
            filterByRole(btnRol[i]);

        });
    }

}
/* ----Create function filter eventlistener --- */

function filterByRole(btnRol) {
    let rolId = btnRol.id;
    divChampion.innerHTML = "";
    if (rolId == "All") {
        recorrerData();
    } else


        isFilterRol(arraychampion, rolId).map(e => printChampions(e));

}







