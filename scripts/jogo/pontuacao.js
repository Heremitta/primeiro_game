class Pontuacao
{
  constructor(){
    this.pontos = 0;
    this.record = 0;
  }
  
  exibe(){
    textAlign('right')
    fill('#fff');
    textSize(50);
    text(parseInt(this.pontos), width -30, 70);
  }
  addPonto(){
    this.pontos += .2;
  }

}