import { dataChampions } from "./data.js";
// listo funcion en data hecha
let arraychampion = dataChampions();
let divChampion = document.getElementById("divShowChampions");
let inputSearch = document.getElementById("inputSearch");
let btnSearch = document.getElementById("btnSearch");
//modal
let cerrar = document.getElementById("close");
let modal = document.getElementById("modal");
let modalC = document.getElementById("modal-container");

let arrayButton = [
  "All",
  "Fighter",
  "Marksman",
  "Mage",
  "Assassin",
  "Tank",
  "Support",
];
let button,  btnRol = [],  textButton,  cards, rolChampion;

window.onload = function () {
  printNav();
  recorrerData();
  printButton();
};

//modal
function printModal(champeon, key) {
  console.log(key);
  let h1 = document.createElement("h1");
  let text = document.createTextNode(champeon.name);
  h1.appendChild(text);
  modal.appendChild(h1);
  modalC.style.opacity = "1";
  modalC.style.visibility = "visible";
  // modal.classList.toggle("modal-close");

  cerrar.addEventListener("click", function (e) {
    // modal.classList.toggle("modal-close");
    modalC.style.opacity = "0";
    modalC.style.visibility = "hidden";
    h1.innerHTML = "";
  });
}

//probando foreach listoo o
function recorrerData() {
  //fetch
  fetch("./data/lol/lol.json")
    .then((res) => res.json())
    .then((res) =>
      Object.values(res.data).forEach((element) => printChampions(element))
    )
    .catch((error) => console.log("Hubo un error" + error.message));
}

/* ---Create array Nav dinamic------ */
let arrayNav = [
  "Champions",
  "Ranking",
  "https://www.gamerfocus.co/wp-content/uploads/2013/12/league-of-legends-modo-showdown-riot-games-experimental-1.png",
  "Download",
  "News",
];
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

/* --Create function PrintChampions in cards-- */
function printChampions(arraychampion) {
  // console.log(arraychampion);
  let imagen;
  imagen = arraychampion.splash;
  cards = document.createElement("div");
  divChampion.appendChild(cards);
  cards.setAttribute("class", "card");
  //modal
  cards.setAttribute("id", arraychampion.key);
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

  let idcard = document.getElementById(arraychampion.key);
  // console.log(idcard);
  //modal
  // let abrir = document.querySelectorAll(".card");
  idcard.addEventListener("click", function (e) {
    console.log("arraychampion.key:", arraychampion.key);
    // console.log("evento:", e.path[2].attributes[1]);
    printModal(arraychampion, arraychampion.key);
  });
}

//// acaaa estoy empezando de nuevooo

/* ----Create function Button rol dinamic --- */
function printButton() {
  let i;

  rolChampion = document.getElementById("rolChampion");

  for (i = 0; i < arrayButton.length; i++) {
    button = document.createElement("button");
    textButton = document.createTextNode(arrayButton[i]);
    button.appendChild(textButton);
    rolChampion.appendChild(button);
    button.setAttribute("class", "btn third");
    button.setAttribute("id", arrayButton[i]);

    btnRol[i] = document.getElementById(arrayButton[i]);
  }
  for (let i = 0; i < btnRol.length; i++) {
    btnRol[i].addEventListener("click", function () {
      filter(btnRol[i]);
    });
  }
}
/* ----Create function filter eventlistener --- */
function filter(btnRol) {
  divChampion.innerHTML = "";
  if (btnRol.id == "All") {
    recorrerData();
  } else arraychampion.forEach((element) => filterRol(element, btnRol));
}

/* ----Create function filterRol call filter --- */
function filterRol(arraychampion, btnRol) {
  for (let i = 0; i < arraychampion.tags.length; i++) {
    if (arraychampion.tags[i] == btnRol.id) {
      printChampions(arraychampion);
    }
  }
}
///khbefhiweb kjnfnwekjnfwe  kmnkmn
///---------End of function Print Button -------<<
//haciendo travesuras
// uuhh uhuh

function recorrerData2() {}

let s;
function filtrar(element, s) {
  // console.log("mili ", element);
  divChampion.innerHTML = "";

  let texto = s;
  let nombre = element.name.toLowerCase();

  // console.log("mili ", nombre);

  if (nombre.indexOf(texto) !== -1) {
    printChampions(element);
    // console.log("ff", element);
  }

  if (divChampion.innerHTML == "") {
    divChampion.innerHTML = "Campeon no encontrado";
  }
}

inputSearch.addEventListener("keyup", function () {
  let s = inputSearch.value.toLowerCase();

  arraychampion.forEach((element) => filtrar(element, s));
  // console.log("ewfee ", arraychampion);
});
