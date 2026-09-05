// JSON: Javascript Object Notation
// es la forma de JS para representar objetos
// siempre debe empezar con un objeto (con {}), es mala practica empezar con un array (con [])



// Objeto literal: objeto creado en la misma linea de codigo, sin clase definida anteriormente
const persona = {
    nombre: "Juan",
    apellido: "Perez",

    mostrarNombreCompleto: function() { // si se hace con arrow function devuelve undefined si se usa this
        console.log(this.nombre + " " + this.apellido);
    }
}

persona.otraCosa = "otra cosa";
persona.dni = 12345678;
persona.mostrarNombreCompleto();


const persona2 = {
    id: 2,
    nombre: "Maria",
    apellido: "Gomez"
}


console.log(JSON.stringify(persona)); // convierte el objeto en un string en formato JSON
console.log(JSON.parse(JSON.stringify(persona))); // convierte un string en formato JSON en un objeto
console.log(JSON.parse({"nombre":"Juan","apellido":"Perez","otraCosa":"otra cosa","dni":12345678})) // lo mismo que arriba pero con un string simple
