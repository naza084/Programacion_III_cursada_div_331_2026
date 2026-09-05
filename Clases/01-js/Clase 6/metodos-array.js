// Map, filter y reduce.


// Map: se usa para modificar cada elemento de un array de la misma forma
// devuelve otro array modificado, no modifica el array original

// Aplicar impuesto IVA a los numeros
const arrayNumeros = [1, 2, 3, 4, 5];
const arrayNumerosModificados = arrayNumeros.map((numero) => {return numero * 1.21});

console.log(arrayNumeros);
console.log(arrayNumerosModificados);


const objetos = [
    { nombre: "Juan", apellido: "Perez", edad: 30 },
    { nombre: "Maria", apellido: "Gomez", edad: 25 },
    { nombre: "Pedro", apellido: "Lopez", edad: 35 }
];



