// 1. Crie uma variável chamada nome e atribua seu nome a ela. Em seguida, exiba o valor dessa variável.
let nome = "Elias Camilo Mendes";
console.log("Nome:", nome);

// 2. Crie duas variáveis: uma chamada idade e outra chamada altura. Atribua a idade o valor 25 e a altura o valor 1.75. Exiba ambos os valores.
let idade = 25;
let altura = 1.75;
console.log("Idade:", idade);
console.log("Altura:", altura);

// 3. Crie uma variável chamada preco com o valor 50 e uma variável desconto com o valor 0.2 (20%). Calcule o preço com desconto e exiba o valor final.
let preco = 50;
let desconto = 0.2;
let precoFinal = preco - (preco * desconto);
console.log("Preço final com desconto:", precoFinal);

// 4. Crie uma variável chamada temperatura e atribua o valor 30. Se a temperatura for maior que 25, exiba a mensagem "Está calor!". Caso contrário, exiba "Está fresco!".
let temperatura = 30;
if (temperatura > 25) {
  console.log("Está calor!");
} else {
  console.log("Está fresco!");
}

// 5. Crie uma variável idade e atribua um valor. Se a pessoa for maior de idade (18 ou mais), exiba "Você é maior de idade". Caso contrário, exiba "Você é menor de idade".
let idadePessoa = 20;
if (idadePessoa >= 18) {
  console.log("Você é maior de idade");
} else {
  console.log("Você é menor de idade");
}

// 6. Crie uma variável chamada nota e atribua um valor entre 0 e 10.
// Se a nota for maior ou igual a 7, exiba "Aprovado". Se for entre 5 e 6, exiba "Recuperação". Caso contrário, exiba "Reprovado".
let nota = 6; 
if (nota >= 7) {
  console.log("Aprovado");
} else if (nota >= 5 && nota <= 6) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}

// 7. Crie duas variáveis, numero1 e numero2, e atribua valores a elas.
// Verifique se os dois números são iguais e, caso sejam, exiba "Os números são iguais". Caso contrário, exiba "Os números são diferentes".
let numero1 = 10;
let numero2 = 10;
if (numero1 === numero2) {
  console.log("Os números são iguais");
} else {
  console.log("Os números são diferentes");
}

// 8. Crie uma variável chamada nome e uma variável chamada idade.
// Exiba a mensagem "Olá, meu nome é [nome] e eu tenho [idade] anos", utilizando concatenação.
let nomePessoa = "Elias";
let idadeDaPessoa = 22;
console.log("Olá, meu nome é " + nomePessoa + " e eu tenho " + idadeDaPessoa + " anos");

// 9. Crie um loop que imprima os números de 1 a 10 na tela.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 10. Crie um loop que peça ao usuário para digitar um número até que ele digite o número 5.
let numeroDigitado;
while (numeroDigitado !== 5) {
  // A função prompt exibe uma caixa para o usuário digitar um número
  numeroDigitado = parseInt(prompt("Digite um número (digite 5 para sair): "));
}
console.log("Você digitou 5, loop encerrado.");

// 11. Crie um loop que imprima a tabuada do número 7, de 1 a 10.
for (let i = 1; i <= 10; i++) {
  console.log("7 x " + i + " = " + (7 * i));
}

// 12. Crie um loop que exiba todos os números pares de 0 a 20.
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 13. Escreva um código que calcule a área de um círculo.
// Utilize uma função para realizar o cálculo. A função deve receber o raio como parâmetro e retornar a área.
function calcularAreaCirculo(raio) {
  // Fórmula da área do círculo: π * raio²
  return Math.PI * Math.pow(raio, 2);
}
let raio = 5;
console.log("Área do círculo com raio " + raio + ": " + calcularAreaCirculo(raio));

// 14. Crie um programa simples que calcule a soma de dois números e imprima o resultado.
let numeroA = 8;
let numeroB = 12;
let soma = numeroA + numeroB; // Calcula a soma dos dois números
console.log("A soma de " + numeroA + " e " + numeroB + " é: " + soma);

// 15. Refatore o código abaixo para que seja mais legível, usando boas práticas de nomenclatura e separando o código em
function somarDoisNumeros(valor1, valor2) {
  return valor1 + valor2;
}
const valor1 = 10;
const valor2 = 20;
const resultado = somarDoisNumeros(valor1, valor2);
console.log("A soma é:", resultado);
