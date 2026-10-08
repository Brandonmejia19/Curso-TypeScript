"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let variableAny; //VARIABLE QUE CAMBIA EL TIPO
variableAny = 10; //number
variableAny = "Hola"; //string
//variableAny = true; //boolean
console.log(`Variable Any: ${variableAny}` +
    "n" +
    `Tipo de variable Any: ${typeof variableAny}`);
if (typeof variableAny === "string") {
    console.log(`La variable es de tipo string y su valor es: ${variableAny}`);
}
function throwError(message) {
    throw new Error(message);
}
let message = "Este es un mensaje de error";
function logMessage(message) {
    console.log("Log Message: " + message);
}
logMessage(message);
//# sourceMappingURL=main.js.map