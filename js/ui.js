const listaAmigas = document.querySelector(".listaAmigas");
const telaInicial = document.getElementById("telaInicial");
const aplicacao = document.getElementById("aplicacao");
const saudacao = document.getElementById("saudacao");
const btnTrocarPessoa = document.getElementById("btnTrocarPessoa");

let pessoaAtual = null;

function entrar(pessoa) {

    pessoaAtual = pessoa;

    saudacao.textContent = `Olá, ${pessoa.nome}! ${pessoa.coracao}`;

    telaInicial.classList.add("oculto");
    aplicacao.classList.remove("oculto");

    mostrarMes();

}

function voltarTelaInicial() {

    pessoaAtual = null;

    saudacao.textContent = "";

    aplicacao.classList.add("oculto");
    telaInicial.classList.remove("oculto");

}

btnTrocarPessoa.addEventListener("click", voltarTelaInicial);

function carregarAmigas() {

    listaAmigas.innerHTML = "";

    pessoas.forEach(pessoa => {

        const botao = document.createElement("button");

        botao.className = "amiga";

        botao.textContent = `${pessoa.coracao} ${pessoa.nome}`;

        botao.addEventListener("click", () => entrar(pessoa));

        listaAmigas.appendChild(botao);

    });

}
