class TelaInicial
{
  constructor(){
    
  }
  setup(){
    somTelaInicial.loop();
   
  }
  draw(){
    this._imagemDeFundo();
    this._texto();
    this._botao();
    inimigos.forEach(element => {
      element.x = width +10;
    });
    jogo.indice = 0;
  }
  _imagemDeFundo(){
    image(imagemTelaInicial,0,0,width,height);
  }
  _texto(){
    fill(167, 82, 166);
    textFont(fontTelaInicial);
    textAlign('center');
    textSize(80);
    text('As aventuras de',width/2,height/4 );
    textSize(100);
    text('Hipsta',width/2, height/2.5);
    if(record !=0){
      textSize(60);
      fill(0, 0, 0);
      text('Record: '+parseInt(record)+' pontos',width/2, height/1.8);
    }
  }
  _botao(){
     this.botao.y = height/7*5;
     this.botao.draw();
      }
  createBtn(){
    this.botao = new BotaoGerenciador('Iniciar', width/2 ,height/2);
  }
}
