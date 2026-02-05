function capitalizarPalabras(str) {
  if (str.length === 0) return "";

  let palabras = str.split(" ");
  let resultado = [];

  for (let i = 0; i < palabras.length; i++) {
    let palabra = palabras[i];
    if (palabra.length > 0) {
      resultado.push(palabra[0].toUpperCase() + palabra.slice(1));
    }
  }

  return resultado.join(" ");
}

console.log("Ejercicio 17:");
console.log(capitalizarPalabras("hola mundo"));
console.log(capitalizarPalabras("make it real"));
console.log(capitalizarPalabras(""));
