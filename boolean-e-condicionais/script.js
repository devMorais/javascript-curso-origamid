// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var minhaIdade = 29;
var idadeIrmao = 28;

if(minhaIdade > idadeIrmao){
console.log('Minha idade é maior que do meu irmão: ', minhaIdade);
}else if(minhaIdade === idadeIrmao){
  console.log('Idades são iguais', minhaIdade, idadeIrmao);
}else{
  console.log('Idade irmao é maior', idadeIrmao)
}



// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); // 3
console.log(expressao);




// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
console.log(!!nome); // Truthy

var idade = 28;
console.log(!!idade); // Truthy

var possuiDoutorado = false;
console.log(!!possuiDoutorado); // false

var empregoFuturo;
console.log(!!empregoFuturo); // false


var dinheiroNaConta = 15;
console.log(!!dinheiroNaConta); // false


// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 1515207;
var china = 1340;


if(brasil > china){
console.log('Brasil tem mais habitantes que a china', brasil, 'Milhões')
}else{
console.log('china possui mais habitantes', china, 'Milhões')
}


// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');   // falso
}



// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');  //Cão
} else {
  console.log('Falso');  
}