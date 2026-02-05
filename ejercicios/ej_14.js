function sumarArregloRango(arreglo, inicio, fin) {
  let suma = 0;

  for (let i = inicio; i <= fin; i++) {
    suma += arreglo[i];
  }

  return suma;
}

console.log("Ejercicio 14:");
console.log(sumarArregloRango([1, 2, 3], 1, 2));
console.log(sumarArregloRango([1,2,3,4,5,6,7,8,9,10], 3, 6));
console.log(sumarArregloRango([7, 8, 9], 0, 0));
