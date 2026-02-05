function bmi(peso, altura) {
  let imc = peso / (altura * altura);

  if (imc < 18.5) return "Bajo de peso";
  if (imc >= 18.5 && imc <= 24.9) return "Normal";
  if (imc >= 25 && imc <= 29.9) return "Sobrepeso";
  return "Obeso";
}

console.log("Ejercicio 3:");
console.log(bmi(65, 1.8));
console.log(bmi(72, 1.6));
console.log(bmi(52, 1.75));
console.log(bmi(135, 1.7));
