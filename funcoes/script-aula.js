//FUNÇÕES Bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor.

function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado(4) // 16
areaQuadrado(5) // 25
areaQuadrado(2) // 4

//Chamada de function declaration


function areaRetangulo(lado){
  return lado * lado;
  

}

console.log(areaRetangulo(4));

function pi() {
  return 3.14;
}

var total = 5 * pi(); // 15.7

console.log(pi);

function imc(peso, altura){ // parametros
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(80,1.8));  // argumentos

function corFavorita(cor){
if(cor === 'Azul'){
return 'eu gosto do céu';
}else if(cor === 'Verde'){
  return 'gosto de mato'
}else{
  return 'Não gosto de nada'
}
}


// ARGUMENTOS PODEM SER FUNÇÕES Chamadas de Callback, geralmente são funções que ocorrem após algum evento.

console.log(corFavorita('Verde'));




addEventListener('click', function mostraConsole(){
  console.log('teste');
} );
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima

//Funções anônimas são aquelas em que o nome da função não é definido, escritas como function() {} ou () => {}


//PODE OU NÃO RETORNAR UM VALOR Quando não definimos o return, ela irá retornar undefined. O código interno da função é executado normalmente, independente de existir valor de return ou não.

function imc2(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

console.log(imc2(80, 1.8));
console.log(imc2(80, 1.80)); // retorna o imc e undefined



//VALORES RETORNADOS Uma função pode retornar qualquer tipo de dado e até outras funções.

function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    return 'Informe a sua idade!';
  } else if(idade >= 60) {
    return true;
  } else {
    return false;
  }
}

//Cuidado, retornar diferentes tipos de dados na mesma função não é uma boa ideia.

//ESCOPO
//Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.

function faltaVisitar(paisesQueVisitei){
  var totalPaises = 193;
  return `Falta visitar ${totalPaises - paisesQueVisitei} países`;
}


//ESCOPO LÉXICO Funções conseguem acessar variáveis que foram criadas no contexto pai

var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
//outrosDados(); // retorna um erro

// Hoisting

//Antes de executar uma função, o JS 'move' todas as funcções declaradas para a memória


imd(80,1.70);
function imd(peso, altura){
  const imd = peso / (altura**2);
  console.log(imd);
}

