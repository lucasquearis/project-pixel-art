window.onload = function() {
  // Exercício 1
const selecBody = document.getElementById('body');
const createH1 = document.createElement('h1');
createH1.innerHTML ='Paleta de Cores'
createH1.id = 'title'
selecBody.appendChild(createH1);

// Exercicio 2 e 3.
const createTable = document.createElement('table');
createTable.id = 'color-palette'
selecBody.appendChild(createTable);

const selectTable = document.getElementById('color-palette');


for(index = 1; index < 5; index += 1){
  const createTh = document.createElement('th');
  selectTable.appendChild(createTh);
  createTh.className = 'color '
}

const arrayCor = ['black', 'two', 'three', 'four'];
const selecTh = document.querySelectorAll('.color ')

for(index = 0; index < arrayCor.length; index += 1){
  selecTh[index].className = 'color '+arrayCor[index];
}

// Exercício 4
const createQuadrado = document.createElement('table');
selecBody.appendChild(createQuadrado);
createQuadrado.id = 'pixel-board'
let numeroQuadrado = 5
const selecQuadrado = document.getElementById('pixel-board')

for(let index = 1; index <= numeroQuadrado; index += 1){
  const createColuna = document.createElement('tr');
  for(let index2 = 0; index2 < numeroQuadrado; index2 += 1){
    const createTd = document.createElement('td');
    createColuna.appendChild(createTd);
    createTd.className = 'pixel'
  }
  selecQuadrado.appendChild(createColuna);
}
}