/**
 *
 * @type {HTMLElement} nombre
 */
const inputNombre = document.getElementById("username");

/**
 *
 * @type {HTMLElement} nombre
 */
const inputPassword = document.getElementById("password");


/**
 *
 * @type {HTMLElement} nombre
 */
const botonMostrar = document.getElementById("registrarse");



function mostrarDatos(){

    const nombre = inputNombre.value;
    const password = inputPassword.value;

    console.log({nombre, password})

}

// EVENTO
botonMostrar.onclick = mostrarDatos;

// No va a hacer el cambio en reverso com css, hay que hacerlo a mano
botonMostrar.onmouseenter = function() {
    botonMostrar.textContent = "Estas seguro?";
}

botonMostrar.onmouseleave = function() {
    botonMostrar.textContent = "Registrarse";
}


document.body.style.background = "#fff3"


const dblclick = () => {
    console.log("hiciste doble click capo")
}
// varias funciones a un mismo evento
// nombrefuncion (referencia)
// nombrefuncion() (ejecucion, se invoca a la función)
// en el caso de doble click solo necesito la referencia de dblclick
document.addEventListener("dblclick", dblclick)

const form = document.getElementById("formulario");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("se envio el formulario")
})


console.log(window.navigator.userAgent);