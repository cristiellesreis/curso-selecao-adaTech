//coersão (coversão) de tipos
// 1. Coerção explícita (manual)

const numero = 10;
console.log(numero, typeof numero)

const numeroEmFormatoDeString = String(numero);
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString)

console.log(Number("123456"))
console.log(parseFloat("123456.123"))
console.log(parseInt(123456.123))
console.log(Boolean(1)) //0 false, 1 true

console.clear()

//2. Coersão implícita (Automática)

console.log(10+"1") //na soma, o js contatena e transforma em strg
console.log('10'-1)
console.log(10 * '3')
console.log(10 - 'aaa') //not a number: NaN

//Outros exemplos

//Qual será a saída desse código?
let n = 1 + "1";
n = n-1;
console.log(n);
//10

//Qual será a saída desse código?
console.log(2 + 3 + 4 +'5');
//95

//Qual será a saída desse código?
console.log("5" + 2 + 3 + 4);
//5234

//Qual será a saída desse código?
console.log("10" - "4" - "3" - 2 + "5");
//15










