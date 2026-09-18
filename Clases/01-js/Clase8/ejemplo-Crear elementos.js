//* VARIABLES
/** @type {HTMLDivElement} */
const lista = document.getElementById("lista");

//* EJECUCIONES DE ARRANQUE

/* FORMAS DE INSERTAR ELEMENTOS EN HTML

Sí, se pueden usar (excepto after de la misma forma que abajo)
after crea un nodo despues de lista, osea, un elemento html o comentarios
lista.after("hola mundo"); // texto suelto en HTML

lista.append();
lista.appendChild();

lista.insertAdjacentElement();
lista.insertAdjacentHTML();

NO, por motivos de seguridad, hace que nuestro código sea injectable
lista.innerHTM = "<p>hola mundo</p>"";
*/

//==========================================

// 1. Crearlo
const parrafo = document.createElement("p");
// 2. Configurarlo
parrafo.textContent = "Hola mundo";
// 3. UBICARLO en el DOCUMENTO. NO COPIA, NO CLONA
lista.appendChild(parrafo);
// 4. REUBICAR ?
document.getElementById("caja").appendChild(parrafo);

// 4. REUBICAR
lista.insertAdjacentElement("afterbegin", parrafo);

lista.insertAdjacentHTML("beforeend", "<p>Hola mundo con HTML</p>"); // No lo usamos :p

