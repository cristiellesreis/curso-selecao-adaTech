//Laços Condicionais - estrutura de repeticao não controlada
const input = require('readline-sync')


const numeroSorteado = 5;

let numero = Number (input.question('Qual numero voce escolhe?'))


while (numero !== numeroSorteado){
    console.log("Você errou, tente novamente...")
    numero = Number (input.question('Qual numero voce escolhe?'))
}
console.log('Você acertou!');

//em caso de looping infinito, clicar no terminal e apertar ctrl+c para parar