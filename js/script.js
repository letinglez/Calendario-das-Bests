console.log("Calendário iniciado!");

const telaInicial = document.getElementById("telaInicial");
const aplicacao = document.getElementById("aplicacao");
const saudacao = document.getElementById("saudacao");

const botoes = document.querySelectorAll(".amiga");

function entrar(nome){

    saudacao.textContent = `Olá, ${nome}!`;

    telaInicial.classList.add("oculto");

    aplicacao.classList.remove("oculto");

}

botoes.forEach(botao=>{

    botao.addEventListener("click",()=>{

        entrar(botao.dataset.nome);

    });

});
