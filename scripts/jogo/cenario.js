class Cenario
{
  constructor(imagem, velocidade,discrepancia){
    this.imagem = imagem;
    this.velocidade = velocidade;
    this.x1 = width-width ;
    this.x2 = width;
    this.discrepancia = discrepancia;
  }
  exibe(){
    image(this.imagem, this.x1, 0, width+this.discrepancia, height );
    image(this.imagem, this.x2, 0, width+this.discrepancia, height );
  }
  move(velocidadeCenario){
    this.x1 -= velocidadeCenario;
    this.x2 -= velocidadeCenario;
    if(this.x1 < -width){
      this.x1 = width;
    }
     if(this.x2 < -width){
      this.x2 = width;
    }
  }
}