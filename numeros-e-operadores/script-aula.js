// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20;

console.log(total);

// Crie duas expressões que retornem NaN

// Somar a string '200' com o número 50 e retornar 250

// Incremente o número 5 e retorne o seu valor incrementado

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

var idade = 2.5;
console.log(idade);

var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

//Lembrando que soma + em Strings serve para concatenar

var soma = '100' + 50; // 10050
var subtracao = '100' - 50; // 50
var multiplicacao = '100' * '2'; // 200
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)

var testeNaN = 'Isso é 100' / 2;
console.log(isNaN(testeNaN));

// NaN = Not a Number

// É possível verificar se uma variável é NaN ou não com a função isNaN()

//A ORDEM IMPORTA

//Começa por multiplicação e divisão, depois por soma e subtração.

var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = (20 / 2) * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

//Parênteses para priorizar uma expressão

console.log(total1);
console.log(total2);

//Operadores Aritméticos Unários

var x = 5;
console.log(x++); // vai somando mais um, resultado no proximo. R=5
console.log(x); // R=6
console.log(x++); // R=6
console.log(x); // R=7

console.log(++x); // já retorna a soma
console.log(x); // R=6
console.log(++x); // R=6
console.log(x); // R=7

var frase1 = 'isso é um teste';
console.log(typeof frase1);
