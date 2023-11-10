//operadores booleanos

//igualdade
//desigualdade
//maior que
//maior ou igual
//menor que
//menor ou igual


let numero = 20;

console.log(numero === 10);
console.log(numero !==15);
console.log(numero > 3);
console.log(numero >=20);
console.log(numero < 50);
console.log(numero <=18);

console.clear();

//conjunções lógicas

//AND => &&
let idade = 20;
let tenhoCNH = true;

const possoDirigir = idade >= 18 && tenhoCNH === true;
console.log(possoDirigir);

// OR => ||

idade = 40;

const votoFacultativo = idade < 18 || idade >=70;
console.log(votoFacultativo);

//NOT => |

const estouGostandoDoCurso = false;
console.log(!estouGostandoDoCurso);
