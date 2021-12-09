function ocultarElemento(elemento) {
  elemento.classList.add("oculto");
}
function mostrarElemento(elemento) {
  elemento.classList.remove("oculto");
}

function deshabilitarBotonesAgregarYEliminar() {
  document.querySelector("#agregar-integrante").disabled = true;
  document.querySelector("#eliminar-integrante").disabled = true;
}

function habilitarBotonesAgregarYEliminar() {
  document.querySelector("#agregar-integrante").disabled = false;
  document.querySelector("#eliminar-integrante").disabled = false;
}

function resetear() {
  const $analisis = document.querySelector("#analisis");
  const $btnResetear = document.querySelector("#resetear");

  habilitarBotonesAgregarYEliminar();

  ocultarElemento($analisis);
  ocultarElemento($btnResetear);
}

function obtenerSalarioIntegrantes() {
  const $integrantes = document.querySelectorAll(".integrante input");
  const salarios = [];

  for (let i = 0; i < $integrantes.length; i++) {
    if (Number($integrantes[i].value != 0)) {
      salarios.push(Number($integrantes[i].value));
    }
  }
  return salarios;
}

function mostrarSalario(tipo, valor) {
  document.querySelector(`#${tipo}`).textContent = valor;
}

function crearIntegrante() {
  const div = document.createElement("div");
  div.className = "integrante";
  div.classList.add("mb-2");
  div.classList.add("mt-2");

  const label = document.createElement("label");
  label.textContent = "ingrese salario anual del integrante : ";

  const input = document.createElement("input");
  input.type = "number";
  input.classList.add("form-control");
  input.classList.add("form-control-sm");

  div.appendChild(label);
  div.appendChild(input);

  const $integrantes = document.querySelector(".integrantes");
  $integrantes.appendChild(div);
}

function eliminarIntegrante() {
  const $integrante = document.querySelector(".integrante");
  $integrante.remove();
}

document.querySelector("#agregar-integrante").onclick = function (event) {
  const $btnCalcular = document.querySelector("#calcular");
  mostrarElemento($btnCalcular);
  crearIntegrante();

  event.preventDefault();
};

document.querySelector("#eliminar-integrante").onclick = function (event) {
  const cantidadIntegrante = document.querySelectorAll(".integrante").length;
  const $btnCalcular = document.querySelector("#calcular");
  if (cantidadIntegrante > 0) {
    eliminarIntegrante();
  }
  if (cantidadIntegrante == 1) {
    ocultarElemento($btnCalcular);
  }

  event.preventDefault();
};

document.querySelector("#resetear").onclick = resetear;

document.querySelector("#calcular").onclick = function (event) {
  const salarios = obtenerSalarioIntegrantes();
  const $btnResetear = document.querySelector("#resetear");
  const $analisis = document.querySelector("#analisis");

  deshabilitarBotonesAgregarYEliminar();

  mostrarSalario("mayor", obtenerMayorSalarioAnual(salarios));
  mostrarSalario("menor", obtenerMenorSalarioAnual(salarios));
  mostrarSalario("anual", obtenerSalarioAnualpromedio(salarios));
  mostrarSalario("mensual", obtenerSalarioMensualPromedio(salarios));

  mostrarElemento($analisis);
  mostrarElemento($btnResetear);

  event.preventDefault();
};
