var nome = 'Fernando';

console.log(nome.toLowerCase()); //Transforma em minúsculo

var altura = 1.6;

console.log(typeof altura.toString()); // '1.6'
altura.toFixed(); // arredonda pra cima


console.log(addEventListener.length); // 2 argumentos

console.log(Document.length);

var btn = document.querySelector('.btn');

btn.classList.add('ativo'); // adicionando classe 

btn.addEventListener('click', function(){
  console.log('clicou');
});