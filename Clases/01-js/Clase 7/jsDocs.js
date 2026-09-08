// sintaxis que lee vsscode para decirle 

// sintaxis /** */ (vsscode lo detecta como JsDOC)  */

/**
 * @type {string}
 */
const cadena = "Hola, mundo!";

/**
 * @type {number}
 */
const numero = 42;


/**
 * @type {array}
 */
const array = [1, 2, 3];


/**
 * @type {object}
 */
const objeto = {
    nombre: "Juan",
    edad: 30
};


/**
 * @type {string}
 */



//* Documentacion de funciones con JsDOC
/**
 * Esta funcion saluda a una persona con el nombre proporcionado.
 * @param {string} nombre 
 * @returns {string} el saludo con el nombre proporcionado
 */
function saludar(nombre) {
    return `Hola, ${nombre}!`;
}
