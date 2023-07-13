function exibirValor() {
  var valor = document.getElementById("num").value;
  var res = document.querySelector("div#msg");
  res.innerText = `Valor digitado: ${valor}`;
  res.style.textAlign = `center`
}

