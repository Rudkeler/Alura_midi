function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);
      
    if (elemento && elemento.localName ==='audio') {
            //console.log(elemento.localName);
            elemento.play();
        }
        else {
            console.log('Elemento não encontrado ou seletor inválido.');
        }
    }        

    


//lista de teclas guardadas na const abaixo

const listaDeTeclas = document.querySelectorAll('.tecla');

//variavel contadora
let contador = 0;

/* enquanto contador for < que o comprimento de listaDeTeclas
while (contador < listaDeTeclas.length){
    const tecla = listaDeTeclas [contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;//TEMPLATE STRING
    //console.log (idAudio);
    tecla.onclick=function(){
        tocaSom(idAudio);
    }
    contador +=1;
    console.log (contador);
}
*/

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas [contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;//tamplate string
    tecla.onclick=function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(event) {

        if (event.code === 'Space' || event.code === 'Enter' ) {
            tecla.classList.add('ativa');
        }
       
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

}
