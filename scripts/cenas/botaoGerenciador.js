class BotaoGerenciador
{
  constructor(texto, x, y){
    this.texto = texto;
    this.x = x;
    this.y = y;
    this.botao = createButton(this.texto);
    this.botao.mousePressed(()=> this._alteraCena());
    this.botao.addClass('botao-tela-inicial');
  }
  draw(){
    this.botao.position(this.x,this.y);
    this.botao.center('horizontal');
  }
  _alteraCena(){
      this.botao.remove();
    if(cenaAtual === 'jogo'){
      somGameOver.stop();
      somTelaInicial.loop();
      somDoJogo.stop();
      telaInicial.createBtn();
      cenaAtual = 'telaInicial';
      loop();
      return;
    }
    gameOver = false;
    cenaAtual = 'jogo'
    somTelaInicial.stop();
    jogo.setup();
  }
}