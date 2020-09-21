const slider = document.querySelector('.slider')
const sliderWidth = document.querySelector('.slider-width')


const quantasImagens = document.querySelectorAll('.slider-item').length
sliderWidth.style.width = `calc(${slider.clientWidth} * ${quantasImagens}px)`


sliderWidth.style.height = `${slider.clientHeight}px`
const imgs = document.querySelectorAll('.slider-item')
for(i of imgs){
    i.style.width = `${slider.clientWidth}px`
}

document.querySelector('.slider-botoes').style.width = 
`${slider.clientWidth}px`

document.querySelector('.slider-botoes').style.height = 
`${slider.clientHeight}px` //clientHeight pega o centro da div

var pos = 0

function volta(){
    pos --
    if (pos < 0){
        pos = quantasImagens -1
    }
    atualizarMargin()
}

function avanca(){
    pos ++
    if(pos > quantasImagens -1){
        pos = 0
    } 
    atualizarMargin()
}

function atualizarMargin(){
    let novaMargin = pos * (sliderWidth.clientWidth/quantasImagens) // clientWidth pega a largura do slider
    document.querySelector('.slider-width').style.marginLeft = `-${novaMargin}px`
    //console.log(novaMargin)
    
}

setInterval(() => {
    avanca()
}, 4000);