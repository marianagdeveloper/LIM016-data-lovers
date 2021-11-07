
import { dataChampions } from './data.js';
// listo funcion en data hecha
let arraychampion = dataChampions();
console.log(arraychampion);
let divChampion = document.getElementById("divShowChampions");
let inputSearch = document.getElementById("inputSearch");
let btnSearch = document.getElementById("btnSearch");

let arrayButton = ["All", "Fighter", "Marksman", "Mage", "Assassin", "Tank", "Support"];
let button, btnRol = [], textButton, cards = [], rolChampion;
let modalChampion;
//modal
let cerrar = document.getElementById("close");
let modal = document.getElementById("modal");
let modalC = document.getElementById("modal-container");

window.onload = function () {
    printNav();
    recorrerData();
    printButton();

}
//modal
function printModal(champions) {
   
    const containerModal = document.createElement("div");
    containerModal.setAttribute("class","containerModal")
    modal.appendChild(containerModal);

    const divNameRole= document.createElement("div");
    divNameRole.setAttribute("class","divNameRole");
    containerModal.appendChild(divNameRole);
    const nameModal = document.createElement("h2");
    const textName = document.createTextNode(champions.name.toUpperCase());
    nameModal.setAttribute("class","nameModal")
    nameModal.appendChild(textName);
    divNameRole.appendChild(nameModal);
    const containerRole = document.createElement("div");
    containerRole.setAttribute("class","containerRole");
    const textTittleRole= document.createTextNode("Rol:");
    containerRole.appendChild(textTittleRole);
    divNameRole.appendChild(containerRole);
    const role = document.createElement("p");
    role.setAttribute("class","role");
    const textRole = document.createTextNode(champions.tags);
    console.log(role);
    role.appendChild(textRole);
    containerRole.appendChild(role);
    const containerImageDescrip = document.createElement("div");
    containerImageDescrip.setAttribute("class","containerImageDescrip");
    containerModal.appendChild(containerImageDescrip);
    const containerImage = document.createElement("div");
    containerImage.setAttribute("class","containerImage");
    containerImageDescrip.appendChild(containerImage);
    const imageModal = document.createElement("img");
    imageModal.setAttribute("class","imageModal")
    imageModal.src = champions.splash;
    containerImage.appendChild(imageModal);
    const descriptionModal = document.createElement("p");
    const textDescription = document.createTextNode(champions.blurb);
    descriptionModal.setAttribute("class","descriptionModal")
    descriptionModal.appendChild(textDescription);
    containerImageDescrip.appendChild(descriptionModal);
   const containerAbilities=document.createElement("div");
   containerAbilities.setAttribute("class","containerAbilities")
   containerModal.appendChild(containerAbilities);
   const divAttack = document.createElement("div");
   divAttack.setAttribute("class","divAttack")
   containerAbilities.appendChild(divAttack);
   const divDefense = document.createElement("div");
   divDefense.setAttribute("class","divDefense")
   containerAbilities.appendChild(divDefense);
   const divMagic = document.createElement("div");
   divMagic.setAttribute("class","divMagic")
   containerAbilities.appendChild(divMagic);
   const divDifficulty = document.createElement("div");
   divDifficulty.setAttribute("class","divDifficulty")
   containerAbilities.appendChild(divDifficulty);

 /*   attack: 8,
   defense: 4,
   magic: 3,
   difficulty: 4 */
   

    //properties modal
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";


    cerrar.addEventListener("click", function (e) {
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
        containerModal.innerHTML = "";
    });
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

/* --Create function PrintChampions in cards-- */
function recorrerData() {
    arraychampion.forEach(element => printChampions(element));

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
    let texto = document.createTextNode(arraychampion.blurb);
    p.appendChild(texto);


    let idcard = document.getElementById(arraychampion.key);

    idcard.addEventListener("click", function (e) {
        console.log("arraychampion.key:", arraychampion.key);
        // console.log("evento:", e.path[2].attributes[1]);
        printModal(arraychampion);
    });

}
// let abrir = document.querySelectorAll(".card");


//// acaaa estoy empezando de nuevooo


////// hol ahooa knk knkn nknkc dsmm
///Egg krmfkwemf

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
    divChampion.innerHTML = "";
    if (btnRol.id == "All") {
        recorrerData();
    } else
        arraychampion.filter(e => e.tags.includes(btnRol.id)).map(e => printChampions(e));

}

///---------Search -------<<
inputSearch.addEventListener("keyup", function () {
    divChampion.innerHTML = '';
    let texto = inputSearch.value.toLowerCase();
    const searchHero = arraychampion.filter(e => e.name.toLowerCase().indexOf(texto) > -1).map(e => printChampions(e));

    if (searchHero.length == 0) {
        divChampion.innerHTML = '<p>Champion no found</p>';
    }

});
//aki ki njnd jjdnd jnun jnu aaaa aa




