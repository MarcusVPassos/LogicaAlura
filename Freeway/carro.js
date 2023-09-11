// Variaveis dos carros em lista
let xCarros = [600,600,600,600,600,600];
let yCarros = [40,100,150,210,265,315];
let wCarros = 50;
let hCarros = 40;
let velocidadeCarros = [1.5, 2.5, 3.5, 5, 3, 2];


function mostraCarro()
{
  // Estrutura de Repetição, i++ = i +1
  for (let i = 0; i < imagemCarros.length; i++)
  {
    image(imagemCarros[i],xCarros[i],yCarros[i],wCarros,hCarros);
  }

}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function loopCarro()
{
  for (let i = 0; i < imagemCarros.length; i++){
      if (passouTela(xCarros[i])){
        xCarros[i] = 600;
      }
  }
}

function passouTela(xCarro){
  return xCarro < - 50;
}