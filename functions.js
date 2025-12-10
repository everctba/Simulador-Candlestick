

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

   if (valorAleatorio <= 0.3) {
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

   if (valorAleatorio <= 0.3) {
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

   valorAleatorio = (Math.random() * 200);
   //console.log(valorAleatorio);
   preco = (valorAleatorio / 10) + 26;
   preco = preco.toFixed(1);
   //console.log(preco);
   if ((preco < 26.1) && (preco > 40)) {
      geraValorAleatorio()
   } else {
      return preco;
   }
}

function geraCandleAleatorio(tamanho, matriz) {
   let i, j;

   for (i = 0; i < tamanho; i++) {
      matriz[i] = [];
      for (j = 0; j < 4; j++) {
         if (i > 0 && j == 0) {
            matriz[i][0] = matriz[i - 1][1];
         } else {
            matriz[i][j] = geraValorAleatorio();
         }

      }
      //garante que a minima seja menor
      while (matriz[i][2] > matriz[i][0] && matriz[i][2] > matriz[i][1]) {
         matriz[i][2] = geraValorAleatorio();
         console.log("atualizando viez a cada [i] " + i);
      }
      while (matriz[i][3] < matriz[i][0] && matriz[i][3] < matriz[i][1]) {
         matriz[i][3] = geraValorAleatorio();
         console.log("atualizando viez a cada [i] " + i);

      }
      // console.log(" Vies dentro do [i] " + vies);
      // if ((vies == "compra") && (i > 0)) {

      //    tamanhoCandle = matriz[i][0] - matriz[i][1];
      //    //define abertura em relação ao fechamento anterior sem o GAP
      //    // if (i > 0) {
      //    //    matriz[i][0] = matriz[i - 1][0];
      //    // }

      //    while ((matriz[i][0] > matriz[i][1])
      //       && (tamanhoCandle > 3.3)
      //       // && (matriz[i][2] > matriz[i][0])
      //       // && (matriz[i][3] < matriz[i][1])
      //    ) {
      //       // matriz[i][1] = geraValorAleatorio();
      //       console.log(`Posição i = ${i}  `);
      //       console.log(`tamanhoCandle = ${tamanhoCandle}  `);
      //       console.log(`while fechamento menor que abertura  FECHAMENTO = ${matriz[i][1]}  e ABERUTRA = ${matriz[i][0]} `);
      //       temp = matriz[i][0];

      //       matriz[i][1] = geraValorAleatorio();
      //       console.log("while Novo valor de fechamento " + matriz[i][1]);
      //       tamanhoCandle = matriz[i][0] - matriz[i][1];
      //       matriz[i][2] = geraValorAleatorio();
      //       matriz[i][3] = geraValorAleatorio();
      //    }

      //    // while (matriz[i][2] > matriz[i][0]) {
      //    //    matriz[i][2] = geraValorAleatorio();
      //    // }
      //    // while (matriz[i][3] < matriz[i][1]) {
      //    //    matriz[i][3] = geraValorAleatorio();
      //    // }


      //    // console.log(" abertura menos fechamento COMPRA =  " + tamanhoCandle);
      //    // console.log(" abertura    matriz[i][0] =  " + matriz[i][0]);
      //    // console.log(" fechamento  matriz[i][1] =  " + matriz[i][1]);
      //    // cents = (tamanhoCandle % 5) / 4;
      //    // console.log(" cents = " + cents);
      //    // matriz[i][1] = matriz[i][1] - tamanhoCandle;



      //    // tamanhoCandle = Math.abs(matriz[i][0] - matriz[i][1]);
      //    // console.log(" AAAAAAAAAA abertura menos fechamento COMPRA =  " + tamanhoCandle);
      //    // //console.log(" abertura    matriz[i][0] =  " + matriz[i][0]);
      //    // console.log(" fechamento  matriz[i][0] =  " + matriz[i][0]);
      //    // cents = (tamanhoCandle % 5) / 4;
      //    // //console.log(" cents = " + cents);
      //    // if (tamanhoCandle > 3.3) {
      //    //    console.log(" ENTROU o tamanho candle é mairo que 3.3 ");
      //    //    matriz[i][1] = Math.abs(matriz[i][1] - (tamanhoCandle / 0.5));
      //    //    console.log(" ATUALIZADA  BBBBBB matriz[i][1] =  " + matriz[i][1]);
      //    //    tamanhoCandle = Math.abs(matriz[i][0] - matriz[i][1]);
      //    //    console.log(" BBBBBBBBBB abertura menos fechamento VENDA =  " + tamanhoCandle);
      //    // }



      // } else if ((vies == "venda") && (i > 0)) {

      tamanhoCandle = Math.abs(matriz[i][0] - matriz[i][1]);
      //    //define abertura em relação ao fechamento anterior sem o GAP
      //    // if (i > 0) {
      //    //    matriz[i][0] = matriz[i - 1][0];
      //    // }

      // if (i > 0 && tamanhoCandle > 3.3) {
      //    matriz[i][1] = matriz[i][1] + tamanhoCandle;
      //    tamanhoCandle = Math.abs(matriz[i][0] - matriz[i][1]);
      // }
      //       // && (matriz[i][2] > matriz[i][0])
      //       // && (matriz[i][3] < matriz[i][1])
      //    ) {
      //       matriz[i][1] = geraValorAleatorio();
      //       console.log("while Novo valor de fechamento em vies de venda " + matriz[i][1]);
      //       tamanhoCandle = matriz[i][0] - matriz[i][1];
      //       matriz[i][0] = geraValorAleatorio();
      //       matriz[i][2] = geraValorAleatorio();
      //    }


      //    // if (i > 0) {

      //    //    // if (matriz[i - 1][0] - matriz[i - 1][1] < 0) {
      //    //    //    matriz[i][1] = matriz[i - 1][1];
      //    //    // }
      //    //    matriz[i][1] = matriz[i - 1][1];
      //    // }

      //    while (matriz[i][0] < matriz[i][1]) {
      //       matriz[i][0] = geraValorAleatorio();
      //       console.log("while Novo valor de Abertura" + matriz[i][1]);
      //    }
      //    while (matriz[i][2] > matriz[i][1]) {
      //       matriz[i][2] = geraValorAleatorio();

      //    }
      //    // while (matriz[i][3] < matriz[i][0]) {
      //    //    matriz[i][3] = geraValorAleatorio();
      //    // }




      //    // tamanhoCandle = Math.abs(matriz[i][0] - matriz[i][1]);
      //    // console.log(" AAAAAAAAAA abertura menos fechamento VENDA =  " + tamanhoCandle);
      //    // //console.log(" abertura    matriz[i][0] =  " + matriz[i][0]);
      //    // console.log(" fechamento  matriz[i][1] =  " + matriz[i][1]);
      //    // cents = (tamanhoCandle % 5) / 4;
      //    // //console.log(" cents = " + cents);
      //    // if (tamanhoCandle > 3.3) {
      //    //    console.log(" ENTROU o tamanho candle é mairo que 3.3 ");
      //    //    matriz[i][1] = Math.abs(matriz[i][1] - (tamanhoCandle / 0.5));
      //    //    console.log(" ATUALIZADA  BBBBBB matriz[i][1] =  " + matriz[i][1]);
      //    //    tamanhoCandle = Math.abs(matriz[i][0] - matriz[i][1]);
      //    //    console.log(" BBBBBBBBBB abertura menos fechamento VENDA =  " + tamanhoCandle);
      //    // }





      //    0           1         2       3
      // abertura, fechamento, minima, maxima,
      //}
      //console.log(matriz[i][j]);
      //abertura, fechamento, minima, maxima,


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
      document.write(`Candle ${i}:  `);
      for (j = 0; j < 4; j++) {
         if (j == 0) {
            document.write(" Abertura: ");
         } else if (j == 1) {
            document.write(" Fechamento: ");
         } else if (j == 2) {
            document.write(" Minima: ");
         } else if (j == 3) {
            document.write(" Maxima: ");
         }
         document.write(listaCandles[i][j] + " ");



      }
      document.write("<br>");

   }
}


function calculoPorcentagemDoDia(matriz) {
   tamanhoPorcentagemDia = Math.abs(matriz[0][0] - matriz[28][1]).toFixed(2);
   percentual = ((tamanhoPorcentagemDia / matriz[0][0]) * 100).toFixed(2);

   document.write(`<br> Porcentagens do ocilação do dia = ${percentual}%<br>`);



}



function printaMinimaDoDia(matriz, tamanho) {
   let i, minimaDoDia = matriz[0][2];

   for (i = 0; i < tamanho; i++) {
      if (matriz[i][2] < minimaDoDia) {
         minimaDoDia = matriz[i][2];
         //document.write("Minima dia atualizada = " + minimaDoDia + "<br> ");
      }
   }
   document.write("Minima do dia foi = " + minimaDoDia + "<br> ");
}

function printaMaximaDoDia(matriz, tamanho) {
   let i, maximaDoDia = matriz[0][3];

   for (i = 0; i < tamanho; i++) {
      if (matriz[i][3] > maximaDoDia) {
         maximaDoDia = matriz[i][3];
         //document.write("Minima dia atualizada = " + minimaDoDia + "<br> ");
      }
   }
   document.write("Máxima do dia foi = " + maximaDoDia + "<br> ");
}

function printaMediaDoPreco(matriz, tamanho) {
   let i, media = 0;
   for (i = 0; i < tamanho; i++) {
      media += Number(matriz[i][1]);
      //document.write("Média = " + media + "<br> ");
   }
   media = (media / tamanho).toFixed(2);
   document.write("Média sobre preço de fechamento sobre os 29 candles = " + media + "<br> ");

}