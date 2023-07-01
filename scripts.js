const limpar = document.querySelector('.btn_limpar');
const calcular = document.querySelector('.btn_calcular');
const salarioBruto = document.getElementById("salario-bruto");
const descontos = document.getElementById("demais-descontos");
const dependentes = document.getElementById("numero-dependentes");

salarioBruto.addEventListener("input", function() {this.value = this.value.replace(/[^0-9]/g, ""); });
descontos.addEventListener("input", function() {this.value = this.value.replace(/[^0-9]/g, "");});
dependentes.addEventListener("input", function() {this.value = this.value.replace(/[^0-9]/g, "");});

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

  if (salarioBruto <= 1320) {
    inssAliquota = 7.5;
  } else if (salarioBruto <= 2571.29) {
    inssAliquota = 9;
  } else if (salarioBruto <= 3856.94) {
    inssAliquota = 12;
  } else if (salarioBruto <= 6263.90) {
    inssAliquota = 14;
  } else {
    inssAliquota = 14;
  }

  inssValor = salarioBruto * (inssAliquota / 100);

  if (salarioBruto > 6263.90) {
    inssValor = 876.95;
  }

  salarioBase = salarioBruto - inssValor;

  if (numeroDependentes > 0) {
    salarioBase = salarioBase - (numeroDependentes * 189.59)
  }

  if (salarioBase <= 2112.00) {
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

  irrfValor = (salarioBase * irrfAliquota / 100);

  salarioLiquido = salarioBruto - inssValor - irrfValor;

  if (demaisDescontos > 0) {
    salarioLiquido = salarioLiquido - demaisDescontos;
  }

  if (isNaN(demaisDescontos)) {
    demaisDescontos = 0;
  }

  document.getElementById("bruto").innerText = "R$ " + salarioBruto.toFixed(2);
  document.getElementById("outros").innerText = "R$ " + demaisDescontos.toFixed(2);
  document.getElementById("aliquota-inss").innerText = inssAliquota + "%";
  document.getElementById("valor-inss").innerText = "R$ " + inssValor.toFixed(2);
  document.getElementById("aliquota-irrf").innerText = irrfAliquota + "%";
  document.getElementById("valor-irrf").innerText = "R$ " + irrfValor.toFixed(2);
  document.getElementById("total").innerText = "R$ " + salarioBruto.toFixed(2);
  document.getElementById("total-descontos").innerText = "R$ " + (demaisDescontos + inssValor + irrfValor).toFixed(2);
  document.getElementById("valor-salario-liquido").innerText = "R$ " + salarioLiquido.toFixed(2);

  if (inssValor >= 876.95) {
    document.getElementById("aliquota-inss").innerText = "TETO";
  }

  limparInputs();
  MostrarResultado();
}

function MostrarResultado() {
  const resultado = document.querySelector('.resultado');
  resultado.style.display = "flex";
  resultado.scrollIntoView({ behavior: 'smooth'})
}

function ocutarResultado() {
  const resultado = document.querySelector('.resultado');
  resultado.style.display = "none";
}

function limparInputs() {
  document.querySelector('.salario_bruto').value = "";
  document.querySelector('.descontos').value = "";
  document.querySelector('.dependentes').value = "";

  ocutarResultado();
}

calcular.addEventListener('click', (e) => {
    e.preventDefault();
    calcularSalarioLiquido();
});

limpar.addEventListener('click', (e) => {
    e.preventDefault();
    limparInputs();
});