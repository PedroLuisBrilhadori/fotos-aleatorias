var images = document.createElement('img');
var textoImagen = document.createElement('p');

var fotos = [];



function init(){
    for (let i = 1; i < 33; i++ ){
        fotos[i] = `./src/${i}.jpg`
    };
}


function randomImage(){
    
    textoImagen.textContent = 'Para voltar, clique na imagem!'
    DivTextRandomImage.appendChild(textoImagen);

    let i = Fazrandom(fotos.length, 0);
    images.src = fotos[i];
    ButtonImageRandom.appendChild(images);
    
    let node = document.getElementById('DivButtonImage');
    if (node.parentNode){
        node.parentNode.removeChild(node);
    }
}

function Fazrandom(max, min){
    let valor = Math.random() * (max - min) + min
    return Math.floor(valor);
}

function Refresh(){
    location.reload();
}
