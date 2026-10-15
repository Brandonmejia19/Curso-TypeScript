let nombre: string = "Juan";
console.log(nombre.length); //tamaño de cadena

function obtenerLongitud<T extends { length: number }>(arg: T): number {
    let longitud : number = arg.length;
    let tipo: string = typeof arg;
    console.log(`El tipo de dato es: ${tipo} y su longitud es: ${longitud}`);
  return arg.length;
}
console.log(obtenerLongitud("Hola Mundo")); //cadena
console.log(obtenerLongitud([1, 2, 3, 4, 5]));
