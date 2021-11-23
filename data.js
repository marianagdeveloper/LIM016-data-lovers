

export const dataChampions = async () => {
  const result = await fetch('./data/lol/lol.json')
    .then((response) => response.json())
    .catch(showError);
  const arraychampion = Object.values(result.data)
  return arraychampion;
}
function showError(err) {
  alert('muestor error', err);
}
export const isFilterRol = (arraychampion, btnRol) => {
  let arrayFilter = [];
  arrayFilter = arraychampion.filter(e => e.tags.includes(btnRol));
  return arrayFilter;
};











