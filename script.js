// Exercício 1
const selectBody = document.getElementById('body');

const createTitle = () => {
  const createH1 = document.createElement('h1');
  createH1.innerHTML = 'Paleta de Cores';
  createH1.id = 'title';
  selectBody.appendChild(createH1);
};

const createTable = document.createElement('table');
const createPallet = () => {
  createTable.id = 'color-palette';
  selectBody.appendChild(createTable);

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

const criarQuadrado = (numb) => {
  const createQuadrado = document.createElement('table');
  createQuadrado.id = 'pixel-board';
  selectBody.appendChild(createQuadrado);
  for (let index = 1; index <= numb; index += 1) {
    const createColuna = document.createElement('tr');
    for (let index2 = 0; index2 < numb; index2 += 1) {
      const createTd = document.createElement('td');
      createColuna.appendChild(createTd);
      createTd.className = 'pixel';
    }
    const selecQuadrado = document.getElementById('pixel-board');
    selecQuadrado.appendChild(createColuna);
  }
};

const defaultColorPallet = () => {
  const selectPallet = document.querySelectorAll('.color ');
  const arrayCor = ['black', 'two', 'three', 'four'];
  const stringColor = 'color';
  selectPallet.forEach((color, index) => {
    const corSozinha = color;
    corSozinha.className = `${stringColor} ${arrayCor[index]}`;
  });
};

const selectColorPalltet = () => {
  createTable.addEventListener('click', (event) => {
    const cliqueAlvo = event;
    const condicao = cliqueAlvo.target.className === 'color black selected';
    if (condicao) {
      classnameForPallet();
    } else {
      defaultColorPallet();
      cliqueAlvo.target.className += ' selected';
    }
  });
};

const squarePaint = () => {
  const pickupSquare = document.querySelectorAll('.pixel');
  pickupSquare.forEach((square) => {
    square.addEventListener('click', (event) => {
      const click = event;
      const pickupColor = window.getComputedStyle(document
        .querySelector('.selected')).getPropertyValue('background-color');
      const condicao = click.target.style.backgroundColor === pickupColor;
      if (condicao) {
        click.target.removeAttribute('style');
      } else {
        click.target.style.backgroundColor = pickupColor;
      }
    });
  });
};

const createButton = () => {
  const newButton = document.createElement('button');
  newButton.id = 'clear-board';
  newButton.innerText = 'Limpar';
  const selectPallet = document.querySelector('#color-palette');
  selectPallet.insertAdjacentElement('afterend', newButton);
  newButton.addEventListener('click', () => {
    const findPixel = document.querySelectorAll('.pixel');
    findPixel.forEach((square) => {
      const eachSquare = square;
      eachSquare.removeAttribute('style');
    });
  });
};

window.onload = () => {
  createTitle();
  createPallet();
  classnameForPallet();
  criarQuadrado(5);
  selectColorPalltet();
  squarePaint();
  createButton();
};
