function obtenerMayorSalarioAnual(salario) {
  let mayorSalario = salario[0];
  for (let i = 0; i < salario.length; i++) {
    if (mayorSalario < salario[i]) {
      mayorSalario = salario[i];
    }
  }
  return mayorSalario;
}

function obtenerMenorSalarioAnual(salario) {
  let menorSalario = salario[0];
  for (let i = 0; i < salario.length; i++) {
    if (menorSalario > salario[i]) {
      menorSalario = salario[i];
    }
  }
  return menorSalario;
}

function obtenerSalarioAnualpromedio(salario) {
  let sumaSalarios = 0;
  for (let i = 0; i < salario.length; i++) {
    sumaSalarios += salario[i];
  }
  const promedioSalarioAnual = (sumaSalarios / salario.length).toFixed(2);
  return promedioSalarioAnual;
}

function obtenerSalarioMensualPromedio(salario) {
  const salarioAnualPromedio = obtenerSalarioAnualpromedio(salario);
  const salarioMensualPromedio = (salarioAnualPromedio / 12).toFixed(2);
  return salarioMensualPromedio;
}
