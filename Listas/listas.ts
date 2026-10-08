let nombres: string[] = ["Juan", "María", "Pedro", "Ana"];
console.log("Nombres: " + nombres.join(", "));

let mixto: any[] = ["Hola", 42, true, { nombre: "Carlos" }];
console.log("Mixto: " + mixto.join(", "));

interface Gatos {
  nombre: string;
  edad: number;
  color: string;
  raza: string;
  naranja: boolean;
}
let gatos: Gatos[] = [
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

console.log(
  "Gatos: " +
    gatos
      .map(
        (gato) =>
          gato.nombre +
          " - " +
          gato.edad +
          " años - " +
          gato.color +
          " - " +
          gato.raza +
          " - " +
          (gato.naranja ? "Sí" : "No"),
      )
      .join(", "),
);

let GatoTupla: [string, string, boolean][] = [];
GatoTupla.push(["Noa", "Bombay", false]);
GatoTupla.push(["Naranjo", "Grisencio", false]);
GatoTupla.push(["Daru", "Siames", true]);

GatoTupla.forEach((gato) => {
  console.log(`${gato[0]} - ${gato[1]} - ${gato[2] ? "Sí" : "No"}`);
});

enum DiaDeLaSemana {
  Lunes,
  Martes,
  Miercoles,
  Jueves, //3
  Viernes,
  Sabado,
  Domingo,
}

let dia: DiaDeLaSemana = DiaDeLaSemana.Jueves;
console.log("Dia: " + dia);
