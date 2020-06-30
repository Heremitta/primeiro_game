class Jogo {

  constructor() {
    this.indice = 0;
    this.mapa = fita.mapa;
  }

  setup() {
    cenario2 = new Cenario(imagemCenario2, 0,10)
    cenario3 = new Cenario(imagemCenario3, 0,10)
    cenario4 = new Cenario(imagemCenario4,  .5,0)
    cenario5 = new Cenario(imagemCenario5,  1.5,0)
    cenario6 = new Cenario(imagemCenario6,  2,0)
    cenario7 = new Cenario(imagemCenario7,  2.5,0)
    cenario = new Cenario(imagemCenario, 0,10);
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 100, 100, 10);
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 10);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 150, 200, 10);
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 270, 220);
    this.personagem = personagem;
    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima,fita.configuracoes.vidaInicial);
    somDoJogo.loop();

  }
  keyPress(x) {
    if (mapa[32]) {
      this.personagem.pula(colidiu);
    } else if (mapa[39] && personagem.x < width - personagem.largura) {
      this.personagem.frenteX(5);
      velocidadeCenario = 3;
    } else if (mapa[37] && personagem.x > 0) {
      this.personagem.trasX(5);
      velocidadeCenario = 0;
    } 

  }
  draw() {
    cenario2.exibe();
    cenario4.exibe();
    cenario4.move(.5)
    cenario5.exibe();
    cenario5.move(1.5)
    cenario6.exibe();
    cenario6.move(4)
    cenario7.exibe();
    cenario7.move(4.5)
    cenario3.exibe();
    cenario3.move(.5);
    cenario.exibe();
    cenario.move(velocidadeCenario+2);
    vida.draw();
    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.velocidade = linhaAtual.velocidade;
   inimigo.exibe();
    inimigo.move();
    if (inimigoVisivel) {
      this.indice++;
      inimigo.reAparece();
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
    }

 

    if (personagem.estaColidindo(inimigo)) {
      vida.perdeVida();
      personagem.tornarInvencivel();
      colidiu = true;
      if (vida.vidas === 0 && cenaAtual === 'jogo') {
        somDoJogo.stop();
        gameOver = true;
        somGameOver.loop();
        image(imagemGameOver, width / 2 - 200, height / 3);
        if(pontuacao.pontos > record){
          record = pontuacao.pontos;
        }
        this.createBtn();
        this.botaoGameOver.draw();
        noLoop();

      }

    }
    personagem.exibe();
    personagem.aplicaGravidade();
    pontuacao.exibe();
    pontuacao.addPonto();
  }
  
  createBtn(){
    this.botaoGameOver = new BotaoGerenciador('recomeçar?', width/2, height /2 +80);
  }

}