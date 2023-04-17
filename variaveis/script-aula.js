var nome = 'Fernando';
var idade = 30;
var possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade, nome);

var preco = 25;
var totalComprado = 58;
var totalPreco = totalComprado * preco;

console.log(totalPreco);

var sobrenome = 'Aguiar',
  cidade = 'Brasília';

console.log(nome, idade, sobrenome, cidade);

var semDefinir;

console.log(semDefinir); // retorna undefined

/* TIPOS DE VARIÁVEIS >>

Os nomes podem iniciar com $,-, ou letras.
Podem conter números mas não iniciar com eles

Case sensitive
nome é diferente de Nome

Não utilizar palavras reservadas

Camel case
É comum nomearmos assim: abrirModal
Inicia a segunda palavra com letra maíscula

Inválido
var §nome;
var function;
var 1possuiFaculdade;

console.log(aindaNaoDefini); */

//Válido

var $selecionar;
var _nome;
var possuiFaculdadeNoExterior;

// declarando variável com var : ela pode mudar e ser declarada novamente de duas maneiras

var time = 'Palmeiras';
console.log(time);
time = 'Vasco';
console.log(time);

// declarando variável com let : ela pode mudar mas não pode ser declarada das duas maneiras igual ao var.

/*let timeEuropeu1 = 'Real Madrid';
console.log(time);
timeEuropeu1 = 'Barcelona';
console.log(timeEuropeu);

// declarando variável com const : ela é uma constante nunca pode mudar

const fruta = 'Abacaxi';
console.log(fruta); */

//Exercicios:

// Declarar uma variável com o seu nome

var nome = 'Fernando';
