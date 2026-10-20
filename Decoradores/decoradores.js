function PersonaDec(target) {
    console.log(target);
    target.prototype.despedir = function (despedida) {
        return `${despedida}, ${this.nombre}`;
    };
}
@PersonaDec
class Persona2 {
    nombre;
    edad;
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(saludo) {
        return `${saludo}, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
}
let usuario = new Persona2("Persona", 40);
console.log(usuario.saludar("Hola"));
export {};
//# sourceMappingURL=decoradores.js.map