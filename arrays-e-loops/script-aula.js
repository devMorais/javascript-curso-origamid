

//var ultimoItem = videoGames.pop();

//videoGames.push('3DS');
//ideoGames.length;

for (var numero = 0; numero <= 10; numero++){
  console.log(numero); // importante lembrar de comentar pois gerar um loop infinito.

}

// o for loop possui 3 partes inicio, condição e incremento

var i = 0;
 while(i < 10){
  console.log(i);
  //i++;
  i = i + 5;
 }

 // o for loop é mais utlizado


 var videoGames = ['Swuitch', 'PS4', 'Xbox', '3DS'];

 for( var item =0; item < videoGames.length; item++){
  console.log(videoGames[item])
  if(videoGames[item] === 'PS4'){
  break; // quebra o loop depois de uma condição
  }
  
 }   // loop sobre array

 var frutas = ['Banana', 'Pera', 'Maçã', 'Abacaxi', 'Uva'];
frutas.forEach(function(fruta, index, array){
  console.log(fruta, index, array);
});






