class Personagem extends Animacao
{
   constructor(matriz, imagem, x, variacaoY, largura, altura, alturaSprite, larguraSprite) {
      super(matriz, imagem, x,variacaoY, largura, altura, alturaSprite, larguraSprite);
     this.variacaoY = variacaoY;
     this.gravidade = 3;
     this.velocidadeDoPulo = 0;
     this.yInicial = height - this.altura - variacaoY;
     this.y = this.yInicial;
     this.somPuloPersonagem = loadSound('sons/pulo-personagem.mp3');
     this.pulando = 0;
     this.invencivel = false;
   }
  
  pula(colidiu){
    if(ok){
      if(!colidiu && this.pulando < 2){
        this.somPuloPersonagem.play();
      }else if(!this.somPuloPersonagem.isPlaying){
       this.somPuloPersonagem.stop(); 
      }
      if(this.y === this.yInicial && this.pulando < 2 && !gameOver){
        this.somPuloPersonagem.play();
        this.velocidadeDoPulo = -30;
        this.pulando++;
      }else if(this.pulando < 2 && !gameOver){
        this.somPuloPersonagem.play();
        this.velocidadeDoPulo = -30;
        this.pulando++;
      }
    } 
    ok =false;
  }
  aplicaGravidade(){
    this.y += this.velocidadeDoPulo;
    this.velocidadeDoPulo += this.gravidade;
    if(this.y > this.yInicial){
      this.y = this.yInicial;
      this.pulando = 0;
    }
  }
  tornarInvencivel(){
    this.invencivel = true;
    setTimeout(()=>{
    this.invencivel = false;},1000); 
  }
  estaColidindo(inimigo){
    if(this.invencivel){
     return false; 
    }
    const precisao = .7;
    // noFill();
    // circle(this.x + this.largura /2,
    //   this.y + this.largura *.7,
    //   this.largura)
    // circle(inimigo.x + inimigo.largura *.7,
    //   inimigo.y + inimigo.altura /2,
    //   inimigo.largura -inimigo.altura/2)
    const colisao = collideCircleCircle(
      this.x + this.largura /2,
      this.y + this.largura * precisao,
      this.largura,
      inimigo.x + inimigo.largura * precisao,
      inimigo.y + inimigo.altura /2,
      inimigo.largura -inimigo.altura/2
    );
    // // collideCircleCircle(
    // circleX,
    //   circleY,
    //   circleDiameter,
    //   circleX2,
    //   circleY2,
    //   circleDiameter2
    // )
    // const colisao = collideRectRect(
    //   this.x,
    //   this.y,
    //   this.largura * precisao,
    //   this.altura * precisao,
    //   inimigo.x,
    //   inimigo.y,
    //   inimigo.largura * precisao,
    //   inimigo.altura * precisao
    // );
    return colisao;
  }

  frenteX(x){
   this.x += (x); 
  }
  trasX(x){
    this.x -= (x);
  }
}