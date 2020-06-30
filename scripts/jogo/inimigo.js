class Inimigo extends Animacao
{
 constructor(matriz, imagem, x,variacaoY, largura, altura, alturaSprite, larguraSprite,velocidade){
 super(matriz, imagem, x, variacaoY, largura, altura, alturaSprite, larguraSprite);
   
   this.velocidade = velocidade;
   this.x = width + 50;
 }
  move(){
    this.x -= this.velocidade;
  }
  reAparece(){
   this.x = width; 
  }
}