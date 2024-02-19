function holaMundo() {
    console.log('!Hola, mundo¡');
}
holaMundo();

function name(params) {
    console.log(`¡Hola, ${params}`);
}
name('Alice');

function dobleDeNumero(numero) {
    return numero * 2;
}
let resultadoDoble = dobleDeNumero(10);
console.log(resultadoDoble);

function promedio(num1, num2, num3) {   
    return (num1 + num2 + num3)/3;
}

let promedio = promedio(4, 7, 10);
console.log(promedio);

function numMayor(a, b) {
    return a > b ? a : b;
}
let numeroMayor = numMayor(7, 8);
console.log(numeroMayor)

function cuadrado(a) {
    return a * a;
}

 let result = cuadrado(7);
 console.log(result);