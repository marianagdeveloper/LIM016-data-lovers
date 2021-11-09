// estas funciones son de ejemplo
import data from "./data/lol/lol.js";

export const dataChampions = () => {
  const dataGet = JSON.stringify(data);
  const aux = JSON.parse(dataGet);
  const arrayData = aux.data;
  const arraychampion = Object.values(arrayData);
  return arraychampion;
};

export const anotherExample = () => {
  return "OMG";
};
