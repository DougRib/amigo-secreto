//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigo = [];

function adicionarAmigo() {
    let campoTexto = document.getElementById('amigo');
    let nomeAmigo = campoTexto.value;
    if (nomeAmigo === '') {
        alert('Por favor, digite um nome de amigo.');
        return;
    };

    if (amigo.includes(nomeAmigo)) {
        alert('Este amigo já está na lista.');
        campoTexto.value = '';
        return;
    };
    
    amigo.push(nomeAmigo);
    campoTexto.value = '';
    atualizarAmigos();
}

function atualizarAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    for (let i = 0; i < amigo.length; i++) {
        let nome = document.createElement('li');
        nome.textContent = amigo[i];
        listaAmigos.appendChild(nome);
    };
}

function sortearAmigo() {
    if (amigo.length === 0) {
        alert('Nenhum amigo cadastrado.');
        return;
    };
    let nomeSorteado = Math.floor(Math.random() * amigo.length);
    let amigoSorteado = amigo[nomeSorteado];
    let resultado = document.getElementById('resultado');
    resultado.textContent = `O amigo sorteado é: ${amigoSorteado}`;
}

  