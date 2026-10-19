type PersonaType = {
  nombre: string;
  edad: number;
  direccion: string;
};

type Parcial<T> = {
  [K in keyof T]?: T[K];
};

type PersonaParcial = Parcial<PersonaType>;
type Variantes = "pequeño" | "mediano" | "grande";
type ClasessCSS = 'boton-${Variantes}';