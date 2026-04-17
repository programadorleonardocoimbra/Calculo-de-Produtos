

// Calculadora IMC


const peso = 52;
const altura = 1.79;
const imc = peso / Math.pow(altura, 2);
    console.log(imc);

    if (imc < 18.5) {
        console.log('ABAIXO do Peso');
    } else if (imc >= 18.5 && imc < 25) {
        console.log('Peso NORMAL');
    } else if (imc >= 25 && imc < 30) {
        console.log('ACIMA do Peso');
    } else if (imc >= 30 && imc < 40) {
        console.log('OBESO');
    } else { 
        console.log('OBESIDADE GRAVE');
    }