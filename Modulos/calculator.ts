export function suma(a: number, b: number): number {
  return a + b;
}
export function resta(a: number, b: number): number {
  return a - b;
}
export function multiplicacion(a: number, b: number): number {
  return a * b;
}
export function division(a: number, b: number): number {
  if (b === 0) {
    throw new Error("No se puede dividir por cero");
  }
  return a / b;
}
