function posiciones(arreglo) {
  let nuevo = [];

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 === 0) {
      nuevo.push(i);
    }
  }

  return nuevo;
}

console.log("Ejercicio 22:");
console.log(posiciones([1, 2, 3, 4, 5, 6]));
console.log(posiciones([]));
