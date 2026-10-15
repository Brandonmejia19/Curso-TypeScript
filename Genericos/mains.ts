function identity<T>(arg: T): T {
  return arg;
}
// T es para definir variables de cualquier tipo

let output1 = identity<string>("Hola Mundo");
let output2 = identity<number>(100);
console.log(output1);
console.log(output2);