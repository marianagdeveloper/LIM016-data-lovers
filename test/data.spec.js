import { dataChampions, isFilterRol } from '../src/data.js';
const data = {
  data: {
    "Aatrox": {
      "version": "6.24.1",
      "id": "Aatrox",
      "key": "266",
      "name": "Aatrox",
      "title": "the Darkin Blade",
      "img": "https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png",
      "splash": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
      "blurb": "Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatrox's ...",
      "info": {
        "attack": 8,
        "defense": 4,
        "magic": 3,
        "difficulty": 4
      },
      "image": {
        "full": "Aatrox.png",
        "sprite": "champion0.png",
        "group": "champion",
        "x": 0,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Fighter",
        "Tank"
      ],
      "partype": "BloodWell",
      "stats": {
        "hp": 537.8,
        "hpperlevel": 85,
        "mp": 105.6,
        "mpperlevel": 45,
        "movespeed": 345,
        "armor": 24.384,
        "armorperlevel": 3.8,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 150,
        "hpregen": 6.59,
        "hpregenperlevel": 0.5,
        "mpregen": 0,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 60.376,
        "attackdamageperlevel": 3.2,
        "attackspeedoffset": -0.04,
        "attackspeedperlevel": 3
      }
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
      "info": {
        "attack": 3,
        "defense": 4,
        "magic": 8,
        "difficulty": 5
      },
      "image": {
        "full": "Ahri.png",
        "sprite": "champion0.png",
        "group": "champion",
        "x": 48,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Mage",
        "Assassin"
      ],
      "partype": "MP",
      "stats": {
        "hp": 514.4,
        "hpperlevel": 80,
        "mp": 334,
        "mpperlevel": 50,
        "movespeed": 330,
        "armor": 20.88,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0,
        "attackrange": 550,
        "hpregen": 6.505,
        "hpregenperlevel": 0.6,
        "mpregen": 6,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 53.04,
        "attackdamageperlevel": 3,
        "attackspeedoffset": -0.065,
        "attackspeedperlevel": 2
      }
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
      "info": {
        "attack": 5,
        "defense": 3,
        "magic": 8,
        "difficulty": 7
      },
      "image": {
        "full": "Akali.png",
        "sprite": "champion0.png",
        "group": "champion",
        "x": 96,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Assassin"
      ],
      "partype": "Energy",
      "stats": {
        "hp": 587.8,
        "hpperlevel": 85,
        "mp": 200,
        "mpperlevel": 0,
        "movespeed": 350,
        "armor": 26.38,
        "armorperlevel": 3.5,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8.34,
        "hpregenperlevel": 0.65,
        "mpregen": 50,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 58.376,
        "attackdamageperlevel": 3.2,
        "attackspeedoffset": -0.1,
        "attackspeedperlevel": 3.1
      }
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
      "info": {
        "attack": 6,
        "defense": 9,
        "magic": 5,
        "difficulty": 7
      },
      "image": {
        "full": "Alistar.png",
        "sprite": "champion0.png",
        "group": "champion",
        "x": 144,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Tank",
        "Support"
      ],
      "partype": "MP",
      "stats": {
        "hp": 613.36,
        "hpperlevel": 106,
        "mp": 278.84,
        "mpperlevel": 38,
        "movespeed": 330,
        "armor": 24.38,
        "armorperlevel": 3.5,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8.675,
        "hpregenperlevel": 0.85,
        "mpregen": 8.5,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 61.1116,
        "attackdamageperlevel": 3.62,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 2.125
      }
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
      "info": {
        "attack": 2,
        "defense": 6,
        "magic": 8,
        "difficulty": 3
      },
      "image": {
        "full": "Amumu.png",
        "sprite": "champion0.png",
        "group": "champion",
        "x": 192,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Tank",
        "Mage"
      ],
      "partype": "MP",
      "stats": {
        "hp": 613.12,
        "hpperlevel": 84,
        "mp": 287.2,
        "mpperlevel": 40,
        "movespeed": 335,
        "armor": 23.544,
        "armorperlevel": 3.8,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8.875,
        "hpregenperlevel": 0.85,
        "mpregen": 7.38,
        "mpregenperlevel": 0.525,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 53.384,
        "attackdamageperlevel": 3.8,
        "attackspeedoffset": -0.02,
        "attackspeedperlevel": 2.18
      }
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
      "info": {
        "attack": 1,
        "defense": 4,
        "magic": 10,
        "difficulty": 10
      },
      "image": {
        "full": "Anivia.png",
        "sprite": "champion0.png",
        "group": "champion",
        "x": 240,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Mage",
        "Support"
      ],
      "partype": "MP",
      "stats": {
        "hp": 467.6,
        "hpperlevel": 70,
        "mp": 396.04,
        "mpperlevel": 50,
        "movespeed": 325,
        "armor": 21.22,
        "armorperlevel": 4,
        "spellblock": 30,
        "spellblockperlevel": 0,
        "attackrange": 600,
        "hpregen": 5.57,
        "hpregenperlevel": 0.55,
        "mpregen": 6,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 51.376,
        "attackdamageperlevel": 3.2,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 1.68
      }
    },
    "Annie": {
      "version": "6.24.1",
      "id": "Annie",
      "key": "1",
      "name": "Annie",
      "title": "the Dark Child",
      "img": "https://www.masterypoints.com/assets/img/lol/champion_icons/Annie.png",
      "splash": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg",
      "blurb": "There have always been those within Noxus who did not agree with the evils perpetrated by the Noxian High Command. The High Command had just put down a coup attempt from the self-proclaimed Crown Prince Raschallion, and a crackdown on any form of ...",
      "info": {
        "attack": 2,
        "defense": 3,
        "magic": 10,
        "difficulty": 6
      },
      "image": {
        "full": "Annie.png",
        "sprite": "champion0.png",
        "group": "champion",
        "x": 288,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Mage"
      ],
      "partype": "MP",
      "stats": {
        "hp": 511.68,
        "hpperlevel": 76,
        "mp": 334,
        "mpperlevel": 50,
        "movespeed": 335,
        "armor": 19.22,
        "armorperlevel": 4,
        "spellblock": 30,
        "spellblockperlevel": 0,
        "attackrange": 575,
        "hpregen": 5.42,
        "hpregenperlevel": 0.55,
        "mpregen": 6,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 50.41,
        "attackdamageperlevel": 2.625,
        "attackspeedoffset": 0.08,
        "attackspeedperlevel": 1.36
      }
    },
    "Ashe": {
      "version": "6.24.1",
      "id": "Ashe",
      "key": "22",
      "name": "Ashe",
      "title": "the Frost Archer",
      "img": "https://www.masterypoints.com/assets/img/lol/champion_icons/Ashe.png",
      "splash": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg",
      "blurb": "With each arrow she fires from her ancient ice-enchanted bow, Ashe proves she is a master archer. She chooses each target carefully, waits for the right moment, and then strikes with power and precision. It is with this same vision and focus that she ...",
      "info": {
        "attack": 7,
        "defense": 3,
        "magic": 2,
        "difficulty": 4
      },
      "image": {
        "full": "Ashe.png",
        "sprite": "champion0.png",
        "group": "champion",
        "x": 336,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Marksman",
        "Support"
      ],
      "partype": "MP",
      "stats": {
        "hp": 527.72,
        "hpperlevel": 79,
        "mp": 280,
        "mpperlevel": 32,
        "movespeed": 325,
        "armor": 21.212,
        "armorperlevel": 3.4,
        "spellblock": 30,
        "spellblockperlevel": 0,
        "attackrange": 600,
        "hpregen": 5.42,
        "hpregenperlevel": 0.55,
        "mpregen": 6.97,
        "mpregenperlevel": 0.4,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 56.508,
        "attackdamageperlevel": 2.26,
        "attackspeedoffset": -0.05,
        "attackspeedperlevel": 3.33
      }
    },
    "AurelionSol": {
      "version": "6.24.1",
      "id": "AurelionSol",
      "key": "136",
      "name": "Aurelion Sol",
      "title": "The Star Forger",
      "img": "https://www.masterypoints.com/assets/img/lol/champion_icons/AurelionSol.png",
      "splash": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_0.jpg",
      "blurb": "Aurelion Sol once graced the vast emptiness of the cosmos with celestial wonders of his own devising. Now, he is forced to wield his awesome power at the behest of a space-faring empire that tricked him into servitude. Desiring a return to his ...",
      "info": {
        "attack": 2,
        "defense": 3,
        "magic": 8,
        "difficulty": 7
      },
      "image": {
        "full": "AurelionSol.png",
        "sprite": "champion0.png",
        "group": "champion",
        "x": 384,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Mage",
        "Fighter"
      ],
      "partype": "MP",
      "stats": {
        "hp": 550,
        "hpperlevel": 80,
        "mp": 350,
        "mpperlevel": 50,
        "movespeed": 325,
        "armor": 19,
        "armorperlevel": 3.6,
        "spellblock": 30,
        "spellblockperlevel": 0,
        "attackrange": 550,
        "hpregen": 6.5,
        "hpregenperlevel": 0.6,
        "mpregen": 6,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 57,
        "attackdamageperlevel": 3.2,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 1.36
      }
    }
  }
}
let rate = [];
// ---------------------
/* eslint-disable */
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(data),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

