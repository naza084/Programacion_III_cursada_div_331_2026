
const arrayNumeros = [1, 2, 3, 4, 5];


// for que itera por indice
for (let i = 0; i < arrayNumeros.length; i++) {
    const element = arrayNumeros[i];
    console.log(element);
}


// for OF
// itera por posición
// " por cada elemnto del array"
for (const numero of arrayNumeros) {
    console.log(numero);
}


function paraElForEach(element, i, array) {
    console.log(element, i, array);
}
// foreach
arrayNumeros.forEach(paraElForEach)

// internamente forEach hace un for y ejecuta las intrucciones de la funcion paraElFoEeach
/*
    for (let i = 0; i < arrayNumeros.length; i++) {
        consolge.log(arrayNumeros[i], i, arrayNumeros);
    }
*/

// la funcion recibe una funcion llamada CALLBACK
// CALLBACK: funcion que se pasa a otra funcion para que la ejecute
arrayNumeros.forEach((v, i, arr) => console.log(v, i , arr));

