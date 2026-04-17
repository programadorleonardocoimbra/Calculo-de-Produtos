
// Condicionais
// Dados de Entrada
const precoEtanol = 5.79;
const precoGasolina = 6.99;
const kmPorLitro = 10;
const distanciaEmKm = 100;
const tipoDeCombustivel = 'gasolina';

const litrosConsumidos = distanciaEmKm / kmPorLitro;
    if (tipoDeCombustivel === 'Etanol') {
        const valorGasto = litrosConsumidos * precoEtanol;
        console.log(valorGasto);
    } else {
        const valorGasto = litrosConsumidos * precoGasolina;
        console.log(valorGasto);
      }









