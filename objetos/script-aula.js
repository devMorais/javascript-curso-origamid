// Obejtos - CONJUNTO DE VARIAVEIS E FUNÇÕES QUE SÃO CHAMADAS DE PROPRIEDADES E METODOS

var pesoa = {
  nome: 'Fernando',
  idade: 28,
  profissao: 'Programador',
  possuiFaculdade: true,
}

// propriedades e métodos consistem em nome (chave) e valor


//MÉTODOS É uma propriedade que possui uma função no local do seu valor.
var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;
  },
}

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20

console.log(typeof console); // console é um objeto
