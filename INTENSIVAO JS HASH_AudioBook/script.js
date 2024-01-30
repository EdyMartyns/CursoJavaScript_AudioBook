/*const constante quando nao quer mudar let quando vai mudar var é antigo, menos  capaz*/ 

const botaoPlayPause = document.getElementById ('play-pause');
const botaoAvançar = document.getElementById ('proximo');
const botaoVoltar = document.getElementById ('anterior');
const nomecapitulo = document.getElementById ('capitulo');
const audioCapitulo = document.getElementById ('audio-capitulo');

const numeroCapitulos = 10 ;
let taTocando = 0;
let capituloatual = 1;

function tocarFaixa (){
    audioCapitulo.play();
    }

function pausarFaixa(){
    audioCapitulo.pause();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
    }

function tocarOuPausar (){
if (taTocando===0) {
    tocarFaixa ();
    taTocando =1;
} else {
    pausarFaixa();
    botaoPlayPause.classList.add('bi-play-circle-fill');
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
    taTocando = 0;
}
}

function trocarfaixa (){
    nomecapitulo.innerText= 'Capitulo ' + capituloatual;
}

function proximaFaixa(){
    if (capituloatual=== numeroCapitulos){
        capituloatual=1;
    } else {
        capituloatual = capituloatual +1
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloatual + ".mp3";
    tocarFaixa();
    taTocando=1;
}

function voltarFaixa(){
    if (capituloatual=== 1){
        capituloatual=numeroCapitulos;
    } else {
        capituloatual = capituloatual -1
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloatual + ".mp3";
    tocarFaixa();
    taTocando=1;
}


botaoPlayPause.addEventListener('click', tocarFaixa);
botaoAvançar.addEventListener('click',proximaFaixa);
botaoVoltar.addEventListener('click', voltarFaixa);


