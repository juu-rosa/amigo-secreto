let listaDeAmigos = []; // Array para armazenar as entradas do usuário.

function adicionarAmigo() {
    let nome = document.querySelector('input').value; // Recebe e armazena a entrada do usuário pelo botão "Adicionar".

    if (!nome.trim()) { // Verifica se a entrada foi vazia
        alert('Por favor, digite um nome!'); // Exibe mensagem se a entrada for vazia.
    }
    else {
        listaDeAmigos.push(nome); // Adiciona a entrada à lista.
        console.log(listaDeAmigos);
    }
    limparCampo()
}

function limparCampo() {
    nome = document.querySelector('input');
    nome.value = ''; // Limpa o campo de entrada.
}