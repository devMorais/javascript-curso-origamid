// Declare uma variável contendo uma string

var frase = 'Eu sou um vencedor';
console.log(typeof frase);

// Declare uma variável contendo um número dentro de uma string

var numero = '29';
console.log(typeof numero);

// Declare uma variável com a sua idade

var idade = 30;

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas

var nome = 'Fernando';
var sobrenome = 'Aguiar';

var nomeCompleto1 = nome + sobrenome; // vai ficar grudado
console.log(nomeCompleto1);
var nomeCompleto2 = `${nome}              ${sobrenome}`; // Template string
console.log(nomeCompleto2);

// Coloque a seguinte frase em uma variável: It's time

var seguinteFrase = "It's time";
console.log(seguinteFrase);

// Verifique o tipo da variável que contém o seu nome

console.log(typeof nome);
