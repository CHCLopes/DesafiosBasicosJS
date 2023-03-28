/*
2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;
*/

function PessoaIMC(peso, altura) {
  const IMC = peso / (altura * altura);
  let resposta;

  if (IMC > 18.5 && IMC <= 25) {
    resposta = "PESO NORMAL";
  } else if (IMC > 25 && IMC <= 30) {
    resposta = "ACIMA DO PESO";
  } else if (IMC > 30 && IMC <= 40) {
    resposta = "OBESIDADE";
  } else if (IMC > 40) {
    resposta = "OBESIDADE GRAVE";
  } else {
    resposta = "ABAIXO DO PESO";
  }

  console.log(
    `Sua altura: ${altura}m. 
      Seu peso: ${peso}kgs. 
      Seu IMC: ${IMC.toFixed(1)}.
      Classificação: ${resposta} `
  );
}

PessoaIMC(1.69, 1.89);
