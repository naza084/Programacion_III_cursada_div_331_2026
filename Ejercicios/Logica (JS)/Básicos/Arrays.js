/*
Ejercicio 1: Crea una función llamada crearArray que reciba varios números como argumentos usando el parámetro rest (...numeros) y devuelva un array.
EJ:
crearArray(1, 2, 3, 4); // [1, 2, 3, 4]
*/
function crearArray (...numeros) {
    return numeros;
}

console.log(crearArray(2,2,3,34,4,44))
