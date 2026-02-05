function numerosAPalabras(arreglo) {
  let palabras = ["cero","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve"];
  let nuevo = [];

  for (let i = 0; i < arreglo.length; i++) {
    nuevo.push(palabras[arreglo[i]]);
  }

  return nuevo;
}

console.log("Ejercicio 27:");
console.log(numerosAPalabras([0, 1, 2, 3, 4]));
console.log(numerosAPalabras([5, 6, 7, 8, 9]));
