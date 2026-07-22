const hoje = new Date();

let mesAtual = hoje.getMonth();
let anoAtual = hoje.getFullYear();

const nomesMeses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];

function mostrarMes() {

    const titulo = document.getElementById("mesAtual");

    titulo.textContent = `${nomesMeses[mesAtual]} ${anoAtual}`;

}
