document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Captura dos valores dos campos A e B
    let valorA = parseInt(document.getElementById('campoA').value);
    let valorB = parseInt(document.getElementById('campoB').value);

    // Verificação se B é maior que A
    if (valorB > valorA) {
        exibirMensagem('Formulário válido!', 'positiva');
    } else {
        exibirMensagem('Formulário inválido! O número B deve ser maior que o número A.', 'negativa');
    }
});

function exibirMensagem(mensagem, tipo) {
    let divMensagem = document.getElementById('mensagemResultado');
    divMensagem.textContent = mensagem;
    divMensagem.className = 'mensagem ' + tipo;
}
