// Exercício 1
const selecBody = document.getElementById('body');

const criarTitulo = () => {
  const createH1 = document.createElement('h1');
  createH1.innerHTML = 'Paleta de Cores';
  createH1.id = 'title';
  selecBody.appendChild(createH1);
};

// Exercicio 2 e 3.
const createrPallet = () => {
  const createTable = document.createElement('table');
  createTable.id = 'color-palette';
  selecBody.appendChild(createTable);

  const selectTable = document.getElementById('color-palette');

  for (let index = 1; index < 5; index += 1) {
    const createTh = document.createElement('th');
    selectTable.appendChild(createTh);
    createTh.className = 'color ';
  }
};

const classnameForPallet = () => {
  const selectPallet = document.querySelectorAll('.color ');
  const arrayCor = ['black selected', 'two', 'three', 'four'];
  const stringColor = 'color';
  selectPallet.forEach((color, index) => {
    const corSozinha = color;
    corSozinha.className = `${stringColor} ${arrayCor[index]}`;
  });
};

// const string = 'color';

// for (let index = 0; index < arrayCor.length; index += 1) {
//   selecTh[index].className = string + arrayCor[index];
// }
// const numeroQuadrado = 5;

// const criarBotao = document.createElement('button');
// selecBody.appendChild(criarBotao);
// criarBotao.id = 'clear-board';
// criarBotao.innerHTML = 'Limpar';
// criarBotao.addEventListener('click', () => {
//   const numeroMaximoQuadrado = (numeroQuadrado * numeroQuadrado);
//   const selecPixel = document.querySelectorAll('.pixel');
//   for (let index = 0; index < numeroMaximoQuadrado; index += 1) {
//     selecPixel[index].style.backgroundColor = 'white';
//   }
// });

// const createQuadrado = document.createElement('table');
// createQuadrado.id = 'pixel-board';
// selecBody.appendChild(createQuadrado);

// const selecQuadrado = document.getElementById('pixel-board');
// function fazerQuadrados(numb) {
//   for (let index = 1; index <= numb; index += 1) {
//     const createColuna = document.createElement('tr');
//     for (let index2 = 0; index2 < numb; index2 += 1) {
//       const createTd = document.createElement('td');
//       createColuna.appendChild(createTd);
//       createTd.className = 'pixel';
//     }
//     selecQuadrado.appendChild(createColuna);
//   }
// }
// const corSelecionada = window
//   .getComputedStyle(document.querySelector('.selected')).getPropertyValue('background-color');

// function mudarCorPixel() {
//   const numeroMaximoQuadrado = (numeroQuadrado * numeroQuadrado);
//   const selecPixel = document.querySelectorAll('.pixel');
//   for (let index2 = 0; index2 < numeroMaximoQuadrado; index2 += 1) {
//     selecPixel[index2].style.backgroundColor = 'white';
//   }
//   for (let index = 0; index < numeroMaximoQuadrado; index += 1) {
//     selecPixel[index].addEventListener('click', (event) => {
//       if (event.target.style.backgroundColor === corSelecionada) {
//         event.target.style.backgroundColor = 'white';
//       } else {
//         event.target.style.backgroundColor = corSelecionada;
//       }
//     });
//   }
// }

// function valorInput() {
//   const numeroQuadrado2 = document.getElementById('board-size').value;
//   if (numeroQuadrado2 === '') {
//     alert('Board inválido!');
//   } else if (numeroQuadrado2 < 5) {
//     createQuadrado.innerHTML = '';
//     fazerQuadrados(5);
//     mudarCorPixel();
//   } else if (numeroQuadrado2 > 7) {
//     createQuadrado.innerHTML = '';
//     fazerQuadrados(7);
//     mudarCorPixel();
//   } else {
//     createQuadrado.innerHTML = '';
//     fazerQuadrados(numeroQuadrado);
//     mudarCorPixel();
//   }
// }

// const input = document.createElement('input');

// selecBody.appendChild(input);
// input.id = 'board-size';
// const botaoTamanho = document.createElement('button');
// selecBody.appendChild(botaoTamanho);
// botaoTamanho.id = 'generate-board';
// botaoTamanho.innerHTML = 'VQV';
// botaoTamanho.addEventListener('click', valorInput);

// fazerQuadrados(5);

// const selectPreto = 'color black selected';
// const selectTwo = 'color two selected';
// const selectThree = 'color three selected';
// const selectFour = 'color four selected';
// const colorBlack = 'color black';
// const colorTwo = 'color two';
// const colorThree = 'color three';
// const colorFour = 'color four';
// selecTh[0].addEventListener('click', () => {
//   selecTh[0].className = selectPreto;
//   selecTh[1].className = colorTwo;
//   selecTh[2].className = colorThree;
//   selecTh[3].className = colorFour;
// });

// selecTh[1].addEventListener('click', () => {
//   selecTh[0].className = colorBlack;
//   selecTh[1].className = selectTwo;
//   selecTh[2].className = colorThree;
//   selecTh[3].className = colorFour;
// });

// selecTh[2].addEventListener('click', () => {
//   selecTh[0].className = colorBlack;
//   selecTh[1].className = colorTwo;
//   selecTh[2].className = selectThree;
//   selecTh[3].className = colorFour;
// });

// selecTh[3].addEventListener('click', () => {
//   selecTh[0].className = colorBlack;
//   selecTh[1].className = colorTwo;
//   selecTh[2].className = colorThree;
//   selecTh[3].className = selectFour;
// });

// Exercício 8

window.onload = () => {
  criarTitulo();
  createrPallet();
  classnameForPallet();
};
