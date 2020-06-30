

function setup() {
  createCanvas(windowWidth, windowHeight);
  telaInicial = new TelaInicial();
  telaInicial.createBtn();
  jogo = new Jogo();
  frameRate(40);
  cenas = {
    jogo,
    telaInicial
  };
  cenas[cenaAtual].setup();
  somTelaInicial.loop();
}

var mapa = {}; // You could also use an array
var teclaPressionada;
onkeydown = onkeyup = function(e){
  e = e || event; // to deal with IE
  mapa[e.keyCode] = e.type == 'keydown';
  teclaPressionada = e.keyCode;
 
}
function keyReleased(){
  ok = true;  
}

function draw() {
 if(cenaAtual === 'jogo' ){
    jogo.keyPress(mapa);
  }
cenas[cenaAtual].draw();



}


 