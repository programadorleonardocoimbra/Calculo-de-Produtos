

// Calculadora IMC

const precoProduto = 100.00;
const formaDePagamento = 4;
console.log('Qual a forma de Pagamento?');
console.log('1- Dinheiro | 2-Débito | 3- Crédito à Vista | 4- Crédito Parcelado');
console.log('Pagamento Selecionado: ', formaDePagamento);

    if (formaDePagamento === 1) {
        const precoFinal = precoProduto - (precoProduto * 0.1);
        console.log('Preço final (Dinheiro ou PIX): ', 'R$', precoFinal);       
    } else if (formaDePagamento === 2) {
        console.log('Preço final (Débito): ', 'R$', precoProduto);
    } else if (formaDePagamento === 3) {
        console.log('Preço final (Crédito à Vista): ', 'R$', precoProduto + (precoProduto * 0,19));
    } else (formaDePagamento === 4)
        console.log('Preço final (Crédito Parcelado): ', 'R$', precoProduto + (precoProduto * 0,29));