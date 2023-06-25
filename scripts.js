let salarioBruto = document.querySelector('.salario_bruto');
let descontos = document.querySelector('.descontos');
let dependentes = document.querySelector('.dependentes');

const calcular = document.querySelector('.btn_calcular');
const limpar = document.querySelector('.btn_limpar');
const proventoBruto = document.querySelector('.tab_bruto');
const total = document.querySelector('.total');
const outros = document.querySelector('.outros');

function calcularSalario() {
    /*let inss = calculateINSS(salarioBruto);
    let irrf = calculateIRRF(salarioBruto - inss - descontos, dependentes);
    let salario = salarioBruto - irrf - descontos;

    let deducaoInss = inss.toFixed(2);
    let deducaoIrrf = irrf.toFixed(2);
    let salarioLiquido = salario.toFixed(2);

    document.querySelector('.inss').innerHTML = deducaoInss;
    document.querySelector('.irrf').innerHTML = deducaoIrrf;
    document.querySelector('.salario_liquido').innerHTML = salarioLiquido; */

    proventoBruto.textContent = salarioBruto.value;
    outros.textContent = descontos.value;
    total.textContent = salarioBruto.value;
    limparInputs();
}

/*function calculateINSS(salario) {
    var inssRates = [
      { min: 0, max: 1100, rate: 0.075 },
      { min: 1100.01, max: 2203.48, rate: 0.09 },
      { min: 2203.49, max: 3305.22, rate: 0.12 },
      { min: 3305.23, max: 6433.57, rate: 0.14 }
    ];

    let inss = 0;
    inssRates.forEach( (rate) => {
        if (salario > rate.max) {
            inss += (rate.max - rate.min) * rate.rate;
        } else if (salario > rate.min) {
            inss += (salario - rate.min) * rate.rate;
        }
    });

    return inss;
}

function calculateIRRF(salario, dependentes) {
    var irrfRates = [
      { min: 0, max: 1903.98, rate: 0 },
      { min: 1903.99, max: 2826.65, rate: 0.075 },
      { min: 2826.66, max: 3751.05, rate: 0.15 },
      { min: 3751.06, max: 4664.68, rate: 0.225 },
      { min: 4664.69, max: Infinity, rate: 0.275 }
    ];

    let irrf = 0;
  irrfRates.forEach(function(rate) {
    if (salario > rate.max) {
      irrf = (rate.max - rate.min) * rate.rate;
    } else if (salario > rate.min) {
      irrf = (salario - rate.min) * rate.rate;
    }
  });

  irrf -= dependentes * 189.59;

  if (irrf < 0) {
    irrf = 0;
  }

  return irrf;
}*/

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