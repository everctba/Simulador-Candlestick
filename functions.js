

function geraCandleValorAleatorio() {
   let valorAleatorio = 0;
   valorAleatorio = (Math.random() * 210) + 1;
   console.log(valorAleatorio);
   preco = (valorAleatorio / 10) + 25;
   preco = preco.toFixed(1);
   console.log(preco);



   return preco;
}