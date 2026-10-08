let variableAny: any; //VARIABLE QUE CAMBIA EL TIPO
variableAny = 10; //number
variableAny = "Hola"; //string
//variableAny = true; //boolean

console.log(
  `Variable Any: ${variableAny}` +
    "n" +
    `Tipo de variable Any: ${typeof variableAny}`,
);

if (typeof variableAny === "string") {
  console.log(`La variable es de tipo string y su valor es: ${variableAny}`);
}
function throwError(message: string): never {
  throw new Error(message);
}

let message: string = "Este es un mensaje de error";

function logMessage(message: string): void {
  console.log("Log Message: " + message);
}
logMessage(message);
