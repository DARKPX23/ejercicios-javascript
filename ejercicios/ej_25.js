function terminanConS(arreglo) {
  let nuevo = [];

  for (let i = 0; i < arreglo.length; i++) {
    let palabra = arreglo[i].toLowerCase();
    if (palabra[palabra.length - 1] === "s") {
      nuevo.push(arreglo[i]);
    }
  }

  return nuevo;
}

console.log("Ejercicio 25:");
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"]));
console.log(terminanConS(["beta", "delta", "gama"]));
console.log(terminanConS([]));
