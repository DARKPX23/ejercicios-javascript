function min(arreglo) {
  let menor = arreglo[0];

  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] < menor) {
      menor = arreglo[i];
    }
  }

  return menor;
}

console.log("Ejercicio 19:");
console.log(min([3, 9, 6]));
console.log(min([67, 35, 54, 26]));
console.log(min([5, 9, 2, 4, 5, 7]));
