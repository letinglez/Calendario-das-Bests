const listaAmigas = document.querySelector(".listaAmigas");
const telaInicial = document.getElementById("telaInicial");
const aplicacao = document.getElementById("aplicacao");
const saudacao = document.getElementById("saudacao");

const btnTrocarPessoa = document.getElementById("btnTrocarPessoa");

function voltarTelaInicial() {

    aplicacao.classList.add("oculto");

    telaInicial.classList.remove("oculto");

    saudacao.textContent = "";

    pessoaAtual = null;

}

btnTrocarPessoa.addEventListener("click", voltarTelaInicial);

function entrar(pessoa){

    pessoaAtual = pessoa;
    
let pessoaAtual = null;

function entrar(pessoa){

    pessoaAtual = pessoa;

    saudacao.textContent = `Olá, ${pessoa.nome}! ${pessoa.coracao}`;

    telaInicial.classList.add("oculto");

    aplicacao.classList.remove("oculto");

    mostrarMes();

}

function carregarAmigas(){

    pessoas.forEach(pessoa=>{

        const botao=document.createElement("button");

        botao.className="amiga";

        botao.innerHTML=`${pessoa.coracao} ${pessoa.nome}`;

        botao.addEventListener("click",()=>{

            entrar(pessoa);

        });

        listaAmigas.appendChild(botao);

    });

}

    if (!agenda[chave].includes(pessoaAtual.coracao)) {
    agenda[chave].push(pessoaAtual.coracao);
}

carregarAmigas();
