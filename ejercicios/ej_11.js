function sumarArregloSimple(arreglo) {
  let suma = 0;

  for (let i = 0; i < arreglo.length; i++) {
    suma += arreglo[i];
  }

  return suma;
}

console.log("Ejercicio 11:");
console.log(sumarArregloSimple([3, 1, 2]));
console.log(sumarArregloSimple([1,2,3,4,5,6,7,8,9,10]));
console.log(sumarArregloSimple([]));
