// Arrays

// Como criar um array

let arr = ["Cristielle", 29, 1.63, true];

console.log(arr);

//Como acessar os elemntos do array

console.log("Primeiro elemento: ", arr[0]);
console.log("Segundo elemento: ", arr[1]);
console.log("Terceiro elemento: ", arr[2]);
console.log("Quarto elemento: ", arr[3]);

//Como obter o tamanho do array

console.log('Quantidade de elementos do array: ',arr.length);

console.clear();

//Percorrendo arrays

for (let i= 0; i < arr.length; i++){
    console.log(arr[i]);
}


console.clear();

//para cada elemento do array imprima o elemento
for (let elemento of arr){ //for of - percorrendo cada elemento do array
    console.log(elemento);
}

console.clear();

for( let indice in arr){ //for in - percorrendo os indices do array
    console.log(indice, arr[indice]);
}
