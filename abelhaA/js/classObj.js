class obj{
    constructor(posx,posy,largura,altura,cor){
        this.posx = posx
        this.posy = posy
        this.largura = largura
        this.altura = altura
        this.cor = cor
    }
    desenharObj(){
        let imagem = new Image()
        imagem.src = this.cor
        telaJogo.drawImage(imagem,this.posx,this.posy,this.largura,this.altura)
    }
        
}
class Abelha extends obj{
  dir = 0
  mover (){
    this.posx += this.dir
  }

}
  class Aranha extends obj {
    mover(){
        this.posy += 3
    if (this.posy > 945) {
        this.posy = -100
         this.posx = Math.random() * (500-this.largura)
    }
    }
  }

  class BG extends obj{
    mover(velocidade,limite,posI){
      this.posy += velocidade
      if(this.posy > limite){
        this.posy = posI
      }
    }
  }