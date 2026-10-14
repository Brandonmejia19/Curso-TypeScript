interface Persona {
    nombre: string;
    edad: number;
    ciudad?: string; // Propiedad opcional
    esDesarrollador: boolean; // Propiedad opcional
}
let persona1: Persona = {
    nombre: "Juan",
    edad: 30,
    esDesarrollador: true
};
let persona2: Persona = {
    nombre: "María",
    edad: 25,   
    ciudad: "Madrid",
    esDesarrollador: false
};

console.log(persona1);
console.log(persona2);