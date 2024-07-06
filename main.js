function tocaSom(idElementoAudio){
    const elemento = document.querySelector(idElementoAudio);

    if(elemento != null && elemento.localName === 'audio'){
        elemento.play();        
    } else{
        console.log('Elemento não encontrado');
    }

}

// Irá guardar todas as variáveis do tipo 'button' que possuam uma class 'tecla'
const listaDeTeclas = document.querySelectorAll('.tecla');
console.log(listaDeTeclas);

for(let i = 0; i<listaDeTeclas.length; i++){    
    // Como são estruturas repetitiveis, iremos simplifica-las
    const tecla = listaDeTeclas[i];
    const instrumento  = tecla.classList[1];   
    
    // Usamos as variáveis acima para resumir: instrumento = listaDeTeclas[i].classList[i];

    // Template string: a parte entre chaves é variável, tem que possuir crase e o '$'
    const idAudio  = `#som_${instrumento}`;

    tecla.onclick = function (){
        tocaSom(idAudio);
    }    

    tecla.onkeydown = function (evento){
    /* Adiciona a classe 'ativa' do CSS mudando a estilização, quando uma tecla é pressionada. 
       Como não é um seletor, não precisa adicionar o '.' no começo */
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');    
    }
}