let imagemCenario;
let imagemCenario2;
let imagemCenario3;
let imagemCenario4;
let imagemCenario5;
let imagemCenario6;
let imagemCenario7;
let imagemVida;
let imagemTelaInicial;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoGrande;
let imagemInimigoVoador;
let imagemGameOver;
let fontTelaInicial;
let cenario;
let cenario2;
let cenario3;
let cenario4;
let cenario5;
let cenario6;
let cenario7;
let somDoJogo;
let ok = true;
let record = 0;
let velocidadeCenario = 3;
let personagem;
let colidiu = false;
let pulando = false;
let pontuacao;
let vida;
const inimigos = [];
let jogo;
let telaInicial;
let cenaAtual = 'telaInicial';
let cenas;
let botaoGerenciador;
let fita;
let somTelaInicial;
let somGameOver;
let botaoGameOver;
let gameOver = false;
const matrizInimigo = [
  [0, 0],
  [106, 0],
  [210, 0],
  [314, 0],
  [0, 100],
  [106, 100],
  [210, 100],
  [314, 100],
  [0, 200],
  [106, 200],
  [210, 200],
  [314, 200],
  [0, 300],
  [106, 300],
  [210, 300],
  [314, 300],
  [0, 400],
  [106, 400],
  [210, 400],
  [314, 400],
  [0, 500],
  [106, 500],
  [210, 500],
  [314, 500],
  [0, 600],
  [106, 600],
  [210, 600],
  [314, 600],
]
const matrizPersonagem = [
         [0,0],
           [220,0],
           [440,0],
           [660,0],
         [0,270],
           [220,270],
           [440,270],
           [660,270],
         [0,540],
           [220,540],
           [440,540],
           [660,540],
         [0,810],
           [220,810],
           [440,810],
           [660,810]
       ]
const matrizInimigoGrande = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
]
const matrizInimigoVoador = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
]