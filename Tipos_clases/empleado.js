import { Persona } from "./clase.js";
export class Empleado extends Persona {
    salario;
    constructor(nombre, edad, esDesarrollador, salario) {
        super(nombre, edad, esDesarrollador);
        this.salario = salario;
    }
    saludarEmpleado() {
        return `${super.saludar()} y mi salario es ${this.salario}.`;
    }
    obtenerInformacionEmpleado() {
        return `Nombre: ${this.nombre}, Edad: ${this.obtenerEdad()}, Salario: ${this.salario}.`;
    }
}
//# sourceMappingURL=empleado.js.map