function tocaSom(idTagSong) {
    const element = document.querySelector(idTagSong);
    if(element != null && element.localName === 'audio') {
        element.play();
    }
    else{
        console.log('Elemento não encontrado ou seletor não válido');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const teclado = listaDeTeclas[contador];
    const instrumento = teclado.classList[1];

    const idAudio = `#som_${instrumento}`;

    teclado.onclick = function () {
        tocaSom(idAudio);
    }
    
    teclado.onkeydown = function (evento) {

        console.log(evento.code);
        if (evento.code === 'Space' || evento.code === 'Enter'){
            teclado.classList.add('ativa');
        }
        
        
    }

    teclado.onkeydown = function () {
        teclado.classList.remove('ativa');
    }
}