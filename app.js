//Para iniciar declarei a lista de participantes vazia
let listaParticipantes = [];

//função para adicionar os participantes do sorteio, com configuração para inicialmente pedir o nome de quem está cadastrando os colegas, e depois os nomes restantes
function adicionarParticipante() {
    let nome = document.querySelector('input').value;
    
//alerta caso o input esteja vazio
    if (nome === "") {
        alert('Por favor, insira um nome.');
        return;
    }
    
//condição para evitar nomes repetidos
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

//função para integrar a lista de inputs do JS na página HTML, permitindo que o usuário acompanhe a lista sendo criada
function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let participante of listaParticipantes) {
        lista.innerHTML += '<li>' + participante + '</li>';
    }
}

//função para realizar o sorteio
function sortear() {
    let sorteado = document.getElementById('resultado');
    sorteado.innerHTML = "";
    
//alerta caso a lista esteja vazia
    if (listaParticipantes.length === 0) {
        alert('Por favor, insira ao menos um nome.');
        return;
    }

//declarando indíce aleatório para ser sorteado o nome na lista, com indicação de que caso o índice seja 0 (nome do sorteador) o sorteio ocorra novamente
    let meuNome = listaParticipantes[0];
    let indiceSorteio;
    do {indiceSorteio = parseInt(Math.random() * listaParticipantes.length + 1)} while (listaParticipantes[indiceSorteio] === meuNome); 

//declaração do nome sorteado, integração com HTML para aparecer na tela a mensagem do resultado
    let nomeSorteado = listaParticipantes[indiceSorteio];
    sorteado.innerHTML = `Seu amigo(a) secreto(a) é: ${nomeSorteado}`;
}
