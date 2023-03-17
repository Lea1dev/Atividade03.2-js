const botao = document.getElementById("botao")
const botoes = document.getElementsByClassName("decrescer-controle-ajuste");
// const decrescerBotao = document.getElementsByClassName("decrescer-controle-ajuste");
// const acrescerBotao = document.getElementsByClassName("decrescer-controle-ajuste");

botoes[0].addEventListener("click", () =>{
    document.getElementById("entrada").value = 1
})

