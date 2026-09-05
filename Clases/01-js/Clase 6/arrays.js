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


// METODOS DE ARRAYS
let arrayNumeros2 = [1, 2, 3, 4, 5];

// push: agregar n cantidad de elementos al final del array
// pop: eliminar el ultimo elemento del array y devolverlo como variables
// shift: eliminar el primer elemento del array y devolverlo como variables
// unshift: agregar n cantidad de elementos al inicio del array
// join: unir todos los elementos del array en un string (con un separador)
// indexOf: devuelve el indice del primer elemento que coincida con el valor buscado
// lastIndexOf: devuelve el indice del ultimo elemento que coincida con el valor buscado



arrayNumeros2.push(6, 7, 8);
console.log(arrayNumeros2);

let ultimoElemento = arrayNumeros2.pop();
console.log(ultimoElemento);
console.log(arrayNumeros2);
