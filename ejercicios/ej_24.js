function empiezanConA(arreglo) {
  let nuevo = [];

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i][0].toLowerCase() === "a") {
      nuevo.push(arreglo[i]);
    }
  }

  return nuevo;
}

console.log("Ejercicio 24:");
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"]));
console.log(empiezanConA(["beta", "delta", "gama"]));
console.log(empiezanConA([]));
