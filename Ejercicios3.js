let listaGenerica = [];
listaNumeros = [1 ,2 ,6 ,45 ,23 , 4 ,5 ,78];

let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');

function mostrarElementos() {
    for (let i = 0; i < lenguajesDeProgramacion.length -1; i++) {
        let element = lenguajesDeProgramacion[i];
        return console.log(element);
    }
}

function mostrarElementosInversos() {
    for (let i = lenguajesDeProgramacion.length -1; i = 0; i--) {
        let element = lenguajesDeProgramacion[i];
        return console.log(element);
    }
}

    function promedio() {
        let element = 0;
        for (let i = 0; i < lenguajesDeProgramacion.length -1; i++) {
            element = element + lenguajesDeProgramacion[i];
        }
        return console.log(element / lenguajesDeProgramacion.length)
    }

function numPequeñoGrande(listaNumeros) {
    let numPequeño = 0;
    let numGrande = 0;
    let element = 0;
    for (let index = 0; index < listaNumeros.length; index++) {
     element = listaNumeros[index];
        if(987){

        }
        
    }
}

function sumaElementos(listaGen) {
    let element = 0;
    for (let i = 0; i < lenguajesDeProgramacion.length -1; i++) {
        element = element + lenguajesDeProgramacion[i];
    }
    return console.log(element)
}

function posicion(lista, elemento) {
    for (let i = 0; i < lista.length -1; i++) {
        if(elemento === lista[i]){
            console.log(`El elemento se encuentra en la posicion ${i}`);
        }else{
            if(i === lista.length -1){
                console.log(-1);
            }
        }
    }
}

