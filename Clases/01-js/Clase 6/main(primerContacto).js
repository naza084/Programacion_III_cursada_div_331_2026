// JS es un lenguaje interpretado, por lo que todos los errores apareceran en la consola 
// y no en la escritura de código


// Mostrar algo en consola
console.log("Algo");



// VARIABLES (camelCase)


// var -> variable global
//* var no debe usar porque desperdicia espacio en memoria
var variable = "Hola";

// let -> variable local
let otra = "mundo"; 

// const -> constante
const MATH_PI = 3.14 // NO PUEDE CAMBIAR SU VALOR UNA VEZ DECLARADO


console.log("Algo", variable, otra, MATH_PI);


function contar() {

    var numero1 = 4;
    let numero2 = 2;

    console.log(numero1, numero2)
}

contar();



// TIPOS DE DATOS


//❖ number: para números de cualquier tipo (enteros o flotantes).
let numero = 12343535.242424; 

//❖ bigint: para números enteros de longitud arbitraria.
let big = BigInt("4424242252525");  

//❖ string: para cadenas de cero, uno o varios caracteres. (*)
let cadena1 = "Hola mundo";
let cadena2 = 'Hola mundo' + " con comillas simples"
let cadena3 = "Hola mundo ${big} con comillas dobles" // No funciona la interpolación de variables con comillas dobles
let cadena4 = `Hola mundo ${big} con comillas invertidas` // Funciona la interpolación de variables con comillas invertidas


//❖ boolean: para valores verdadero o falso (true / false).
let booleano = true;
let booleano2 = false;


//❖ symbol: para identificadores únicos.
let simbo1l = Symbol("simbolo1");
let simbo2l = Symbol("simbolo2");
console.log(simbo1l === simbo2l); // false, porque son símbolos únicos



//❖ undefined: variable sin valor asignado
let variableSinValor;
console.log(variableSinValor);


//❖ null: variable con valor desconocido(pero se asigna explicitamente como null)
let variableNull = null;
console.log(variableNull);  




//❖ object (no primitivo): para estructuras de datos complejas.
const object = {
    nombre: "Naza",
    apellido: "Cruz"
}
console.log(object)



//* Nota: el operador typeof permite saber qué tipo de dato se almacena en variables.
console.log(typeof object, typeof numero);



// ARRAYS
const array1 = [1, 2 , 3, 4 , 5]
const array2 = ["1", "2", "3", "4", "5"]


// Estructuras de control e iteración

for (let i = 0; i < array1.length; i++) {
    
    console.log(i);
}

// COMPARACIONES

// > -> numeros
// < -> numeros
// == 
// >= -> numeros
// <= -> numeros
// === 
// !=
// !==







