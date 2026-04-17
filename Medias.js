
// Cálculo de Médias das notas de um Aluno

const nota01 = 7;
const nota02 = 7;
const nota03 = 7;
const nota04 = 7;
const media = (nota01 + nota02 + nota03 + nota04) / 4;
    console.log(media);
    

if (media < 5) {
    console.log('Aluno REPROVADO nessa matéria...');    
} else if (media === 6 ){
    console.log('Aluno EM RECUPERAÇÃO nessa matéria...');
} else {
    console.log('Aluno APROVADO nessa matéria...')
}

console.log('==========');