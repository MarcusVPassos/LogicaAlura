// variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

// velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

// variaveis da raquete
let xRaquete = 7;
let yRaquete = 150;
let wRaquete = 10;
let hRaquete = 100;

// variaveis da raquete oponente
let xRaqueteOpon = 583;
let yRaqueteOpon = 150;
let wRaqueteOpon = 10;
let hRaqueteOpon = 100;
let velocidadeYOpon

let colidiu = false;

// Placar
let Pontos = 0;
let PontosOpon = 0;

//Sons do jogo
let raquetada;
let pontoSom;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3")
  raquetada = loadSound("raquetada.mp3");
  pontoSom = loadSound("ponto.mp3")
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentoBolinha();
  colisaoBordaBolinha();
  mostraRaquete(xRaquete,yRaquete);
  mostraRaquete(xRaqueteOpon,yRaqueteOpon);
  movimentoRaquete();
  // colisaoRaqueteBolinha();
  colisaoBibliotecaRaqueteBolinha(xRaquete,yRaquete);
  colisaoBibliotecaRaqueteBolinha(xRaqueteOpon, yRaqueteOpon);
  movimentoRaqueteOpon();
  incluirPlacar();
  marcaPonto();
  bolinhaNaoFicaPresa();
}

function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro);
}

function movimentoBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function colisaoBordaBolinha(){
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x,y){
  rect(x,y, wRaquete, hRaquete);
}

function movimentoRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
   if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
  yRaquete = constrain(yRaquete, 5, 300);
}

// Colisão feita sem biblioteca
function colisaoRaqueteBolinha(){
  if (xBolinha - raio < xRaquete + wRaquete && yBolinha - raio < yRaquete + hRaquete && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  }
}

// Colisão da Biblioteca p5.collide2D
function colisaoBibliotecaRaqueteBolinha(x,y){
  colidiu = collideRectCircle(x, y, wRaquete, yRaquete, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *= -1
    raquetada.play();
  }
}

function movimentoRaqueteOpon(){
  velocidadeYOpon = yBolinha -yRaqueteOpon -wRaquete / 2 -100;
  yRaqueteOpon += velocidadeYOpon;
  yRaqueteOpon = constrain(yRaqueteOpon, 5, 300);
}

function incluirPlacar(){
  stroke(255)
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0))
  rect(150,10,40,20);
    fill(255);
  text(Pontos,170,26);
  fill(color(255,140,0))
  rect(450,10,40,20);
    fill(255);
  text(PontosOpon, 470,26);
}

function marcaPonto(){
  if (xBolinha > 590){
    Pontos += 1;
    pontoSom.play();
  }
  if (xBolinha < 10){
    PontosOpon += 1;
    pontoSom.play();
  }
}

function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}