const tela = document.getElementById("tela")
const telaJogo = tela.getContext("2d")


let bg = new BG(0,0,500,945,"img/bg.png")
let bg2 = new BG(0,-945,500,945,"img/bg.png")
let abelha = new Abelha(200,500,100,100,"img/bee1.png")
let aranha = new Aranha(100,100,100,100,"img/spider1.png")

document.addEventListener("keydown",function(e){
    if(e.key == "a"){
        abelha.dir = -5
    }
    if(e.key == "d"){
        abelha.dir = 5
    }


})
document.addEventListener("keyup",function(e){
    if(e.key == "a"){
        abelha.dir = 0
    }
    if(e.key =="d"){
        abelha.dir = 0
    }


})



function draw (){ //função responsavel por desenhar elementos na tela
    bg.desenharObj()
    bg2.desenharObj()
    abelha.desenharObj()
    aranha.desenharObj()
}



function update(){ //função responsavel por atualizar os frames da tela
abelha.mover()
aranha.mover()
bg.mover(3,945,0)
bg2.mover(3,0,-945)
}

function main(){ //função que vai chammar todas as outras funções
    telaJogo.clearRect(0,0,500,600)
    update()
    draw()
}

setInterval(main,10)