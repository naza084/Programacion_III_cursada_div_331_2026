// Ejercicio 1: Crea una función tradicional llamada saludar que reciba un nombre como parámetro y devuelva "Hola <nombre>, esto es programación 3".
function saludar(nombre){
    console.log(`Hola ${nombre}, esto es Programación III`);
}

// Ejercicio 2: Reescribe la función saludar del ejercicio anterior usando función flecha (=>)
let saluda2 = (nombre) => {
    console.log(`Hola ${nombre}, esto es Programación III`);
}


/*
Ejercicio 3: crear una función llamada sumar que acepte dos números 
y que el segundo número sea opcional (predeterminado a 0).
- Si llamo sumar(5), debería devolver 5
- Si llamo sumar(5, 10), debería devolver 15
*/
function sumar (num1, num2 = 0){
    return num1 + num2;
}

// Al parecer JS permite parametros infinitos en una llamada a una función,
// aunque solo opera con los que coinciden con los definidos en la función, los demás son ignorados
console.log(sumar(5, "d", 2, 2 , 2242412421, "sd,", {}, [], [[1, 2], [3, 4]]));
console.log(sumar(5, 10));



