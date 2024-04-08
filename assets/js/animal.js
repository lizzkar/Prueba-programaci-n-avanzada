export class Animal {
    constructor(nombre, edad, comentarios) {
        this.nombre = nombre;
        this.edad = edad;
        this.comentarios = comentarios;
    }

    obtenerImagen() {
        return `./assets/img/${this.nombre.toLowerCase()}.png`;
    }

    obtenerSonido() {
        return `./assets/sounds/${this.nombre.toLowerCase()}.mp3`;
    }
}

export class Leon extends Animal {
    constructor(nombre, edad, comentarios) {
        super(nombre, edad, comentarios);
    }
}

export class Lobo extends Animal {
    constructor(nombre, edad, comentarios) {
        super(nombre, edad, comentarios);
    }
}

export class Serpiente extends Animal {
    constructor(nombre, edad, comentarios) {
        super(nombre, edad, comentarios);
    }
}

export class Aguila extends Animal {
    constructor(nombre, edad, comentarios) {
        super(nombre, edad, comentarios);
    }
}

export class Oso extends Animal {
    constructor(nombre, edad, comentarios) {
        super(nombre, edad, comentarios);
    }
}

