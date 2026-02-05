function fizzBuzz(numero) {
  if (numero % 3 === 0 && numero % 5 === 0) return "fizzbuzz";
  if (numero % 3 === 0) return "fizz";
  if (numero % 5 === 0) return "buzz";
  return numero;
}

console.log("Ejercicio 6:");
console.log(fizzBuzz(6));
console.log(fizzBuzz(20));
console.log(fizzBuzz(30));
console.log(fizzBuzz(8));
