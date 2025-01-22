//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaParticipantes = [];

function adicionarParticipante() {
    let nome = document.querySelector('input').value;

    if (nome === "") {
        alert('Por favor, insira um nome.');
        return;
    }

    if (listaParticipantes.includes(nome)) {
        alert('O nome já está na lista.');
        return;
    } else {
        listaParticipantes.push(nome);
        document.querySelector('input').value = "";
        atualizarLista();

        if (listaParticipantes.length >= 1) {
            let titulo = document.querySelector('h2');
            titulo.innerHTML = 'Agora o nome dos seus amigos';
        }
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

    let meuNome = listaParticipantes[0];
    let indiceSorteio;
    do {indiceSorteio = parseInt(Math.random() * listaParticipantes.length + 1)} while (listaParticipantes[indiceSorteio] === meuNome); 

    let nomeSorteado = listaParticipantes[indiceSorteio];
    sorteado.innerHTML = `Seu amigo(a) secreto(a) é: ${nomeSorteado}`;
}