import { example } from './data.js';

import data from './data/lol/lol.js';
const dataGet = JSON.stringify(data);
console.log(" " + dataGet);
let obj = {

    "data": {
        "Aatrox": {
            "version": "6.24.1",
            "id": "Aatrox",
            "key": "266",
            "name": "Aatrox",
            "title": "the Darkin Blade",
            "img": "https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png",
            "splash": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
            "blurb": "Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatrox's ...",

        },
        "Ahri": {
            "version": "6.24.1",
            "id": "Ahri",
            "key": "103",
            "name": "Ahri",
            "title": "the Nine-Tailed Fox",
            "img": "https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png",
            "splash": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
            "blurb": "Unlike other foxes that roamed the woods of southern Ionia, Ahri had always felt a strange connection to the magical world around her; a connection that was somehow incomplete. Deep inside, she felt the skin she had been born into was an ill fit for ...",

        },
        "Akali": {
            "version": "6.24.1",
            "id": "Akali",
            "key": "84",
            "name": "Akali",
            "title": "the Fist of Shadow",
            "img": "https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png",
            "splash": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg",
            "blurb": "There exists an ancient order originating in the Ionian Isles dedicated to the preservation of balance. Order, chaos, light, darkness -- all things must exist in perfect harmony for such is the way of the universe. This order is known as the Kinkou ...",

        },
        "Alistar": {
            "version": "6.24.1",
            "id": "Alistar",
            "key": "12",
            "name": "Alistar",
            "title": "the Minotaur",
            "img": "https://www.masterypoints.com/assets/img/lol/champion_icons/Alistar.png",
            "splash": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg",
            "blurb": "As the mightiest warrior to ever emerge from the Minotaur tribes of the Great Barrier, Alistar defended his tribe from Valoran's many dangers; that is, until the coming of the Noxian army. Alistar was lured from his village by the machinations of ...",

        },
        "Amumu": {
            "version": "6.24.1",
            "id": "Amumu",
            "key": "32",
            "name": "Amumu",
            "title": "the Sad Mummy",
            "img": "https://www.masterypoints.com/assets/img/lol/champion_icons/Amumu.png",
            "splash": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg",
            "blurb": "''Solitude can be lonelier than death.''<br><br>A lonely and melancholy soul from ancient Shurima, Amumu roams the world in search of a friend. Cursed by an ancient spell, he is doomed to remain alone forever, as his touch is death and his affection ...",

        },
        "Anivia": {
            "version": "6.24.1",
            "id": "Anivia",
            "key": "34",
            "name": "Anivia",
            "title": "the Cryophoenix",
            "img": "https://www.masterypoints.com/assets/img/lol/champion_icons/Anivia.png",
            "splash": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_0.jpg",
            "blurb": "Anivia is a being of the coldest winter, a mystical embodiment of ice magic, and an ancient protector of the Freljord. She commands all the power and fury of the land itself, calling the snow and bitter wind to defend her home from those who would ...",

        }

    }

}


window.onload = function () {
    printNav();
    //printChampions();
    printChampions(obj);

}
let arrayNav = ["Champions", "Ranking", "https://www.gamerfocus.co/wp-content/uploads/2013/12/league-of-legends-modo-showdown-riot-games-experimental-1.png", "Download", "News"];

function printNav() {

    let temp, item, list, b, i, enlace;
    temp = document.getElementById("idTemplate");
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

//// practicando kjnjnewc kjnwejnjew kjnjqnwd knknmklqdw kjnklqnmkwd mnkjlqnwldkqw lkjqnwld kqn wkjdnkqwld ,m kjlnjklqwd 
// mnlkwejfnj knkjlnf nwlknef,m ,bkjenf, w,mejkf wef, 



///---------fin de la data

let divChampions;

divChampions = document.getElementById("divShowChampions");

function printChampions(a) {

    let aux = Object.values(a);
    aux.map(c => {
        console.log(aux);
        console.log(aux[0]["Aatrox"]);

        if ((aux[0]["Aatrox"]).id == "Aatrox") {

            let imagen = (aux[0]["Aatrox"]).img;
            let x = document.createElement("img");
            divChampions.appendChild(x);
            x.src = imagen;

        }

    });


}
