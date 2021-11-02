class Animal {
    constructor(nombre, edad, tamaño, raza) {
        this.nombre = nombre;
        this.edad = edad;
        this.tamaño = tamaño;
        this.raza = raza;
    }

    get getInfo() {
        return [this.nombre, this.edad, this.tamaño, this.raza];
    }
}