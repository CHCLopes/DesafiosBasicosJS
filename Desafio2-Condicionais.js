/*
Faça um programa para calcular um valor de viagem, sabendo o preço do da gasolina e do etanol, o tipo de combustível usado e o gasto médio do veículo, e a distancia da viagem;
Imprima no console a resposta;
*/

function viagem() {
  //se o carro for a gasolina faz 8km com um litro
  const consumoCarro = [8, 12],
    //se o carro for a gasolina o preço é R$ 5,79
    preco = [6.66, 5.79];
  // se o combustível comprado for a gasolina o tipo é "0"
  let combustivelComprado = 1,
    distanciaKM = 100,
    valorViagem =
      (distanciaKM / consumoCarro[combustivelComprado]) *
      preco[combustivelComprado];

  console.log(
    `Combustível = R$ ${preco[combustivelComprado]} por litro. 
     Consumo do Veículo = ${consumoCarro[combustivelComprado]} km's por litro. 
     Distancia percorrida = ${distanciaKM} Km's.
     Consumo do Veículo na viagem = ${(
       distanciaKM / consumoCarro[combustivelComprado]
     ).toFixed(2)} litros.
     Gasto total = R$ ${valorViagem.toFixed(2)}`
  );
}

viagem();
