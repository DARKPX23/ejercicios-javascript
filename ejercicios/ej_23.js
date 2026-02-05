function duplicar(arreglo) {
  let nuevo = [];

  for (let i = 0; i < arreglo.length; i++) {
    nuevo.push(arreglo[i] * 2);
  }

  return nuevo;
}

console.log("Ejercicio 23:");
console.log(duplicar([1, 2, 3]));
console.log(duplicar([]));
