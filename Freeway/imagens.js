// imagens e sons do jogo

// imagens do jogo
let estradaImg;
let vaquinha;
let carroVerde;
let carroPreto;
let carroAmarelo;

// sons do jogo
let somTrilha;
let somColisao;
let somPonto;

function preload(){
  //inserção de imagens no código
  estradaImg = loadImage("imagens/estrada.png");
  vaquinha = loadImage("imagens/ator-1.png");
  carroVerde = loadImage("imagens/carro-1.png");
  carroPreto = loadImage("imagens/carro-2.png");
  carroAmarelo = loadImage("imagens/carro-3.png");
  imagemCarros = [carroVerde,carroPreto,carroAmarelo,carroVerde,carroPreto,carroAmarelo];
  //inserção dos sons no código
  somTrilha = loadSound("sons/trilha.mp3");
  somColisao = loadSound("sons/colidiu.mp3");
  somPonto = loadSound("sons/pontos.wav");
}