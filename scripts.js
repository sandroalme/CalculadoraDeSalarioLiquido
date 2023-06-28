const limpar = document.querySelector('.btn_limpar');
const calcular = document.querySelector('.btn_calcular');



function limparInputs() {
  document.querySelector('.salario_bruto').value = "";
  document.querySelector('.descontos').value = "";
  document.querySelector('.dependentes').value = ""
}

calcular.addEventListener('click', (e) => {
    e.preventDefault();
    calcularSalario();
});

limpar.addEventListener('click', (e) => {
    e.preventDefault();
    limparInputs();
});