function salvarAgenda() {
    localStorage.setItem("agendaBests", JSON.stringify(agenda));
}

function carregarAgenda() {
    const dados = localStorage.getItem("agendaBests");

    if (dados) {
        agenda = JSON.parse(dados);
    }
}
console.log(window.database);
