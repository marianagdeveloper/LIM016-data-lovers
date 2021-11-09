// estas funciones son de ejemplo
/* import data from './data/lol/lol.js'; */


export const dataChampions = async () => {

/* document.addEventListener('DOMContentLoaded', configureAjaxCalls); */


   const result= await fetch('./data/lol/lol.json')
      .then((response)=>response.json())
      .catch(showError); 
     
      console.log("result  ",result)
      const arraychampion = Object.values(result.data)
      return arraychampion;
}


function showError(err) { 
  console.log('muestor error', err);
}




export const isFilterRol = (arraychampion,btnRol) => {
  
  let arrayFilter=[];
  arrayFilter=arraychampion.filter(e => e.tags.includes(btnRol));
  return arrayFilter;


};
