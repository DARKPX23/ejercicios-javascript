function sumarRango(inicio, fin) {
  let suma = 0;

  for (let i = inicio; i <= fin; i++) {
    suma += i;
  }

  return suma;
}

console.log("Ejercicio 8:");
console.log(sumarRango(0, 10));
console.log(sumarRango(12, 14));
console.log(sumarRango(5, 5));
