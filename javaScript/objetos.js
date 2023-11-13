//Objetos

//Como criar um objeto em JavaScript
let pessoa = {
    nome: 'Cristielle',
    idade: 29,
}

console.log(pessoa)

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa['nome']);

//Como add um par chave-valor
pessoa.altura = 1.63
console.log(pessoa)

//Como remover um par chave-valor
delete pessoa.altura
console.log(pessoa)


console.clear()
//Como percorrer
for (let chave in pessoa){
    console.log(chave)
}
