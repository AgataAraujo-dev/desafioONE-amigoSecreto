//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaParticipantes = [];

function adicionarParticipante() {
    let nome = document.querySelector('input').value;

    if (nome === "") {
        alert('Por favor, insira um nome.');
        return;
    } else {
        listaParticipantes.push(nome);
        document.querySelector('input').value = "";
        atualizarLista();
    } 
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let participante of listaParticipantes) {
        lista.innerHTML += '<li>' + participante + '</li>';
    }
}

function sortear() {
    let sorteado = document.getElementById('resultado');
    sorteado.innerHTML = "";

    if (listaParticipantes.length === 0) {
        alert('Por favor, insira ao menos um nome.');
        return;
    }

    let indiceSorteio = parseInt(Math.random() * listaParticipantes.length + 1);
    let nomeSorteado = listaParticipantes[indiceSorteio]

    sorteado.innerHTML = `Seu amigo(a) secreto(a) é: ${nomeSorteado}`;
}