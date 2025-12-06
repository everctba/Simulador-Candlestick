
//
function geraValorAleatorio() {
   let valorAleatorio = 0;
   valorAleatorio = (Math.random() * 208) + 1;
   console.log(valorAleatorio);
   preco = (valorAleatorio / 10) + 25;
   preco = preco.toFixed(1);
   console.log(preco);



   return preco;
}

function geraCandleAleatorio(tamanho, matriz) {
   let i, j;

   for (i = 0; i < tamanho; i++) {
      matriz[i] = [];
      for (j = 0; j < 4; j++) {
         matriz[i][j] = geraValorAleatorio();
         console.log(matriz[i][j]);
         //abertura, fechamento, minima, maxima,
      }
   }
   console.log("Linhas:", matriz.length);
   console.log("Colunas:", matriz[0].length);
   return matriz;
}

function printaArrayCandle(listaCandles) {
   let i, j;

   for (i = 0; i < listaCandles.length; i++) {
      for (j = 0; j < 4; j++) {
         document.write(listaCandles[i][j] + " ");


      }
      document.write("<br>");

   }
}