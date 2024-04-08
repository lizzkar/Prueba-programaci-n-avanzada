import { cargarAnimales, obtenerSonidoAnimal } from './utilidades.js';
import { Serpiente, Leon, Aguila, Oso, Lobo } from './animal.js';

(function () {
    document.addEventListener('DOMContentLoaded', async () => {
        try {
            const animales = await cargarAnimales();
            mostrarAnimales(animales);
        } catch (error) {
            alert('Error al cargar los datos: ');
        }
    });

    async function mostrarAnimales(animales) {
        const selectAnimal = document.getElementById('animal');
        animales.forEach(animal => {
            const option = document.createElement('option');
            option.value = animal.nombre;
            option.textContent = animal.nombre;
            selectAnimal.appendChild(option);
        });
    }

    document.getElementById('btnRegistrar').addEventListener('click', agregarAnimal);

    async function agregarAnimal(event) {
        event.preventDefault();

        const nombreAnimal = document.getElementById('animal').value;
        const edadAnimal = document.getElementById('edad').value;
        const comentariosAnimal = document.getElementById('comentarios').value;

        if (!nombreAnimal || !edadAnimal || !comentariosAnimal) {
            if (!nombreAnimal) {
                alert('Por favor seleccione un animal.');
            }
            if (!edadAnimal) {
                alert('Por favor seleccione la edad.');
            }
            if (!comentariosAnimal) {
                alert('Por favor ingrese comentarios.');
            }
            return;
        }

        try {
            const sonidoAnimal = await obtenerSonidoAnimal(nombreAnimal);
            const imagenExtension = nombreAnimal === 'Leon' || nombreAnimal === 'Aguila' ? 'png' : 'jpg';
            const imagenAnimal = `./assets/img/${nombreAnimal.toLowerCase()}.${imagenExtension}`;
            const animal = { nombre: nombreAnimal, edad: edadAnimal, comentarios: comentariosAnimal, imagen: imagenAnimal, sonido: sonidoAnimal };
            agregarAnimalATabla(animal);
            reproducirSonido(sonidoAnimal);
            limpiarFormulario();
        } catch (error) {
            console.error('Error al obtener el sonido del animal:', error);
        }
    }

    function agregarAnimalATabla(animal) {
        const tablaAnimales = document.getElementById('Animales');
        if (tablaAnimales) {
            const divAnimal = document.createElement('div');
            divAnimal.classList.add('participante');
            const imagen = document.createElement('img');
            const imagenExtension = animal.nombre === 'Leon' || animal.nombre === 'Aguila' ? 'png' : 'jpg';
            imagen.src = `./assets/img/${animal.nombre}.${imagenExtension}`;
            imagen.alt = animal.nombre;
            divAnimal.appendChild(imagen);
            tablaAnimales.appendChild(divAnimal);
        } else {
            console.error('No se encontró la tabla de animales.');
        }
    }

    function limpiarFormulario() {
        document.getElementById('animal').selectedIndex = 0;
        document.getElementById('edad').selectedIndex = 0;
        document.getElementById('comentarios').value = '';
    }

    function reproducirSonido(sonido) {
        const audio = new Audio(sonido);
        audio.play();
    }
})();

