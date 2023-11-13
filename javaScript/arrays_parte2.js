//Métodos de Arrays

const arr1 = [30,12,45,34,29];
let arr2 = [10,20,30];

//Fatiamento: Slice

console.log(arr1.slice(0,3));
console.log(arr1.slice(3));

//Adicionando elementos: push | unshift

console.log('Antes de adicionar: ', arr2);
arr2.push(3, 20, 30)
console.log('Depois de adicionar: ', arr2);


console.log('Antes de adicionar com unshift: ', arr2);
arr2.unshift(0)
console.log('Depois de adicionar com unshift: ', arr2);

console.clear();

//Removendo elementos: pop (ultimo elemento) |shift (primeiro)

console.log('Antes de remover com o pop: ', arr2);
const elementoRemovidoPop = arr2.pop()
console.log('Depois de remover com o pop: ', arr2);
console.log('O elemento removido foi: ', elementoRemovidoPop);

console.clear();

console.log('Antes de remover com o shift: ', arr2);
const elementoRemovidoShift = arr2.shift()
console.log('Depois de remover com o shift: ', arr2);
console.log('O elemento removido foi: ', elementoRemovidoShift);

console.clear();

//Concatenando Arrays: concat

console.log('arr1', arr1);
console.log('arr2', arr2);

console.log(arr1.concat(arr2));
console.log(arr2.concat(arr1));

console.clear();

//Buscando elementos: indexOf | lastIndexOf

console.log(arr1);

//primeiro 34 do array
let indiceDoElemento34 = arr1.indexOf(34);
console.log(indiceDoElemento34);

//ultimo 34 do array
let arr3 = [1,2,3,3,5,3]
console.log(arr3.lastIndexOf(3));

console.clear();

//Decobrindo a existencia de um elemento: includes

console.log(arr1);
//retorna true or false
//verifica se o elemento existe no array
console.log(arr1.includes(10));

console.clear();

//invertendo arrays: reverse

console.log('arr1 normal: ', arr1);
const arr1Invertido = arr1.reverse()
console.log(arr1Invertido);
