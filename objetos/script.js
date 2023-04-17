// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var dados = {
  nome: 'Fernando',
  sobrenome: 'Aguiar',
}

// Crie um método no objeto anterior, que mostre o seu nome completo

dados.nomeCompleto = function(){
  return `${this.nome} ${this.sobrenome}`;
}

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

cachorro = {
  raça: 'labrador',
  cor: 'Preta',
  idade: 10,
  latir(pessoa){
    if(pessoa === 'homem'){
      return 'Estou latindo';
    }else{
      return 'Eu só vou latir se for homem';
    }
  }
}



