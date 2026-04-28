let tela = document.getElementById('meuCanvas');
let desenho = tela.getContext('2d');

//tamanho do carro
let largura = 70;
let altura = 50;

// posicao X e Y inicial do carro no caso no meio
let posX = 150;
let posY = 150;

// imagem do carro
let imagemCarro = new Image();
imagemCarro.src = "mustang.png";

//imagem do da pista do fundo
let imagemFundo = new Image();
imagemFundo.src = "pista.jpg";

// imagem fundo é para manter a imagem da pista, 
// e a imagem carro é pra manter o carro no centro do ponteiro
function atualizar() {
  desenho.drawImage(imagemFundo, 0, 0, 300, 300);
  desenho.drawImage(imagemCarro, posX - largura / 2, posY - altura / 2, largura, altura);
}

tela.addEventListener('mousemove', function(e) { // sabe quando o mouse se move em cima do canvas
  let area = tela.getBoundingClientRect(); // pega as coordenadas do canvas na tela
  let mouseX = e.clientX - area.left; // pega a posicao do mouse dentro do canvas
  let mouseY = e.clientY - area.top;

  posX = Math.min(Math.max(mouseX, largura / 2), 300 - largura / 2); // trava o carro para nao sair do canvas
  posY = Math.min(Math.max(mouseY, altura / 2), 300 - altura / 2);

  atualizar(); // redesenha td na nova posicao 
});

imagemFundo.onload = function() { // espera a imagem pista carregar
  imagemCarro.onload = function() { // depois a imagem do carro carregar
    atualizar(); // quando as duas imagens estiverem carregadas desenha tudo no canvas

  };
};