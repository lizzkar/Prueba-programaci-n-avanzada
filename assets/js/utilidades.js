export async function cargarAnimales() {
    try {
        const animales = await obtenerAnimales();
        return animales;
    } catch (error) {
        throw error;
    }
}

export async function obtenerAnimales() {
    try {
        const response = await fetch('./animales.json');
        if (!response.ok) {
            throw new Error('No se pudo obtener los datos de animales.json');
        }
        const data = await response.json();
        return data.animales;
    } catch (error) {
        throw error;
    }
}

export async function obtenerSonidoAnimal(nombre) {
    try {
        const animales = await obtenerAnimales();
        const animal = animales.find(a => a.name === nombre);
        if (!animal) {
            throw new Error('Animal no encontrado');
        }
        return animal.sonido;
    } catch (error) {
        throw error;
    }
}

export function reproducirSonido(sonido) {
    const audio = new Audio(sonido);
    audio.play();
}

