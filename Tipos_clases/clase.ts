export class Persona {
  public nombre: string; //public: accesible desde cualquier lugar
  protected edad: number; //protected: accesible desde la clase y sus subclases
  private esDesarrollador: boolean; //private: accesible solo desde la clase

  constructor(nombre: string, edad: number, esDesarrollador: boolean) {
    this.nombre = nombre;
    this.edad = edad;
    this.esDesarrollador = esDesarrollador;
  }

  public saludar(): string {
    return `Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y ${this.esDesarrollador ? "soy desarrollador" : "no soy desarrollador"}.`;
  }
  protected obtenerEdad(): number {
    return this.edad;
  }
  private esDev(): boolean {
    return this.esDesarrollador;
  }
}
