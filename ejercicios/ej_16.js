function capitalizarPrimera(str) {
  if (str.length === 0) return "";
  return str[0].toUpperCase() + str.slice(1);
}

console.log("Ejercicio 16:");
console.log(capitalizarPrimera("pedro"));
console.log(capitalizarPrimera("hola mundo"));
console.log(capitalizarPrimera(""));
