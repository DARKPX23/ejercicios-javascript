function likes(numero) {
  if (numero < 1000) return numero.toString();
  if (numero < 1000000) return Math.floor(numero / 1000) + "K";
  return Math.floor(numero / 1000000) + "M";
}

console.log("Ejercicio 5:");
console.log(likes(983));
console.log(likes(1900));
console.log(likes(54000));
console.log(likes(120800));
console.log(likes(25222444));
