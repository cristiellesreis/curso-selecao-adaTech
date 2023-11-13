// funçoes - util para reaproveitar no código

//definição da função
function saudacao() {
    console.log('Olá seja bem vindo(a) ao nosso curso de javaScript!');
}

saudacao();

console.clear();

//Como enviar parâmetros para as funcoes

function saudacao(nome, curso) {
    console.log(`Olá ${nome}, seja bem vindo(a) ao nosso curso de ${curso}!`);
}

saudacao('Cristielle', 'CSS');

console.clear();

// Retorno da função

function soma(numero1, numero2) {
    return numero1 + numero2; //sempre optar por retornar o valor ao inves de imprimir
    //depois do retorno a funcao se encerra
}

const resultado = soma(10,20);
console.log(resultado);

console.clear();


function maiorQue50(numero) {
    if (numero >50){
        return true;
    }
    return false
}

//pesquisar sobre arrow function (funcao anônima)