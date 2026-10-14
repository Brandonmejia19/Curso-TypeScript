interface Direccion {
  calle: string;
  numero: number;
  ciudad?: string;
}

let direccion: Direccion = {
  calle: "Calle Falsa",
  numero: 123,
};
console.log(direccion);
