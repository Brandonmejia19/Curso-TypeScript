export class Persona {
    nombre; //public: accesible desde cualquier lugar
    edad; //protected: accesible desde la clase y sus subclases
    esDesarrollador; //private: accesible solo desde la clase
    constructor(nombre, edad, esDesarrollador) {
        this.nombre = nombre;
        this.edad = edad;
        this.esDesarrollador = esDesarrollador;
    }
    saludar() {
        return `Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y ${this.esDesarrollador ? "soy desarrollador" : "no soy desarrollador"}.`;
    }
    obtenerEdad() {
        return this.edad;
    }
    esDev() {
        return this.esDesarrollador;
    }
}
//# sourceMappingURL=clase.js.map