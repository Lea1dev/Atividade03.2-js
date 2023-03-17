const botoes = document.getElementsByClassName("decrescer-controle-ajuste");
const entradas = document.getElementsByClassName("controle-contador")

for (let i = 0; i < botoes.length; i++) {
  switch (i) {
    // case 0:
    //   botoes[i].addEventListener("click", () => {
    //     document.getElementById("entrada").value = "Valor 1";
    //   });
    //   break;
    // case 1:
    //   botoes[i].addEventListener("click", () => {
    //     document.getElementById("entrada").value = "Valor 2";
    //   });
    //   break;
    
    default:    
        botoes[i].addEventListener("click", () => {
            entradas[i].value = "Valor 1";
          });
      break;
  }
}
