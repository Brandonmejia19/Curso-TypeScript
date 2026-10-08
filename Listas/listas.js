"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let nombres = ["Juan", "María", "Pedro", "Ana"];
console.log("Nombres: " + nombres.join(", "));
let mixto = ["Hola", 42, true, { nombre: "Carlos" }];
console.log("Mixto: " + mixto.join(", "));
let gatos = [
    { nombre: "Michi", edad: 2, color: "Gris", raza: "Siames", naranja: false },
    { nombre: "Pelusa", edad: 3, color: "Blanco", raza: "Persa", naranja: true },
    { nombre: "Luna", edad: 1, color: "Negro", raza: "Bombay", naranja: false },
];
gatos.push({
    nombre: "Mittens",
    edad: 2,
    color: "Naranja",
    raza: "Maine Coon",
    naranja: true,
});
console.log("Gatos: " +
    gatos
        .map((gato) => gato.nombre +
        " - " +
        gato.edad +
        " años - " +
        gato.color +
        " - " +
        gato.raza +
        " - " +
        (gato.naranja ? "Sí" : "No"))
        .join(", "));
let GatoTupla = [];
GatoTupla.push(["Noa", "Bombay", false]);
GatoTupla.push(["Naranjo", "Grisencio", false]);
GatoTupla.push(["Daru", "Siames", true]);
GatoTupla.forEach((gato) => {
    console.log(`${gato[0]} - ${gato[1]} - ${gato[2] ? "Sí" : "No"}`);
});
var DiaDeLaSemana;
(function (DiaDeLaSemana) {
    DiaDeLaSemana[DiaDeLaSemana["Lunes"] = 0] = "Lunes";
    DiaDeLaSemana[DiaDeLaSemana["Martes"] = 1] = "Martes";
    DiaDeLaSemana[DiaDeLaSemana["Miercoles"] = 2] = "Miercoles";
    DiaDeLaSemana[DiaDeLaSemana["Jueves"] = 3] = "Jueves";
    DiaDeLaSemana[DiaDeLaSemana["Viernes"] = 4] = "Viernes";
    DiaDeLaSemana[DiaDeLaSemana["Sabado"] = 5] = "Sabado";
    DiaDeLaSemana[DiaDeLaSemana["Domingo"] = 6] = "Domingo";
})(DiaDeLaSemana || (DiaDeLaSemana = {}));
let dia = DiaDeLaSemana.Jueves;
console.log("Dia: " + dia);
//# sourceMappingURL=listas.js.map