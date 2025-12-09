

function defineLadoDoViesInicial(vies) {
   let valorAleatorio = 0;
   valorAleatorio = Math.random().toFixed(2);
   console.log("valorAleatorio = " + valorAleatorio);
   console.log(" TIPO valorAleatorio = " + typeof Number(valorAleatorio));

   if (valorAleatorio >= 0.5) {
      vies = "compra";
   } else {
      vies = "venda";
   }
   return vies;
}

function atualizaVies(viesAtual) {
   console.log(" ENTROU NOA TUALIZA VIES vies!!");
   if (vies === "compra") {
      vies = atualizaViesCompra(vies);
      console.log("Vies recebido do atualiza vies de COMPRA vies = " + vies);
   } else {
      vies = atualizaViesVenda(vies);
      console.log("Vies recebido do atualiza vies de VENDA vies = " + vies);
   }

}

function atualizaViesCompra(viesAtual) {
   console.log("Ta no vies de COMPRA e é viesAtual!! ... " + viesAtual);
   let valorAleatorio = 0;
   valorAleatorio = Math.random().toFixed(2);

   if (valorAleatorio <= 0.7) {
      viesAtual = "compra";
   } else {
      viesAtual = "venda";
   }
   //console.log("Valor do vies de compra Atualizado com 70% de chance = " + viesAtual);

   return viesAtual;
}

function atualizaViesVenda(viesAtual) {
   console.log("Tá no vies de VENDA e é viesAtual!! ... " + viesAtual);
   let valorAleatorio = 0;
   valorAleatorio = Math.random().toFixed(2);

   if (valorAleatorio <= 0.7) {
      viesAtual = "venda";
   } else {
      viesAtual = "compra";
   }
   //console.log("Valor do vies de compra Atualizado com 70% de chance = " + viesAtual);

   return viesAtual;
}
//
function geraValorAleatorio() {
   let valorAleatorio = 0;





   valorAleatorio = (Math.random() * 208) + 1;
   //console.log(valorAleatorio);
   preco = (valorAleatorio / 10) + 25;
   preco = preco.toFixed(1);
   //console.log(preco);



   return preco;
}

function geraCandleAleatorio(tamanho, matriz) {
   let i, j;

   for (i = 0; i < tamanho; i++) {
      matriz[i] = [];
      for (j = 0; j < 4; j++) {
         matriz[i][j] = geraValorAleatorio();
         //console.log(matriz[i][j]);
         //abertura, fechamento, minima, maxima,
      }

      atualizaVies(vies);
      console.log("atualizando viez a cada [i] " + i);

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