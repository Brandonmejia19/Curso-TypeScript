let nombre = "Juan";
console.log(nombre.length); //tamaño de cadena
function obtenerLongitud(arg) {
    let longitud = arg.length;
    let tipo = typeof arg;
    console.log(`El tipo de dato es: ${tipo} y su longitud es: ${longitud}`);
    return arg.length;
}
console.log(obtenerLongitud("Hola Mundo")); //cadena
console.log(obtenerLongitud([1, 2, 3, 4, 5]));
export {};
//# sourceMappingURL=main.js.map