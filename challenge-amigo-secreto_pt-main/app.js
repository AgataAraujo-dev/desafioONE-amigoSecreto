//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaParticipantes = [];

function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}

function adicionarParticipante() {
    let nome = document.querySelector('input').value;

    if (nome=[]){
        alert('Por favor, insira um nome.')
    } else {
        listaParticipantes.push(nome);
    }
}

function sortear() {
    let indiceSorteio = parseInt(Math.random() * listaParticipantes.length + 1);
    let nomeSorteado = listaParticipantes[indiceSorteio]

    prompt(`Seu amigo(a) secreto(a) é: ${nomeSorteado}`);
    limparCampo();
}

