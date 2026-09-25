const estilosBody = document.body.getAttribute("style")
console.log(`Estilos del body: ${estilosBody}`);


/**
 * @type {HTMLElement}
 */
// p.textContent = "<strong>Primer párrafo modificado con textContent</strong>"; 
const p = document.querySelector("p"); // obtener un elemento HTML mediante un selector de clase
const h1 = document.querySelector("h1"); 


// modificacion del contenido de p dentro de la etiqueta <p> con innerHTML
p.innerHTML = "Primer párrafo modificado";
document.body.appendChild(p); // agrega el elemento p al final del body 


// CREAR Y AGREGAR UN NUEVO ELEMENTO AL DOM

// Crear
const nuevoP = document.createElement("p"); 
nuevoP.textContent = "Segundo párrafo creado con createElement y textContent"; 

// Agregar al dom (lo ubica en el documento, antes estaba solo en memoria)
document.body.appendChild(nuevoP);



console.log(typeof p.className); // devuelve un string vacio

p.classList.add("resaltado"); // agrega la clase resaltado al elemento p

console.log(p.className); // "resaltado"


// Modifica el contenido de p 
p.innerHTML = "<strong>Primer párrafo modificado con textContent</strong>"; 

// muestra p como un objeto JS
console.log({p: p}); 


// Cambiar los atributos de un elemento de esta forma hace que solo se pueda cambiar 1 y en forma de cascada
// osea, en este caso primero se cambia el color a rojo, y luego se cambia el tamaño pero se reinicia el color
// además de que solo se puede modificar un atributo por setAtribute
h1.setAttribute("style", "color:red;", "font-size: 20px;");
h1.setAttribute("style", "font-size: 50px;");


// Modificamos el estilo directamente sin setAttribute, de esta forma se pueden "acumular" los cambios hechos
h1.style.background = "yellow";
h1.style.color = "blue";// se mantiene el color, caso contrario a setAttribute


const boton = document.getElementsByTagName("button")[0]; // obtiene el primer elemento button del documento

// EVENTO: si se presiona boton, se ejecuta la funcion que aumenta el tamaño de h1
boton.onclick = function() {
    h1.style.fontSize = "100px";
};


