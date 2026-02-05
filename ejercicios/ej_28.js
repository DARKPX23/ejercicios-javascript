function palabrasANumeros(arreglo) {
  let diccionario = {
    "cero": 0,
    "uno": 1,
    "dos": 2,
    "tres": 3,
    "cuatro": 4,
    "cinco": 5,
    "seis": 6,
    "siete": 7,
    "ocho": 8,
    "nueve": 9
  };

  let nuevo = [];

  for (let i = 0; i < arreglo.length; i++) {
    let palabra = arreglo[i].toLowerCase();

    if (diccionario.hasOwnProperty(palabra)) {
      nuevo.push(diccionario[palabra]);
    } else {
      nuevo.push(-1);
    }
  }

  return nuevo;
}

console.log("Ejercicio 28:");
console.log(palabrasANumeros(["cero", "uno", "dos", "tres", "what?", "cuatro"]));
console.log(palabrasANumeros(["cinco", "seis", "siete", "ocho", "nueve"]));
