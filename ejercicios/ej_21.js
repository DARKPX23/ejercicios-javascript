function pares(arreglo) {
  let nuevo = [];

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 === 0) {
      nuevo.push(arreglo[i]);
    }
  }

  return nuevo;
}

console.log("Ejercicio 21:");
console.log(pares([1, 2, 3, 4, 5, 6]));
console.log(pares([]));
