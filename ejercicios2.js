function calcularIMC(altura, peso) {
    let indice = peso/(altura * altura) ;
    return indice 
}

function calcularFactorial(numero) {
    if (numero === 0 || numero === 1){
        return 1;
    } else { 
        return numero * calcularFactorial(numero - 1);
    }
}
let numero = 5;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);

function convertidorDeDivisas(cantidad) {
    let resultado= cantidad * 4.80;
    return resultado;
}
// Ejemplo de uso
let valorEnDolar = 50;
let valorEnReales = convertirDolaresAReales(valorEnDolar);
console.log(`${valorEnDolar} dólares  es R$ ${valorEnReales}`);

function areaPerimetro(altura, ancho) {
    let area = altura * ancho;
    let perimetro = 2 * (altura + ancho);
    console.log (`El area de la sala es ${area} y el perimetro es ${perimetro}`);
}
let altura = 3;
let ancho = 5;
areaPerimetro(altura, ancho);

function areaCircular(radio) {
    let PI = 3.1416;
    let area = PI * Math.pow(radio);
    let perimetro = 2*PI * radio;
    console.log (`El area de la sala circular es ${area} y el perimetro es ${perimetro}`)
}

function tablaMultiplicar(numero){;
    for (let i = 1; i <= 10; i++) {
        var resultado = numero * i; 
        console.log (numero + "x" + i + "=" + resultado)
    }
    //Ejemplo de uso
    let numero = 7;
    tablaMultiplicar(numero);
}