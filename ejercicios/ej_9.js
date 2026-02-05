function numeroDeAes(str) {
  let contador = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") contador++;
  }

  return contador;
}

console.log("Ejercicio 9:");
console.log(numeroDeAes("abracadabra"));
console.log(numeroDeAes("etinol"));
console.log(numeroDeAes(""));
