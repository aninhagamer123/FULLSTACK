// math random = Numero aleatario de 0 a 99
// math floor = para retornar o menor número inteiro do parâmetro "x"
let numeroSecreto = Math.floor(Math.random() * 100);

// funcao de verificar
// document representa a pagina HTML
// getElementById("numero") pega o elemento com id "numero"
// .value pega o valor digitado no input
// o que o usuário digitou vai pra variável VALOR

function verificar() {
  let valor = document.getElementById("numero").value;
  let resultado = document.getElementById("resultado"); // resultado que vai para sua propria variavel 
  let box = document.getElementById("box"); // caixa que vai mudar de cor

  valor = Number(valor); // valor = numero sempre, conversao

  if (valor === numeroSecreto) {  // SE o valor digitado for igual 
    resultado.innerText = "Acertou!"; // iner.text = acertou e muda a cor para verde
    box.style.setProperty("background-color", "lightgreen");
  } else if (valor > numeroSecreto) { // SENAO SE, valor for maior que o resultado, vermelho
    resultado.innerText = "Muito alto!";
    box.style.setProperty("background-color", "red");
  } else {
    resultado.innerText = "Muito baixo!"; // SENAO, valor for muito baixo, vermelho
    box.style.setProperty("background-color", "red");
  }
}