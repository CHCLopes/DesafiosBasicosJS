/*
Faça um algoritmo que dado três notas tiradas por um aluno em um semestre da faculdade, ele calcule e imprima sua média e a sua classificação conforme tabela abaixo.

Média = {nota 1 + nota 2 + nota 3 } / 3;

Classificação:
- Média menor que 5, "Reprovado";
- Média entre 5 e 7, "Em Recuperação";
- Média maior que 7, "Aprovado".
*/
var nota1 = 3,
    nota2 = 6,
    nota3 = 6;

function aprovacao(){
  let media = (nota1 + nota2 + nota3) / 3;
  if(media <= 5) {
    console.log(
      `As Notas do aluno foram: 
      - ${nota1};
      - ${nota2};
      - ${nota3};
      Sua Média é:
      - ${media.toFixed(1)};
      o aluno está REPROVADO.`
  )} else if( media <= 7 ){
    console.log(
      `As Notas do aluno foram: 
      - ${nota1};
      - ${nota2};
      - ${nota3};
      Sua Média é:
      - ${media.toFixed(1)};
      o aluno está EM RECUPERAÇÃO.`
  )} else {
    console.log(
      `As Notas do aluno foram: 
      - ${nota1};
      - ${nota2};
      - ${nota3};
      Sua Média é:
      - ${media.toFixed(1)};
      o aluno está APROVADO!`
  )}
}

aprovacao()