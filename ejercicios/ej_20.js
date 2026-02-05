function password(str) {
  let resultado = "";

  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") continue;
    if (str[i] === "a") resultado += "4";
    else if (str[i] === "e") resultado += "3";
    else if (str[i] === "i") resultado += "1";
    else if (str[i] === "o") resultado += "0";
    else resultado += str[i];
  }

  return resultado;
}

console.log("Ejercicio 20:");
console.log(password("hola"));
console.log(password("esta es una prueba"));
console.log(password(""));
