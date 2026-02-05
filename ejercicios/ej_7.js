function contarRango(inicio, fin) {
  let contador = 0;

  for (let i = inicio + 1; i < fin; i++) {
    contador++;
  }

  return contador;
}

console.log("Ejercicio 7:");
console.log(contarRango(1, 9));
console.log(contarRango(1332, 8743));
console.log(contarRango(5, 6));
