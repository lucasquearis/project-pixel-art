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



