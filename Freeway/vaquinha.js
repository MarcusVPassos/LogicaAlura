// Código da Vaquinha

// Variaveis Vaquinha
let xVaquinha = 85
let yVaquinha = 365;
let colisao = false;
let pontos = 0;

function mostraVaquinha(){
  image(vaquinha,xVaquinha,yVaquinha,30,30);
}

function controleVaquinha(){
  if (keyIsDown(UP_ARROW)){
    yVaquinha -=2.5;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
    yVaquinha +=2.5;
    }
  }
}
// da biblioteca p5-collide2d
function verificaColisao(){
  // collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], wCarros, hCarros, xVaquinha, yVaquinha, 15)
    if (colisao){
      voltaPosiçãoInicial();
      somColisao.play();
      removePontos();
    }
  }
}

function voltaPosiçãoInicial(){
  yVaquinha = 365;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25)
  fill(255,255,0)
  text(pontos,width / 5, 25);
}

function marcaPontos(){
  if(yVaquinha < 15){
    pontos += 1;
    somPonto.play();
    voltaPosiçãoInicial();
  }
}

function removePontos(){
  if (pontos > 0){
  pontos -= 1;
  }
}

function podeSeMover(){
  return yVaquinha < 365;
}