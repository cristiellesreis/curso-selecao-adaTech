// Laço numérico : Estrutura de repetição controlada

const input = require('readline-sync') // biblioteca

//o problema
// const nota1 = Number (input.question('Informe a nota 1:'))
// const nota2 = Number (input.question('Informe a nota 2:'))
// const nota3 = Number (input.question('Informe a nota 3:'))

// let media = (nota1 + nota2 + nota3)/3

//acumulador

let acumulador = 0

acumulador = acumulador + 10; //tres formas de fazer um acumulador
acumulador += 2;
acumulador++

console.log(acumulador);

console.clear();

//estrutura for

// declarar uma variavel dentro do for
//i=iteração
//estrutura do for (iniciacilar; condição de parada; qual é o passo da sua repetição)
for (let i = 0; i<4; i++){ 
    console.log('Repeticao', i)
}

console.clear();

for (let i = 10; i<=12; i++){ 
    console.log('Repeticao', i)
}

for (let i = 12; i>8; i--){ 
    console.log('Repeticao', i)
}

console.clear();


//Resolvendo o problema inicial

let nota;
let soma=0;

for(let i=1; i<=3; i++){
    nota= Number (input.question(`Informe a nota ${i} do aluno: `))

    soma= soma + nota; //acumula os valores até o fim do laço
}
console.log(`A média do aluno é ${soma/3}.`);