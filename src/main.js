
import { dataChampions } from './data.js';
// listo funcion en data hecha
let arraychampion = dataChampions();

let divChampion = document.getElementById("divShowChampions");
let inputSearch = document.getElementById("inputSearch");
let btnSearch = document.getElementById("btnSearch");
let key, textoKey=[],ki=0;
let arrayButton = ["All", "Fighter", "Marksman", "Mage", "Assassin", "Tank", "Support"];
let button, btnRol = [], textButton, cards=[], rolChampion;
let modalChampion;

window.onload = function () {
    printNav();
    printChampions(arraychampion);
    printButton();

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
let idchampion=[];
/* --Create function PrintChampions in cards-- */
function printChampions(arraychampion) {
    for (let i = 0; i < arraychampion.length; i++) {     
    let imagen;
    imagen = arraychampion[i].splash;
    cards[i] = document.createElement("div");
    divChampion.appendChild(cards[i]);
    cards[i].setAttribute("class", "card");
    let imgbox = document.createElement("div");
    cards[i].appendChild(imgbox);
    imgbox.setAttribute("class", "img-box");
    let x = document.createElement("img");
    imgbox.appendChild(x);
    x.setAttribute("class", "imagen");
    x.src = imagen;
    let conten = document.createElement("div");
    cards[i].appendChild(conten);
    conten.setAttribute("class", "content");
    let y = document.createElement("h2");
    conten.appendChild(y);
    let text = document.createTextNode(arraychampion[i].id);
    y.appendChild(text);
    let p = document.createElement("p");
    conten.appendChild(p);
    let texto = document.createTextNode(arraychampion[i].blurb);
    p.appendChild(texto);
  
    cards[i].setAttribute('id', (arraychampion[i].key));
   idchampion[i] = document.getElementById(arraychampion[i].key);
    }
    for (let i = 0; i < idchampion.length; i++) {
        idchampion[i].addEventListener('click', function () {
           vistaDetalle( idchampion[i]);
        });
    }
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
    for (let i = 0; i < btnRol.length; i++) {
        btnRol[i].addEventListener('click', function () {
            filter(btnRol[i]);

        });
    }

}
/* ----Create function filter eventlistener --- */
function filter(btnRol) {

    divChampion.innerHTML = "";
    if (btnRol.id == "All") {
        recorrerData();
    } else
        arraychampion.forEach(element => filterRol(element, btnRol));



}

/* ----Create function filterRol call filter --- */
function filterRol(arraychampion, btnRol) {

    for (let i = 0; i < (arraychampion.tags).length; i++) {

        if (arraychampion.tags[i] == btnRol.id) {

            printChampions(arraychampion);

        }


    }
}

///---------End of function Print Button -------<<
//haciendo 

inputSearch.addEventListener("keyup", function () {
    divChampion.innerHTML = '';
    let texto = inputSearch.value.toLowerCase();
    arraychampion.forEach(element => filtrar(element, texto));


}
);

function filtrar(element, texto) {

    let nombre = (element.name).toLowerCase();

    if ((nombre.indexOf(texto)) > -1) {

        printChampions(element);


    }
    /*    if (divChampion.innerHTML == '' ) {
           divChampion.innerHTML = "Champions no found";
         
          
       } */
}

/*---------  blurb: "A healer gifted with the magic of the stars, Soraka holds all living creatures close to her heart. She was once a celestial being, but she sacrificed her immortality and entered the world of mortals. So long as evil threatens life in Valoran, Soraka ..."
 id: "Soraka"
 image: {full: 'Soraka.png', sprite: 'champion3.png', group: 'champion', x: 336, y: 0, …}
 img: "https://www.masterypoints.com/assets/img/lol/champion_icons/Soraka.png"
 info: {attack: 2, defense: 5, magic: 7, difficulty: 3}
 key: "16"
 name: "Soraka"
 partype: "MP"
 -----------splash: "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Soraka_0.jpg"
 stats: {hp: 529.04, hpperlevel: 78, mp: 350.8, mpperlevel: 60, movespeed: 325, …}
 tags: (2) ['Support', 'Mage']
 title: "the Starchild"
 version: "6.24.1" */


function vistaDetalle(idcard) {

    let modal = document.getElementById("tvesModal");
    let span = document.getElementsByClassName("close")[0];

    idcard.addEventListener('click', function () {
       
        arraychampion.forEach(element => printChampionsVista(element, modal,idcard));

        modal.style.display = "block";

        document.body.style.position = "static";
        document.body.style.height = "100%";
        document.body.style.overflow = "hidden";
    });

    span.addEventListener('click', function () {
    
        modal.style.display = "none";
        modalChampion.innerHTML="";
        document.body.style.position = "inherit";
        document.body.style.height = "auto";
        document.body.style.overflow = "visible";
    });
}


function printChampionsVista(arraychampion, modal,idcard) {

    if (idcard.id == arraychampion.key) {
       
        let imagen;
        imagen = arraychampion.splash;
        modalChampion = document.createElement("div");
        modal.appendChild(modalChampion);
        modalChampion.setAttribute("class", "modalChampion");
        let contImagen = document.createElement("div");
        modalChampion.appendChild(contImagen);
        /* imgbox.setAttribute("class", "img-box"); */
        let img = document.createElement("img");
        contImagen.appendChild(img);
        img.setAttribute("class", "imgmodal");
        img.src = imagen;

        let contenModal = document.createElement("div");
        modalChampion.appendChild(contenModal);
        /*  contenModal.setAttribute("class", "content"); */
        let h2name = document.createElement("h2");
        contenModal.appendChild(h2name);
        let textName = document.createTextNode(arraychampion.name);
        h2name.appendChild(textName);
        let descrip = document.createElement("p");
        contenModal.appendChild(descrip);
        let textoDescrip = document.createTextNode(arraychampion.blurb);
        descrip.appendChild(textoDescrip);  
    }
}
///hasta aqui estamos bien no la malogres aaa