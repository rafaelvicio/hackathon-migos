function somar(numeroA, numeroB) {
  return numeroA + numeroB;
}

function subtrair(numeroA, numeroB) {
  return numeroA - numeroB;
}

function multiplicar(numeroA, numeroB) {
  return numeroA * numeroB;
}

function dividir(numeroA, numeroB) {
  // Pode colocar o console.log dentro da função e dar return em nada
  console.log(numeroA / numeroB);
  return;
}

function nada(numeroA, numeroB) {
  console.log("NumeroA: ", numeroA);
  return;
  // Tudo depois do return vai ser ignorado
  console.log("Numero B: ", numeroB);
}

console.log(somar(1, 2));
console.log(subtrair(2, 1));
console.log(multiplicar(1, 2));
dividir(4, 2);
nada(1, 2);
