//Tipos de dados

var nome = 'Fernando';
var idade = 23;
var time = null;
var pais;
var simbolo = Symbol();
console.log(typeof simbolo);

var nome = 'Fernando';
var sobrenome = 'Aguiar';
var nomeCompleto = nome + ' ' + sobrenome;

console.log(nomeCompleto);

//var gols = 1000;
//var frase = 'Romário fez ' + gols + ' gols';
//console.log(typeof frase); // sempre quando somamos nunber com string o retorno typeof = string

var ano = '2018'; //string
var mes = 8; // number
console.log(ano + mes); //string + number = concatena não soma resultado =  20188

var ano = 2018; //number
var mes = 8; // number
console.log(ano + mes); //number + number = faz a soma resultado = 2026

console.log('JavaScript é "super" fácil');
console.log("JavaScript é 'super' fácil");
console.log('JavaScript é "super" fácil');
console.log(`JavaScript é "super" fácil"`);
//"JavaScript é "super" fácil"; // Inválido Não necessariamente precisamos atribuir valores a uma variável

var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';

// Utilizando Template String
var frase2 = `Romário fez ${gols}  gols`;

console.log(frase1, frase2);

//Você deve passar expressões / variáveis dentro de ${}
