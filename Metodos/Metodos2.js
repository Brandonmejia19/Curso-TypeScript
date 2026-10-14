function despedir(nombre, despedida = "Despedir", otro) {
    return `${despedida}, ${nombre}, ${otro}`;
}
console.log(despedir("Juan")); // Output: Despedir, Juan, Sin nada
console.log(despedir("Juan", "Hasta luego")); // Output: Hasta luego, Juan, Sin nada
console.log(despedir("Juan", "Hasta luego", "Hasta mañana")); // Output: Hasta luego, Juan, Hasta mañana    
export {};
//# sourceMappingURL=Metodos2.js.map