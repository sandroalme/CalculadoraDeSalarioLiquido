let salarioBruto = document.querySelector('.salario_bruto');
let descontos = document.querySelector('.descontos');
let dependentes = document.querySelector('.dependentes');
let aliquotaInss = 0;

const calcular = document.querySelector('.btn_calcular');
const limpar = document.querySelector('.btn_limpar');
const proventoBruto = document.querySelector('.tab_bruto');
const total = document.querySelector('.total');
const outros = document.querySelector('.outros');
const campoAlInss = document.querySelector('.al_inss');

function calcularSalario() {
  
  proventoBruto.textContent = salarioBruto.value;
  outros.textContent = descontos.value;
  total.textContent = salarioBruto.value;
  campoAlInss.textContent = calcInss();
  limparInputs();
}

function calcInss() {

  if (salarioBruto <= 1320.00) {
    return aliquotaInss = 7.5;
  } else if (salarioBruto >= 1320.01 && salarioBruto <= 2571.29) {
    return aliquotaInss = 9;
  } else if (salarioBruto >= 2571.30 && salarioBruto <= 3856.94) {
    return aliquotaInss = 12;
  } else (salarioBruto >= 3856.95) {
    return aliquotaInss = 14;
  }
}

function limparInputs() {
    salarioBruto.value = '';
    descontos.value = '';
    dependentes.value = '';
}

calcular.addEventListener('click', (e) => {
    e.preventDefault();
    calcularSalario();
});

limpar.addEventListener('click', (e) => {
    e.preventDefault();
    limparInputs();
});