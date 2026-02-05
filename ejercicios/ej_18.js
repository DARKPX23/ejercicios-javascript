function max(arreglo) {
  let mayor = arreglo[0];

  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > mayor) {
      mayor = arreglo[i];
    }
  }

  return mayor;
}

console.log("Ejercicio 18:");
console.log(max([3, 9, 6]));
console.log(max([67, 35, 54, 26]));
console.log(max([5, 9, 2, 4, 5, 7]));
