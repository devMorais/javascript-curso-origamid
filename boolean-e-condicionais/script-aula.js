// Bollean - Existem dois vslores booleanos false ou true

var possuiGraduacao = true;
var possuiDoutorado = false;

// Condicionais if e else

if (possuiGraduacao) {
  console.log('Possui graduação');
} else {
  console.log('Não possui graduação');
}

// O valor dentro dos parênteses sempre será avaliado em false ou true

// Condicionais Else if

var possuiGraduacao = true;
var possuiDoutorado = false;

if (possuiDoutorado) {
  console.log('Possui graduação e doutorado');
} else if (possuiGraduacao) {
  console.log('Possui graduação, mas não possui doutorado');
} else {
  console.log('Não possui graduação');
}

// Retorna possui graduação, mas não possui doutorado

//TRUTHY E FALSY Existem valores que retornam true e outros que retornam false quando verificados em uma expressão booleana.

var x = 5 - 5; // x será false pq 0 é false
console.log(typeof x);

if (x) {
  console.log(x);
} else {
  console.log('Não é verdadeiro');
}

var x = '10kg' + 5; // x será verdadeiro pq adição concatena string retorno 10kg5

if (x) {
  console.log(x);
} else {
  console.log(x);
}

var x = '10kg' / 5; //x será false retornará NaN

if (x) {
  console.log(x);
} else {
  console.log(x);
}

// Operador lógico de negação
// O operador !, nega uma operação booleana. Ou seja, !true é igual a false

//Truthy
if (!true); // false
if (!1); // false
if (!''); // true
if (!undefined); // true
if (!!' '); // true
if (!!''); // false

var x = !!' ';

if (x) {
  console.log(x);
} else {
  console.log(x);
}

// Dica você pode utlizar o !! para verificar se uma expressão é Truthy ou Falsy

// Operadores de comparação vão sempre retornar um valor booleano

10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10; // true
10 >= 11; // false

10 == '10'; // true
10 == 10; // true
10 === '10'; //false
10 === 10; // true
10 != 15; // true
10 != '10'; //false

// OPERADORES LÓGICOS &&  Compara se uma expressão e a outra é verdadeira && Compara se uma expressão e a outra é verdadeira

true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
5 - 5 && 5 + 5; // 0
'Gato' && false; // false
5 >= 5 && 3 < 6; // true

//Se ambos os valores forem true ele irá retornar o último valor verificado Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos
if (5 - 5 && 5 + 5) {
  console.log('verdadeiro');
} else {
  console.log('false');
}

var condicional = 5 - 10 && 5 + 5;

if (condicional) {
  console.log('verdadeiro', condicional);
} else {
  console.log('false');
}

//OPERADORES LÓGICOS ||
//|| Compara se uma expressão ou outra é verdadeira

true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
5 - 5 || 5 + 5; // 10
'Gato' || false; // Gato
5 >= 5 || 3 < 6; // true

//Retorna o primeiro valor true que encontrar

var condicional2 = 5 - 5 || 5 + 5 || 10 - 2;

console.log(condicional2); // retorna o primeiro verdadeiro

var condicional2 = (5-5) || (5+5) && (10-2);

console.log('retorna o segundo verdadeiro:',condicional2); // retorna o segundo verdadeiro

//Switch

// Com o swicth você pode verificar se uma variável é igual á diferentes valores utilizando o case. Caso ele seja igaul, você pode fazer alguma coisa e utilizar a palavra breack; para cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira.

var corFavorita = 'Verde';

switch (corFavorita) {
  case 'Azul':
  console.log('Olhe para o céu.');
  break;

  case 'Vermelho':
  console.log('Olhe para rosas.');
  break;

  case 'Verde':
    console.log('Olhe para florestas.');
    break;



  case 'Amerelo':
  console.log('Olhe para o sol');
  break;
  default:
    console.log('Feche os olhos');

  }