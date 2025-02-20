let listaDeAmigos = []; // Array para armazenar as entradas do usuário.

function adicionarAmigo() {
    let nomeAdicionado = document.querySelector('input').value; // Recebe e armazena a entrada do usuário pelo botão "Adicionar".

    if (!nomeAdicionado.trim()) { // Valida a entrada: vazia ou não.
        alert('Por favor, digite um nome!'); // Exibe mensagem se a entrada for vazia.
    }
    else {
        listaDeAmigos.push(nomeAdicionado); // Adiciona entrada ao fim do array.
    }
    limparCampo();
    exibirListaDeAmigosNaTela();
}

function exibirListaDeAmigosNaTela() {
    let lista = document.getElementById('listaAmigos'); // Seleciona o elemento 'listaAmigos' no HTML.
    lista.innerHTML = ''; // Limpa a lista antes de adicionar novos elementos.
    
    for(let i = 0; i < listaDeAmigos.length; i++) { // 'i' é o número do índice. Enquanto 'i' for menor que o comprimento do array, incrementar e iterar.
        let li = document.createElement("li"); // Cria um elemento <li>.
        li.textContent = listaDeAmigos[i]; // Define o nome do amigo correspondente a [i] como texto do item de lista.
        lista.appendChild(li); // Adiciona o <li> à <ul> 'listaAmigos'.
    }
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert('Insira nomes para o sorteio!'); // Valida se há nomes para sorteio, se não, devolve a mensagem de aviso.
    }
    else {
        let indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length); // Seleciona um índice aleatório do array.
        let nomeSorteado = listaDeAmigos[indiceSorteado]; // Acessa o item correspondente ao índice.
        let exibirAmigoSorteadoNaTela = document.getElementById('resultado'); // Seleciona o elemento HTML com o id 'resultado'.
        exibirAmigoSorteadoNaTela.innerHTML = nomeSorteado; // Atualiza o elemento 'resultado' e o nome sorteado aparece na tela.
    }
}

function limparCampo() { // Limpa o campo de entrada.
    nome = document.querySelector('input');
    nome.value = '';
}