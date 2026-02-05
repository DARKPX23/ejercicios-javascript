function numAsteriscos(arreglo) {
  let contador = 0;

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] === "*") contador++;
  }

  return contador;
}

console.log("Ejercicio 29:");
console.log(numAsteriscos(["", "*", "", "*"]));
console.log(numAsteriscos(["*", "*", "*"]));
console.log(numAsteriscos([]));
