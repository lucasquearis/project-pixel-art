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

const arrayCor = ['black selected', 'two', 'three', 'four'];
const selecTh = document.querySelectorAll('.color ')

for(index = 0; index < arrayCor.length; index += 1){
  selecTh[index].className = 'color '+arrayCor[index];
}
// Exercício 9
const criarBotao = document.createElement('button')
selecBody.appendChild(criarBotao)
criarBotao.id = 'clear-board'
criarBotao.innerHTML = 'Limpar'
criarBotao.addEventListener('click', function(){
  const numeroMaximoQuadrado = (numeroQuadrado * numeroQuadrado)
  const selecPixel = document.querySelectorAll('.pixel')
  for(let index = 0; index < numeroMaximoQuadrado; index += 1){
    selecPixel[index].style.backgroundColor = 'white'
  }
})

// Exercicio 10
const input = document.createElement('input')

selecBody.appendChild(input)
input.id = 'board-size'
const createQuadrado = document.createElement('table');
const botaoTamanho = document.createElement('button')
selecBody.appendChild(botaoTamanho)
botaoTamanho.id = 'generate-board'
botaoTamanho.innerHTML = 'VQV'
botaoTamanho.addEventListener('click', valorInput)
let numeroQuadrado = 5
function valorInput() {
  numeroQuadrado2 = document.getElementById('board-size').value;
  if (numeroQuadrado2 === ''){
    alert("Board inválido!")
  }else if(numeroQuadrado2 < 5){
    createQuadrado.innerHTML = ''
    fazerQuadrados(5)
    mudarCorPixel();
  } else if (numeroQuadrado2 > 7){
    createQuadrado.innerHTML = ''
    fazerQuadrados(7)
    mudarCorPixel();
  } else {
  createQuadrado.innerHTML = ''
  fazerQuadrados(numeroQuadrado);
  mudarCorPixel();
  }
  
}


// Exercício 4 e 5

selecBody.appendChild(createQuadrado);
createQuadrado.id = 'pixel-board'

const selecQuadrado = document.getElementById('pixel-board')
function fazerQuadrados(numeroQuadrado){


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
fazerQuadrados(5)
// Exercício 6 e 7
selecTh[0].addEventListener('click', function selecPreto(){
  selecTh[0].className = 'color black selected'
  selecTh[1].className = 'color two'
  selecTh[2].className = 'color three'
  selecTh[3].className = 'color four'
})

selecTh[1].addEventListener('click', function selecColorTwo(){
  selecTh[0].className = 'color black'
  selecTh[1].className = 'color two selected'
  selecTh[2].className = 'color three'
  selecTh[3].className = 'color four'
})

selecTh[2].addEventListener('click', function selecColorThree(){
  selecTh[0].className = 'color black'
  selecTh[1].className = 'color two'
  selecTh[2].className = 'color three selected'
  selecTh[3].className = 'color four'
})

selecTh[3].addEventListener('click', function selecColorFour(){
  selecTh[0].className = 'color black'
  selecTh[1].className = 'color two'
  selecTh[2].className = 'color three'
  selecTh[3].className = 'color four selected'
})

// Exercício 8

const palleteSelect = document.querySelector('#color-palette')
let corSelecionada = window.getComputedStyle(document.querySelector('.selected')).getPropertyValue('background-color');

function mudarCorPixel(){
  const numeroMaximoQuadrado = (numeroQuadrado * numeroQuadrado)
  const selecPixel = document.querySelectorAll('.pixel')
  for(let index2 = 0; index2 < numeroMaximoQuadrado; index2 += 1){
    selecPixel[index2].style.backgroundColor = 'white'
  }
  
  for(let index = 0; index < numeroMaximoQuadrado; index += 1){
      selecPixel[index].addEventListener('click', function (event){
        if(event.target.style.backgroundColor === corSelecionada){
          event.target.style.backgroundColor = 'white'
        } else {
          event.target.style.backgroundColor = corSelecionada
        }
      })
    }
}
mudarCorPixel();
  palleteSelect.addEventListener('click', function(){
    corSelecionada = window.getComputedStyle(document.querySelector('.selected')).getPropertyValue('background-color')
  })
}


