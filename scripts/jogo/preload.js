function preload(){
  imagemCenario       = loadImage('imagens/cenario/montanha.png');
  imagemCenario2      = loadImage('imagens/cenario/sky.png');
  imagemCenario3      = loadImage('imagens/cenario/pedras.png');
  imagemCenario4      = loadImage('imagens/cenario/nuvem1.png');
  imagemCenario5      = loadImage('imagens/cenario/nuvem2.png');
  imagemCenario6      = loadImage('imagens/cenario/nuvem3.png');
  imagemCenario7      = loadImage('imagens/cenario/nuvem4.png');
  imagemTelaInicial   = loadImage('imagens/cenario/telaInicial.png');
  imagemPersonagem    = loadImage('imagens/personagem/correndo.png');
  imagemInimigo       = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  imagemGameOver      = loadImage('imagens/assets/game-over.png');
  imagemVida          = loadImage('imagens/assets/coracao.png');
  fontTelaInicial     = loadFont('imagens/assets/fonteTelaInicial.otf');
  somDoJogo           = createAudio('sons/trilha_jogo_top.mp3');
  somDoJogo.volume(5);
  somTelaInicial           = createAudio('sons/somTelaInicial.mp3');
  somTelaInicial.volume(5);
  somGameOver           = createAudio('sons/gameOver.mp3');
  somGameOver.volume(5);
fita = loadJSON('fita/fita.json');
}
  function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
