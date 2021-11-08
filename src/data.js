// estas funciones son de ejemplo
import data from './data/lol/lol.js';


export const dataChampions = () => {
  const dataGet = JSON.stringify(data);
  const aux = JSON.parse(dataGet);
  const arrayData = (aux.data);
  const arraychampion = Object.values(arrayData)
  return arraychampion;
};

export const anotherExample = () => {
/*   document.addEventListener('DOMContentLoaded', configureAjaxCalls);
  function configureAjaxCalls() {
    document.getElementById('btn').addEventListener('click', function() {
      fetch('lol.json')
        .then(ajaxPositive)
        .catch(showError);
    });

    function ajaxPositive(response) {
      console.log('response.ok: ', response.ok);
      if(response.ok) {
        response.text().then(showResult);
      } else {
        showError('status code: ' + response.status);
      }
    }

    function showResult(txt) {
      console.log('muestro respuesta: ', txt);
    }

    function showError(err) { 
      console.log('muestor error', err);
    }
  } */
  return 'OMG';
};
