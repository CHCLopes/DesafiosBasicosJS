/*Faça um programa para calcular um valor de viagem, sabendo o preço do combustível, o gasto médio do veículo e a distância da viagem;
 */

const preco = 5.79,
  consumoCarro = 9;
let distanciaKM = 2875,
  consumoViagem = distanciaKM / consumoCarro;
valorViagem = consumoViagem * preco;

function viagem() {
  console.log(
    `Combustível = R$ ${preco} por litro. Consumo do Veículo = R$ ${consumoCarro} por Km. Distancia percorrida = ${distanciaKM} Km's. Gasto total = R$ ${valorViagem.toFixed(
      2
    )}`
  );
}

viagem();
