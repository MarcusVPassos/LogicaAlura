function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
  background(estradaImg);
  mostraVaquinha();
  mostraCarro();
  movimentaCarro();
  controleVaquinha(); 
  loopCarro();
  verificaColisao();
  incluiPontos();
  marcaPontos();
}



