const form = document.getElementById('form-contato');
const vetorNome = [];
const vetorTel = [];

var linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const contatoNome = document.getElementById('nome-contato');
    const contatoTel = document.getElementById('tel-contato');

    if (vetorNome.includes(contatoNome.value)) {
        alert(`O contato ${contatoNome.value} já está cadastrado.`);
    } else if (vetorTel.includes(contatoTel.value)) {
        alert(`O número de telefone ${contatoTel.value} já está cadastrado em outro contato.`);
    } else {
        vetorNome.push(contatoNome.value);
        vetorTel.push(contatoTel.value);

        let linha = '<tr>';
        linha += `<td>${contatoNome.value}</td>`;
        linha += `<td>${contatoTel.value}</td>`;
        linha += '</tr>';

        linhas = linhas + linha
    }

    contatoNome.value = '';
    contatoTel.value = '';

    const valorTabela = document.querySelector('tbody');
    valorTabela.innerHTML = linhas;
});