const perimetro = new Function('lado', 'return lado * 4');

console.log(perimetro(2));

function somar(n1,n2){
  return n1+n2;
}

somar.length;

function darOi(){
  console.log('oi pra voce');
}

darOi.call();

function descricaoCarro(){
  console.log(this.marca + ' ' + this.ano);
}


