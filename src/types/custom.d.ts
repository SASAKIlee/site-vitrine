// Declarações de tipos customizadas para o projeto

// Permite imports de arquivos CSS
declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}

// Permite imports de arquivos SCSS/SASS
declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.sass' {
  const content: Record<string, string>;
  export default content;
}

// Permite imports de arquivos LESS
declare module '*.less' {
  const content: Record<string, string>;
  export default content;
}
