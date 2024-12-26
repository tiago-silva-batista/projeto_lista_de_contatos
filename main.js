const form = document.getElementById('formulario-agenda');
const contatos = [];
const telefones = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizarTabela();
});

function adicionarLinha() {
    const inputNome = document.getElementById('input-nome-contato');
    const inputNumero = document.getElementById('input-numero-contato');

    if (contatos.includes(inputNome.value) || telefones.includes(inputNumero.value)) {
        alert('Nome ou telefone já cadastrado!');
    } else {
        contatos.push(inputNome.value);
        telefones.push(inputNumero.value);

        const corpoDaTabela = document.querySelector('tbody');
        const novaLinha = corpoDaTabela.insertRow();

        let cellNome = novaLinha.insertCell(0);
        let cellTelefone = novaLinha.insertCell(1);

        cellNome.textContent = inputNome.value;
        cellTelefone.textContent = inputNumero.value;

        inputNome.value = '';
        inputNumero.value = '';
    }
}

function atualizarTabela() {
}