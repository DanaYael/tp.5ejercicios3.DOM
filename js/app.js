function agregarTarea() {
  const tareaInput = document.getElementById("tareaInput");
  const tareaText = tareaInput.value;

  if (tareaText !== "") {
    const li = document.createElement("li");
    li.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );

    li.innerHTML = `
      ${tareaText}
      <button class="btn btn-danger btn-sm" onclick="eliminarTarea(this)">Eliminar</button>
    `;

    document.getElementById("listaTareas").appendChild(li);
    tareaInput.value = ""; // Limpiar el campo de entrada
  }
}

// Función para eliminar tarea
function eliminarTarea(boton) {
  const tarea = boton.parentElement;
  tarea.remove();
}

// Evento para el botón "Agregar Tarea"
document.getElementById("agregarBtn").addEventListener("click", agregarTarea);

// Evento para permitir agregar tarea con la tecla Enter
document
  .getElementById("tareaInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      agregarTarea();
    }
  });
