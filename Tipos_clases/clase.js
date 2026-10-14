export class Persona {
    nombre;
    edad;
    esDesarrollador;
    constructor(nombre, edad, esDesarrollador) {
        this.nombre = nombre;
        this.edad = edad;
        this.esDesarrollador = esDesarrollador;
    }
    saludar() {
        return `Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y ${this.esDesarrollador ? "soy desarrollador" : "no soy desarrollador"}.`;
    }
}
//# sourceMappingURL=clase.js.map