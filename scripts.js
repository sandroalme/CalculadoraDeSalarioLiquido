const limpar = document.querySelector('.btn_limpar');
const calcular = document.querySelector('.btn_calcular');

function calcularSalarioLiquido() {
  let salarioBruto = parseFloat(document.getElementById("salario-bruto").value);
  let demaisDescontos = parseFloat(document.getElementById("demais-descontos").value);
  let numeroDependentes = parseInt(document.getElementById("numero-dependentes").value);

  let inssAliquota;
  let inssValor;
  let irrfAliquota;
  let irrfValor;
  let salarioLiquido;
  let salarioBase;


  // Cálculo do INSS
  if (salarioBruto <= 1320) {
    inssAliquota = 7.5;
  } else if (salarioBruto <= 2571.29) {
    inssAliquota = 9;
  } else if (salarioBruto <= 3856.94) {
    inssAliquota = 12;
  } else if (salarioBruto <= 7507.49) {
    inssAliquota = 14;
  } else {
    inssAliquota = 14;
  }

  inssValor = salarioBruto * (inssAliquota / 100);

  // Cálculo do IRRF bb
  salarioBase = salarioBruto - inssValor;

  console.log(salarioBase);

  if (salarioBase <= 1903.98) {
    irrfAliquota = 0;
  } else if (salarioBase <= 2826.65) {
    irrfAliquota = 7.5;
  } else if (salarioBase <= 3751.05) {
    irrfAliquota = 15;
  } else if (salarioBase <= 4664.68) {
    irrfAliquota = 22.5;
  } else {
    irrfAliquota = 27.5;
  }

  irrfValor = (salarioBase * irrfAliquota / 100) - (numeroDependentes * 189.59);

  salarioLiquido = salarioBruto - inssValor - irrfValor - demaisDescontos;

  document.getElementById("bruto").innerText = "R$ " + salarioBruto.toFixed(2);
  document.getElementById("aliquota-inss").innerText = inssAliquota + "%";
  document.getElementById("valor-inss").innerText = "R$ " + inssValor.toFixed(2);
  document.getElementById("aliquota-irrf").innerText = irrfAliquota + "%";
  document.getElementById("valor-irrf").innerText = "R$ " + irrfValor.toFixed(2);
  document.getElementById("total").innerText = "R$ " + salarioBruto.toFixed(2);
  document.getElementById("valor-salario-liquido").innerText = "R$ " + salarioLiquido.toFixed(2);

  if (inssValor >= 876.95) {
    document.getElementById("aliquota-inss").innerText = "TETO";
    document.getElementById("valor-inss").innerText = "R$ 876.95";
  }

  limparInputs();
}

function limparInputs() {
  document.querySelector('.salario_bruto').value = "";
  document.querySelector('.descontos').value = "";
  document.querySelector('.dependentes').value = ""
}

calcular.addEventListener('click', (e) => {
    e.preventDefault();
    calcularSalarioLiquido();
});

limpar.addEventListener('click', (e) => {
    e.preventDefault();
    limparInputs();
});