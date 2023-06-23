import { majorArcana } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/tarot/tarot.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);
// SPA

const root = document.getElementById('root');
const allCards = data.cards;
const major = majorArcana(allCards);

const showAllDataButton = document.createElement('button');
showAllDataButton.innerText = "Mostrar todas cartas"
const showArcaneButton = document.createElement('button');
showArcaneButton.innerText = 'Mostrar solo arcanos'

root.appendChild(showAllDataButton)
root.appendChild(showArcaneButton)

showAllDataButton.addEventListener('click', hagaAlgo);

function hagaAlgo() {
  console.log("algo")
}


//root.innerHTML = `<h1>${data.cards[0].name}</h1>`;
//const titulo = document.createElement('h1');
//titulo.innerText = data.cards[1].name;

//root.appendChild(titulo);

for(let i = 0; i < major.length; i++) {
  // root.innerHTML = root.innerHTML + `<h1>${allCards[i].name}</h1>`;
  const titulo = document.createElement('h1');
  titulo.innerText = major[i].name;
  root.appendChild(titulo);
}
