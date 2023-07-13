function multiplicação() {
    const txt1 = document.getElementById('txtx');
    const txt2 = document.getElementById('txtx2');
    const res = document.getElementById('res');
    const n1 = Number(txt1.value);
    const n2 = Number(txt2.value);
    
    if (n2 === 0) {
      res.textContent = '0';
    } else {
      const resultado = calcularMultiplicacao(n1, n2);
      res.textContent = resultado.toString();
    }
  }

  function calcularMultiplicacao(n1, n2) {
    if (n2 === 0) {
      return 0;
    } else {
      return n1 + calcularMultiplicacao(n1, n2 - 1);
    }
  }