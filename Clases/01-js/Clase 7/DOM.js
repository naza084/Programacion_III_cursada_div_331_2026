
/**
 * @type {HTMLElement}
 */
const paragraph = document.getElementById("primerParrafo");
paragraph.innerHTML = "Primer párrafo modificado";


// 1. Selectores
const body = document.body;


const arrayDeParrafos = document.getElementsByTagName("p");
//const arrayOfParagraphs = document.getElementsByName("p"); ESTO NO ES, esto busca los parrafos con el
//  atributo name="nombre".


// Formas de encontrar 1 elemento
const unParrafo = document.querySelector("p");
// const unParrafo = document.getElementById("primerParrafo");
// const unParrafo = document.querySelector("#primerParrafo"); // p con id primerParrafo
// const unParrafo = document.querySelector("div > p"); // p dentro de div
// const unParrafo = document.querySelectorAll("p")[0];

// Con {} se puede ver como un objeto JS
console.log({unParrafo: unParrafo});

console.log(arrayDeParrafos);

