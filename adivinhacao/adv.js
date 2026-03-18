// math random = Numero aleatario de 0 a 99
// math floor = para retornar o menor número inteiro do parâmetro "x"
let numeroSecreto = Math.floor(Math.random() * 100);

console.log(numeroSecreto);

// funcao de verificar
// document representa a pagina HTML
// getElementById("numero") pega o elemento com id "numero"
// .value pega o valor digitado no input
// o que o usuário digitou vai pra variável VALOR

function verificar() {
  let valor = document.getElementById("numero").value;

 

  if (valor == numeroSecreto) {  // SE o valor digitado for igual 

    document.getElementById("resultado").innerText = "Acertou!"; // iner.text = acertou e muda a cor para verde
    document.getElementById("caixa").style.setProperty("background-color", "lightgreen");
  } else if (valor > numeroSecreto) { // SENAO SE, valor for maior que o resultado, vermelho
    document.getElementById("resultado").innerText = "Muito alto!";
    document.getElementById("caixa").style.setProperty("background-color", "red");
  } else {
    document.getElementById("resultado").innerText = "Muito baixo!"; // SENAO, valor for muito baixo, vermelho
    document.getElementById("caixa").style.setProperty("background-color", "red");
  }
}