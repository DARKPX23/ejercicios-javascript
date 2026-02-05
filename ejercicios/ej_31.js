function distancia(str1, str2) {
  let contador = 0;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) contador++;
  }

  return contador;
}

console.log("Ejercicio 31:");
console.log(distancia("hola", "hola"));
console.log(distancia("sol", "tol"));
console.log(distancia("carro", "correr"));
