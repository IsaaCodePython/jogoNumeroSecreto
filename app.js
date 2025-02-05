let listaDeNumerosSorteados = [];
let numerolimite = (50);
function gerarNumeroAleatorio() {
let numeroEscolhido=parseInt(Math.random() * numerolimite + 1);
let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length
if (quantidadeDeElementosNaLista == numerolimite){
    listaDeNumerosSorteados=[];
}
if (listaDeNumerosSorteados.includes (numeroEscolhido)){
    return (gerarNumeroAleatorio);
}else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log (listaDeNumerosSorteados)
    return (numeroEscolhido)
}
}

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
    responsiveVoice.speak (texto, 'Spanish Female', {rate:1.1});
}

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; 
        exibirTextoNaTela('p', mensagemTentativas);
    } else {  
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++; 
    }
    limparCampo();
    document.getElementById('reiniciar').removeAttribute('disabled');
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

document.getElementById('reiniciar').onclick = reiniciarJogo;
document.getElementById('reiniciar').setAttribute('disabled', true); 
