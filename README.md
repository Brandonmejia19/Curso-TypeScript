# Curso de TypeScript

Ejercicios y notas del [Curso de TypeScript de Platzi](https://platzi.com/cursos/typescript/). Cada carpeta contiene el código de un tema visto en el curso.

## Contenido

| Carpeta | Archivo | Tema |
| --- | --- | --- |
| [Variable_base](Variable_base/) | `main.ts` | Tipos básicos (`string`, `number`), uniones (`string \| undefined`) y template strings |
| [Variables_diferentes](Variables_diferentes/) | `main.ts` | Tipos especiales: `any`, `never`, `void` y `typeof` como type guard |
| [Listas](Listas/) | `listas.ts` | Arrays tipados, `interface`, tuplas y `enum` |
| [Metodos](Metodos/) | `metodos.ts` | Funciones con parámetros y tipo de retorno |

## Requisitos

- [Node.js](https://nodejs.org/)
- TypeScript instalado de forma global:

```bash
npm install -g typescript
```

## Cómo compilar y ejecutar

Compilar un archivo suelto (ignorando el `tsconfig.json`):

```bash
tsc --ignoreConfig .\Listas\listas.ts
node .\Listas\listas.js
```

> Las versiones recientes de TypeScript lanzan el error `TS5112` si pasas un archivo por línea de comandos y existe un `tsconfig.json`. Por eso se usa `--ignoreConfig`.

Compilar todo el proyecto con la configuración de [tsconfig.json](tsconfig.json):

```bash
tsc
```

Recompilar automáticamente al guardar:

```bash
tsc --watch
```

## Conceptos practicados

- **Tipos primitivos:** `string`, `number`, `boolean`
- **Uniones:** `string | undefined`
- **Tipos especiales:** `any`, `void`, `never`
- **Arrays:** `string[]`, `any[]` y arrays de objetos tipados
- **Interfaces:** definir la forma de un objeto (`Gatos`)
- **Tuplas:** `[string, string, boolean]`
- **Enums:** `DiaDeLaSemana`
- **Funciones:** tipado de parámetros y valor de retorno
- **Narrowing:** `typeof variable === "string"`

## Configuración del proyecto

El [tsconfig.json](tsconfig.json) usa `strict`, `noUncheckedIndexedAccess` y `exactOptionalPropertyTypes`, además de generar `sourceMap` y archivos de declaración (`.d.ts`).
