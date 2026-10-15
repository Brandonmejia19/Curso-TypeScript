import { Persona } from "./clase.js";

export class Empleado extends Persona {
  public salario: number;

  constructor(
    nombre: string,
    edad: number,
    esDesarrollador: boolean,
    salario: number,
  ) {
    super(nombre, edad, esDesarrollador);
    this.salario = salario;
  }
  public saludarEmpleado(): string {
    return `${super.saludar()} y mi salario es ${this.salario}.`;
  }
  public obtenerInformacionEmpleado(): string {
    return `Nombre: ${this.nombre}, Edad: ${this.obtenerEdad()}, Salario: ${this.salario}.`;
  }
}
