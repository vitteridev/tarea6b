function ocultarBotonCalcular() {
  document.querySelector("#calcular").className = "oculto";
}
function mostrarBotonCalcular() {
  document.querySelector("#calcular").className = "";
}
function ocultarAnalisis() {
  document.querySelector("#analisis").className = "oculto";
}
function mostrarAnalisis() {
  document.querySelector("#analisis").className = "";
}
function ocultarBotonResetear() {
  document.querySelector("#resetear").className = "oculto";
}
function mostrarBotonResetear() {
  document.querySelector("#resetear").className = "";
}

function resetear() {
  ocultarAnalisis();
  ocultarBotonResetear();
}

function ignorarInputsVacios() {
  const salarios = obtenerSalarioIntegrantes();

  for (let i = 0; i < salarios.length; i++) {
    if (salarios[i] === 0) {
      salarios.splice(i, 1);
    }
  }
  return salarios;
}

function obtenerSalarioIntegrantes() {
  const $integrantes = document.querySelectorAll(".integrante input");
  const salarios = [];

  for (let i = 0; i < $integrantes.length; i++) {
    salarios.push(Number($integrantes[i].value));
  }
  return salarios;
}

function mostrarSalario(tipo, valor) {
  document.querySelector(`#${tipo}`).textContent = valor;
}

function crearIntegrante() {
  const div = document.createElement("div");
  div.className = "integrante";

  const label = document.createElement("label");
  label.textContent = "ingrese salario anual del integrante : ";

  const input = document.createElement("input");
  input.type = "number";

  div.appendChild(label);
  div.appendChild(input);

  const $integrantes = document.querySelector(".integrantes");
  $integrantes.appendChild(div);
}

function eliminarIntegrante() {
  const $integrante = document.querySelector(".integrante");
  $integrante.remove();
}

document.querySelector("#sumar-integrante").onclick = function (event) {
  mostrarBotonCalcular();
  crearIntegrante();

  event.preventDefault();
};

document.querySelector("#restar-integrante").onclick = function (event) {
  const $integrantes = document.querySelectorAll(".integrante").length;
  if ($integrantes > 0) {
    eliminarIntegrante();
  }
  if ($integrantes == 1) {
    ocultarBotonCalcular();
  }

  event.preventDefault();
};

document.querySelector("#resetear").onclick = resetear;

document.querySelector("#calcular").onclick = function (event) {
  const salarios = ignorarInputsVacios();
  mostrarSalario("mayor", obtenerMayorSalarioAnual(salarios));
  mostrarSalario("menor", obtenerMenorSalarioAnual(salarios));
  mostrarSalario("anual", obtenerSalarioAnualpromedio(salarios));
  mostrarSalario("mensual", obtenerSalarioMensualPromedio(salarios));

  mostrarAnalisis();
  mostrarBotonResetear();

  event.preventDefault();
};
