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

    gerarCalendario();

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

    const totalDias = new Date(anoAtual, mesAtual + 1, 0).getDate();

    const primeiroDia = new Date(anoAtual, mesAtual, 1).getDay();

    // Espaços antes do primeiro dia
    for (let i = 0; i < primeiroDia; i++) {

        const vazio = document.createElement("div");

        calendario.appendChild(vazio);

    }

    // Dias do mês
    for (let dia = 1; dia <= totalDias; dia++) {

        const card = document.createElement("div");

        card.className = "dia";

        card.innerHTML = `
            <div class="numeroDia">${dia}</div>
            <div class="coracoes"></div>
        `;

        if (dia === 15) {

            card.querySelector(".coracoes").textContent = "💚💜";

        }

        calendario.appendChild(card);

    }

}
