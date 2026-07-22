const listaAmigas = document.querySelector(".listaAmigas");
const telaInicial = document.getElementById("telaInicial");
const aplicacao = document.getElementById("aplicacao");
const saudacao = document.getElementById("saudacao");

function entrar(pessoa) {

    saudacao.textContent = `Olá, ${pessoa.nome}! ${pessoa.coracao}`;

    telaInicial.classList.add("oculto");

    aplicacao.classList.remove("oculto");

}

function carregarAmigas() {

    pessoas.forEach(pessoa => {

        const botao = document.createElement("button");

        botao.className = "amiga";

        botao.innerHTML = `${pessoa.coracao} ${pessoa.nome}`;

        botao.addEventListener("click", () => {

            entrar(pessoa);

        });

        listaAmigas.appendChild(botao);

    });

}
