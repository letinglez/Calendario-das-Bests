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

    console.log("mostrarMes foi chamada");

    const titulo = document.getElementById("mesAtual");

    console.log(titulo);

    titulo.textContent = `${nomesMeses[mesAtual]} ${anoAtual}`;

}

function proximoMes() {

    mesAtual++;

    if (mesAtual > 11) {

        mesAtual = 0;
        anoAtual++;

    }

    mostrarMes();

}

function mesAnterior() {

    mesAtual--;

    if (mesAtual < 0) {

        mesAtual = 11;
        anoAtual--;

    }

    mostrarMes();

}

const btnAnterior = document.getElementById("btnAnterior");
const btnProximo = document.getElementById("btnProximo");

btnAnterior.addEventListener("click", mesAnterior);

btnProximo.addEventListener("click", proximoMes);

function gerarCalendario() {

    const calendario = document.getElementById("calendario");

    calendario.innerHTML = "";

}


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

function proximoMes() {
    ...
}

function mesAnterior() {
    ...
}

function gerarCalendario() {

    const calendario = document.getElementById("calendario");

    calendario.innerHTML = "";

    const totalDias = new Date(anoAtual, mesAtual + 1, 0).getDate();

    const primeiroDia = new Date(anoAtual, mesAtual, 1).getDay();

    console.log("Dias do mês:", totalDias);
    console.log("Primeiro dia:", primeiroDia);

}

function mostrarMes() {

    const titulo = document.getElementById("mesAtual");

    titulo.textContent = `${nomesMeses[mesAtual]} ${anoAtual}`;

    gerarCalendario();

}
