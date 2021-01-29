var images = document.createElement('img');
var textoImagen = document.createElement('p')

var fotos = ['./src/animais.jpg', './src/animais1.jpg', './src/animais3.jpg', './src/animais4.jpg', 
'./src/animais5.jpg', './src/animais6.jpg', './src/animais7.jpg', './src/animais8.jpg', './src/animais9.jpg', 
'./src/animais10.jpg', './src/animais11.jpg', './src/animais12.jpg', './src/animais13.jpg', './src/animais14.jpg',
'./src/fofas.jpg', './src/shitpost.jpg', './src/shitpost1.jpg', './src/shitpost2.jpg', './src/shitpost3.jpg','./src/shitpost4.jpg',
'./src/shitpost5.jpg', './src/shitpost6.jpg', './src/shitpost7.jpg', './src/shitpost8.jpg', './src/shitpost9.jpg', './src/shitpost10.jpg',
'./src/shitpost11.jpg', './src/shitpost12.jpg', './src/shitpost13.jpg', './src/shitpost14.jpg', './src/shitpost15.png', './src/shitpost16.png',
'./src/will.jpg'];



function randomImage( ){
    
    textoImagen.textContent = 'Para voltar, clique na imagem!'
    DivTextRandomImage.appendChild(textoImagen);

    let i = Fazrandom(fotos.length, 0)
    images.src = fotos[i]
    ButtonImageRandom.appendChild(images);
    
    let node = document.getElementById('DivButtonImage')
    if (node.parentNode){
        node.parentNode.removeChild(node);
    }
}




function Fazrandom(max, min){
    let valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}



function Refresh(){
    location.reload();
}
