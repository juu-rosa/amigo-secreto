let listaDeAmigos = []; // Array para armazenar as entradas do usuário.

function adicionarAmigo() {
    let nomeAdicionado = document.querySelector('input').value; // Recebe e armazena a entrada do usuário pelo botão "Adicionar".

    if (!nomeAdicionado.trim()) { // Verifica se a entrada foi vazia.
        alert('Por favor, digite um nome!'); // Exibe mensagem se a entrada for vazia.
    }
    else {
        listaDeAmigos.push(nomeAdicionado); // Adiciona entrada ao fim do array.
        console.log(listaDeAmigos);
    }
    limparCampo();
    exibirListaDeAmigosNaTela();
}

function exibirListaDeAmigosNaTela() {
    let lista = document.getElementById('listaAmigos'); // Seleciona o elemento 'listaAmigos' no HTML.
    lista.innerHTML = ''; // Limpa a lista antes de adicionar novos elementos.
    
    for(let i = 0; i < listaDeAmigos.length; i++) { // 'i' é o número do índice.
        let li = document.createElement("li"); // Cria um elemento <li>.
        li.textContent = listaDeAmigos[i]; // Define o texto com o nome do amigo correspondente ao índice [i].
        lista.appendChild(li); // Adiciona o <li> à <ul> 'listaAmigos'.
    }
}

function limparCampo() { // Limpa o campo de entrada.
    nome = document.querySelector('input');
    nome.value = '';
}