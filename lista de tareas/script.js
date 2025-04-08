let tareas = [];

document.getElementById('agregarBtn').addEventListener('click', function() {
    const tareaInput = document.getElementById('tareaInput');
    const tareaTexto = tareaInput.value.trim();

    if (tareaTexto === '') {
        alert('Debes agregar una tarea');
    } else {
        agregarTarea(tareaTexto);
        tareaInput.value = ''; // Limpiar el campo de entrada
        mostrarTareas();
    }
});

function agregarTarea(tarea) {
    tareas.push({ texto: tarea, completada: false });
}

function eliminarTarea(indice) {
    tareas.splice(indice, 1);
    mostrarTareas();
}

function marcarComoCompletada(indice) {
    if (tareas[indice]) {
        tareas[indice].completada = !tareas[indice].completada; // Alternar estado
        mostrarTareas();
    }
}

function mostrarTareas() {
    const tareasList = document.getElementById('tareasList');
    tareasList.innerHTML = ''; // Limpiar la lista actual

    tareas.forEach((tarea, indice) => {
        const li = document.createElement('li');
        li.textContent = tarea.texto;
        if (tarea.completada) {
            li.classList.add('completada');
        }

        // Botón para marcar como completada
        const completarBtn = document.createElement('button');
        completarBtn.innerHTML = tarea.completada ? '<i class="fas fa-undo"></i>' : '<i class="fas fa-check"></i>';
        completarBtn.addEventListener('click', () => marcarComoCompletada(indice));

        // Botón para eliminar tarea
        const eliminarBtn = document.createElement('button');
        eliminarBtn.innerHTML = '<i class="fas fa-trash"></i>';
        eliminarBtn.addEventListener('click', () => eliminarTarea(indice));

        li.appendChild(completarBtn);
        li.appendChild(eliminarBtn);
        tareasList.appendChild(li);
    });
}