it("debería de retornar '9' para data.length", async () => {
  rate = await dataChampions();
  expect(rate.length).toEqual(9);
});
// ---------------------
describe('dataChampions', () => {
  it('is a function', () => {
    expect(typeof dataChampions).toBe('function');
  });
});

describe('isFilterRol', () => {
  it('is a function', () => {
    expect(typeof isFilterRol).toBe('function');
  });

  it('debería retornar true para "Mage"', () => {
    expect(isFilterRol(rate, 'Mage')[0].tags.includes('Mage')).toBe(true);
  });
  it('debería retornar true para "Fighter"', () => {
    expect(isFilterRol(rate, 'Fighter')[0].tags.includes('Fighter')).toBe(true);
  });
  it('debería retornar true para "Marksman"', () => {
    expect(isFilterRol(rate, 'Marksman')[0].tags.includes('Marksman')).toBe(true);
  });
  it('debería retornar true para "Assassin"', () => {
    expect(isFilterRol(rate, 'Assassin')[0].tags.includes('Assassin')).toBe(true);
  });
  it('debería retornar true para "Support"', () => {
    expect(isFilterRol(rate, 'Support')[0].tags.includes('Support')).toBe(true);
  });
  it('debería retornar 0 para "Help"', () => {
    expect(isFilterRol(rate, 'Help').length).toBe(0);
  });

  describe('isFilterRol', () => {
    it('debería retornar 2 para "Tank"', () => {
      const dateChampion = [
        {
          "version": "6.24.1",
          "id": "Aatrox",
          "key": "266",
          "name": "Aatrox",
          "title": "the Darkin Blade",
          "img": "https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png",
          "splash": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
          "blurb": "Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatrox's ...",
          "info": {
            "attack": 8,
            "defense": 4,
            "magic": 3,
            "difficulty": 4
          },
          "image": {
            "full": "Aatrox.png",
            "sprite": "champion0.png",
            "group": "champion",
            "x": 0,
            "y": 0,
            "w": 48,
            "h": 48
          },
          "tags": [
            "Fighter",
            "Tank"
          ],
          "partype": "BloodWell",
          "stats": {
            "hp": 537.8,
            "hpperlevel": 85,
            "mp": 105.6,
            "mpperlevel": 45,
            "movespeed": 345,
            "armor": 24.384,
            "armorperlevel": 3.8,
            "spellblock": 32.1,
            "spellblockperlevel": 1.25,
            "attackrange": 150,
            "hpregen": 6.59,
            "hpregenperlevel": 0.5,
            "mpregen": 0,
            "mpregenperlevel": 0,
            "crit": 0,
            "critperlevel": 0,
            "attackdamage": 60.376,
            "attackdamageperlevel": 3.2,
            "attackspeedoffset": -0.04,
            "attackspeedperlevel": 3
          }
        },
        {
          "version": "6.24.1",
          "id": "Ahri",
          "key": "103",
          "name": "Ahri",
          "title": "the Nine-Tailed Fox",
          "img": "https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png",
          "splash": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
          "blurb": "Unlike other foxes that roamed the woods of southern Ionia, Ahri had always felt a strange connection to the magical world around her; a connection that was somehow incomplete. Deep inside, she felt the skin she had been born into was an ill fit for ...",
          "info": {
            "attack": 3,
            "defense": 4,
            "magic": 8,
            "difficulty": 5
          },
          "image": {
            "full": "Ahri.png",
            "sprite": "champion0.png",
            "group": "champion",
            "x": 48,
            "y": 0,
            "w": 48,
            "h": 48
          },
          "tags": [
            "Mage",
            "Tank"
          ],
          "partype": "MP",
          "stats": {
            "hp": 514.4,
            "hpperlevel": 80,
            "mp": 334,
            "mpperlevel": 50,
            "movespeed": 330,
            "armor": 20.88,
            "armorperlevel": 3.5,
            "spellblock": 30,
            "spellblockperlevel": 0,
            "attackrange": 550,
            "hpregen": 6.505,
            "hpregenperlevel": 0.6,
            "mpregen": 6,
            "mpregenperlevel": 0.8,
            "crit": 0,
            "critperlevel": 0,
            "attackdamage": 53.04,
            "attackdamageperlevel": 3,
            "attackspeedoffset": -0.065,
            "attackspeedperlevel": 2
          }
        }]

      expect(isFilterRol(dateChampion, 'Tank').length).toBe(2);
    });
  });
});
