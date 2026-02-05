function transcribir(adn) {
  let arn = "";

  for (let i = 0; i < adn.length; i++) {
    if (adn[i] === "G") arn += "C";
    else if (adn[i] === "C") arn += "G";
    else if (adn[i] === "T") arn += "A";
    else if (adn[i] === "A") arn += "U";
  }

  return arn;
}

console.log("Ejercicio 15:");
console.log(transcribir("ACGT"));
console.log(transcribir("ACGTGGTCTTAA"));
