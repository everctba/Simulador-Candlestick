

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

   if (valorAleatorio <= 0.8) {
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

   if (valorAleatorio <= 0.8) {
      viesAtual = "venda";
   } else {
      viesAtual = "compra";
   }
   //console.log("Valor do vies de compra Atualizado com 70% de chance = " + viesAtual);

   return viesAtual;
}
//
function pequenoValorAleatorio() {
   let valorAleatorio = 0;
   valorAleatorio = (Math.random() * 3);
   valorAleatorio += 0.5;
   valorAleatorio += 25;
   Number(valorAleatorio.toFixed(2));
   //console.log(" valor pequeno aleatorio = " + valorAleatorio);

   return valorAleatorio.toFixed(2);
}

function geraValorAleatorio() {
   let valorAleatorio = 0;

   valorAleatorio = (Math.random() * 200);
   //console.log(valorAleatorio);
   preco = (valorAleatorio / 10) + 26;
   preco = preco.toFixed(1);
   //console.log(preco);
   let contador3 = 0;
   while ((preco < 26.1) && (preco > 40) && (contador3 < 100)) {
      contador3++;
      preco = pequenoValorAleatorio();
   }

   return preco;

}

function geraCandleAleatorio(tamanho, matriz) {
   let i, j;

   for (i = 0; i < tamanho; i++) {
      matriz[i] = [];
      for (j = 0; j < 4; j++) {
         if (i > 0 && j == 0) {
            matriz[i][0] = matriz[i - 1][1];
         } else {
            //matriz[i][j] = geraValorAleatorio();
            valor = pequenoValorAleatorio();
            // console.log("VALOR ===== [j] " + valor);

            matriz[i][j] = valor;

            // if (vies == "compra") {
            //    matriz[i][j] = valor;
            // } else if (vies == "venda") {
            //    matriz[i][j] = valor;
            //    //console.log("VIES DENTRO DO [j] " + vies);
            // }
         }
      }
      let contador1 = 0;
      let contador2 = 0;
      //garante que a minima seja menor
      while (matriz[i][2] > matriz[i][0] && matriz[i][2] > matriz[i][1] && contador1 < 100) {
         matriz[i][2] = pequenoValorAleatorio();
         console.log("atualizando viez a cada [i] " + i);
         contador1++;
      }
      while (matriz[i][3] < matriz[i][0] && matriz[i][3] < matriz[i][1] && contador2 < 100) {
         contador2++;
         matriz[i][3] = pequenoValorAleatorio();
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



      tamanhoCandle = Math.abs(matriz[i][0] - matriz[i][1]);
      tamanhoPavio = Math.abs(matriz[i][2] - matriz[i][3]);
      console.log(" AAAAAAAAAA abertura menos fechamento COMPRA =  " + tamanhoCandle);
      //console.log(" abertura    matriz[i][0] =  " + matriz[i][0]);
      console.log(" fechamento  matriz[i][0] =  " + matriz[i][0]);
      // cents = (tamanhoCandle % 5) / 4;
      //console.log(" cents = " + cents);
      let contador4 = 0;
      let contador5 = 0;
      let contador6 = 0;
      let contador7 = 0;
      while (tamanhoCandle > 1.3 && contador4 < 200) {
         contador4++;
         console.log(" ENTROU o tamanho candle é mairo que 3.3 ");
         matriz[i][1] = pequenoValorAleatorio();
         console.log(" ATUALIZADA  BBBBBB matriz[i][1] =  " + matriz[i][1]);
         tamanhoCandle = Math.abs(matriz[i][0] - matriz[i][1]);
         console.log(" BBBBBBBBBB abertura menos fechamento VENDA =  " + tamanhoCandle);
      }
      while ((tamanhoPavio > 1.3) && (contador5 < 200)) {
         contador5++;
         console.log(" ENTROU o tamanho candle é mairo que 3.3 ");
         matriz[i][2] = pequenoValorAleatorio();
         console.log(" ATUALIZADA PAVIUUUUUUUUUUUUUUUUU matriz[i][1] =  " + matriz[i][2]);
         tamanhoPavio = Math.abs(matriz[i][2] - matriz[i][3]);
         console.log(" BBBBBBBBBB abertura menos fechamento VENDA =  " + tamanhoCandle);
      }
      while ((matriz[i][2] > matriz[i][0]) && (matriz[i][2] > matriz[i][1]) && (contador6 < 200)) {

         contador6++;
         //console.log(" ENTROU o tamanho candle é mairo que 3.3 ");

         matriz[i][2] = pequenoValorAleatorio();

         console.log(" ATUALIZADA PAVIUUUUUUUUUUUUUUUUU matriz[i][3] =  " + matriz[i][2]);

      }
      while ((matriz[i][3] < matriz[i][0]) && (matriz[i][3] > matriz[i][1]) && (contador7 < 200)) {

         contador7++;
         //console.log(" ENTROU o tamanho candle é mairo que 3.3 ");
         //aletaoriio = pequenoValorAleatorio();
         matriz[i][3] = pequenoValorAleatorio();



      }





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


function carregaVolatilidadePorCandle(candles, tamanho) {
   let i, j, matrizVol = [];
   for (i = 0; i < tamanho; i++) {
      matrizVol[i] = [];

      matrizVol[i][0] = candles[i][2];
      matrizVol[i][1] = candles[i][3];

      // document.write(`Matriz de maxima minima = Minima" ${i} ${matrizVol[i][0]} <br> `);
      // document.write("Matriz de maxima minima = Maxima" + matrizVol[i][1] + "<br> ");
   }
   return matrizVol;

}

function printaVolatilidadePorCandle(matriz, tamanho) {
   let i, vol;
   let volMedia = 0;
   let frequencia0 = 0;
   let frequencia1 = 0;
   let frequencia2 = 0;
   let frequencia3 = 0;
   let frequencia4 = 0;
   let frequencia5 = 0;
   let frequencia6 = 0;
   let frequencia7 = 0;
   let frequencia8 = 0;
   let frequencia9 = 0;
   let frequencia10 = 0;

   document.write(`<br>  Volatilidade por candle <br>`);
   for (i = 0; i < tamanho; i++) {
      vol = Math.abs(matriz[i][0] - matriz[i][1]).toFixed(2);
      document.write(`Volatilidade do candle ${i} = R$ ${vol} <br> `);

      //guarda a vol media
      volMedia += Number(vol);

      switch (true) {
         case vol > 10:
            frequencia10++;
            break;
         case vol > 9:
            frequencia9++;
            break;
         case vol > 4:
            frequencia8++;
            break;
         case vol > 3.5:
            frequencia7++;
            break;
         case vol > 3:
            frequencia6++;
            break;
         case vol > 2.5:
            frequencia5++;
            break;
         case vol > 2:
            frequencia4++;
            break;
         case vol > 1.5:
            frequencia3++;
            break;
         case vol > 1:
            frequencia2++;
            break;
         case vol > 0.5:
            frequencia1++;
            break;
         case vol <= 0.5:
            frequencia0++;
            break;

      }
   }

   document.write(`<br> Frequência de volatilidade por candle <br>`);
   document.write(` Frequência 0.0 a 0.5 = ${frequencia0} <br>`);
   document.write(` Frequência 0.5 a 1.0 = ${frequencia1} <br>`);
   document.write(` Frequência 1.0 a 1.5 = ${frequencia2} <br>`);
   document.write(` Frequência 1.5 a 2.0 = ${frequencia3} <br>`);
   document.write(` Frequência 2.0 a 2.5 = ${frequencia4} <br>`);
   document.write(` Frequência 2.5 a 3.0 = ${frequencia5} <br>`);
   document.write(` Frequência 3.0 a 3.5 = ${frequencia6} <br>`);
   document.write(` Frequência 3.5 a 4.0 = ${frequencia7} <br>`);
   // document.write(` Frequência 8 a 9 = ${frequencia8} <br>`);
   // document.write(` Frequência 9 a 10 = ${frequencia9} <br>`);
   // document.write(` Frequência acima de 10 = ${frequencia10} <br>`);

   //Atualiza o valor da media da volatilidade
   document.write(` <br>`);
   volMedia = (volMedia / tamanho).toFixed(2);
   document.write(`Media de volatilidade de ocilação de preço por candle = R$ ${volMedia}<br>`);

}

// function frequenciaDeVolatilidade(matriz, tamanho) {
//    let i;



//    for (i = 0; i < tamanho; i++) {
//       matriz[i] =




// }

// }