document.addEventListener('DOMContentLoaded', function() {
    const archivoCSV = document.getElementById('archivoCSV');
    const botonCrearGrupos = document.getElementById('botonCrearGrupos');
    const gruposContainer = document.getElementById('gruposContainer');
    let estudiantes = [];

    archivoCSV.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                estudiantes = procesarCSV(event.target.result);
                botonCrearGrupos.disabled = estudiantes.length === 0;
            }
            reader.readAsText(file);
        }
    });

    botonCrearGrupos.addEventListener('click', function() {
        const grupos = crearGrupos(estudiantes);
        mostrarGrupos(grupos);
    });

    function procesarCSV(csv) {
        return csv.split('\n').slice(1).map(linea => {
            const columnas = linea.trim().split('\t'); // Manejo de tabulación
            if (columnas.length >= 5) { // Verifica que haya suficientes columnas
                const nombre = columnas[2].trim(); // Nombre en la tercera columna
                const genero = columnas[4].trim().toUpperCase(); // Género en la quinta columna
                const generoTexto = genero === 'M' ? 'hombre' : genero === 'F' ? 'mujer' : null;
                return nombre && generoTexto ? { nombre, genero: generoTexto } : null;
            }
            return null;
        }).filter(e => e !== null);
    }

    function crearGrupos(estudiantes) {
        let hombres = estudiantes.filter(e => e.genero === 'hombre');
        let mujeres = estudiantes.filter(e => e.genero === 'mujer');
        let grupos = [];

        while (hombres.length >= 2 && mujeres.length >= 1) {
            grupos.push({ tipo: '2H 1M', integrantes: [hombres.shift(), hombres.shift(), mujeres.shift()] });
        }
        return grupos;
    }

    function mostrarGrupos(grupos) {
        gruposContainer.innerHTML = '';
        grupos.forEach((grupo, index) => {
            const grupoDiv = document.createElement('div');
            grupoDiv.classList.add('grupo');
            grupoDiv.innerHTML = `<h3>Grupo ${index + 1} (${grupo.tipo})</h3><ul>${grupo.integrantes.map(integrante => `<li>${integrante.nombre} (${integrante.genero})</li>`).join('')}</ul>`;
            gruposContainer.appendChild(grupoDiv);
        });
    }
});
