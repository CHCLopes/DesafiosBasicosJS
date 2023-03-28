/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

function pagamento(preco, tipoPag, parcelas) {  
  let sobrePreco;

  if (tipoPag === "deb") {
    parcelas = parcelas / parcelas;
    telaPag = "DÉBITO";
    sobrePreco = -10 / 100;
  } else if (tipoPag === "din") {
    parcelas = parcelas / parcelas;
    telaPag = "DINHEIRO";
    sobrePreco = -15 / 100;
  } else if (tipoPag === "pix") {
    parcelas = parcelas / parcelas;
    telaPag = "PIX";
    sobrePreco = -15 / 100;
  } else if (tipoPag === "div" && parcelas == 2) {
    telaPag = "PARCELADO EM 2 VEZES";
    sobrePreco = 0;
  } else if (tipoPag === "div" && parcelas > 2) {
    telaPag = `PARCELADO EM ${parcelas} VEZES`;
    sobrePreco = 10 / 100;
  }

  let precoTotal = preco + (preco * sobrePreco),
      valorParcela = (preco + (preco * sobrePreco)) / parcelas;

  console.log(
    `Preço do Produto: R$ ${preco}.
     Tipo de Pagamento: ${telaPag}.
     Valor do Desconto/Juros: R$ ${(preco*sobrePreco).toFixed(2)}
     Quantidade de Parcelas: ${parcelas}.
     Valor das Parcelas: R$ ${valorParcela.toFixed(2)}.
     Total: R$ ${precoTotal.toFixed(2)}.
     `
  );
}

pagamento(150, "pix", 1)
