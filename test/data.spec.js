import { dataChampions, isFilterRol } from '../src/data.js';
let x=[];

describe('dataChampions', () => {
  it('is a function', () => {
    expect(typeof dataChampions).toBe('function');
  });


});


describe('isFilterRol', () => {
  it('is a function', () => {
    expect(typeof isFilterRol).toBe('function');
  });

  it('debería retornar true para "Tank"', async () => {
    await dataChampions().then((data) => {
      x=data;     
    });
    expect(isFilterRol(x, 'Tank')[0].tags.includes('Tank')).toEqual(true);
   
  });
  it('debería retornar true para "Mage"', () => {
    expect(isFilterRol(dataChampions(), 'Mage')[0].tags.includes('Mage')).toBe(true);
  });
  it('debería retornar true para "Fighter"', () => {
    expect(isFilterRol(dataChampions(), 'Fighter')[0].tags.includes('Fighter')).toBe(true);
  });
  it('debería retornar true para "Marksman"', () => {
    expect(isFilterRol(dataChampions(), 'Marksman')[0].tags.includes('Marksman')).toBe(true);
  });
  it('debería retornar true para "Assassin"', () => {
    expect(isFilterRol(dataChampions(), 'Assassin')[0].tags.includes('Assassin')).toBe(true);
  });
  it('debería retornar true para "Support"', () => {
    expect(isFilterRol(dataChampions(), 'Support')[0].tags.includes('Support')).toBe(true);
  });
  it('debería retornar 0 para "Help"', () => {
    expect(isFilterRol(dataChampions(), 'Help').length).toBe(0);
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



  /*  it('returns `isFilterRol`', () => {
     expect(anotherExample()).toBe('OMG');
   }); */
});
