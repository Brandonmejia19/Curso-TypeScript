function PersonaDec(target: Function) {
  console.log(target);

  target.prototype.despedir = function (this: Persona2, despedida: string) {
    return `${despedida}, ${this.nombre}`;
  };
}

@PersonaDec
class Persona2 {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar(saludo: string): string {
    return `${saludo}, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
  }
}

let usuario = new Persona2("Persona", 40);
console.log(usuario.saludar("Hola"))