
/**
 * /**
* @type {
* { marcaInput: HTMLInputElement,
*   modeloInput: HTMLInputElement,
*   precioInput: HTMLInputElement
* }
* }
*/
const formInputs = {
    marcaInput: document.getElementById("marca"),
    modeloInput: document.getElementById("modelo"),
    precioInput: document.getElementById("precio"),
}


/** @type {HTMLFormElement} */
const formElement = document.getElementById("crear");

/** @type {HTMLButtonElement} */
const formButton = document.getElementById("crearbtn");



// EVENTOS

// Validar cada input cada vez que se presiona el boton
formButton.onclick = (ev) => {
    // transformar un objeto en un iterable
    for(const [clave, valor] of Object.entries(formInputs)){
        mostrarValidaciones(valor);
    }
}

for (const [clave, valor] of Object.entries(formInputs)) {
    valor.onblur = (ev) => {
        mostrarValidaciones(valor);
    };

    valor.oninput = (ev) => {
        mostrarValidaciones(valor);
    };
}


formElement.onsubmit = (ev) => {
    ev.preventDefault();

    if(!formElement.checkValidity()) return;

    const auto = new Auto(
        formInputs.marcaInput.value,
        formInputs.modeloInput.value,
        formInputs.precioInput.value,
    )

    Auto.crear(auto);
}



// DESESTRUCTURAR VARIABLES
// const marcaInput = formInputs.marcaInput
// const { marcaInput }= formInputs esto es lo mismo que lo de arriba



// FUNCIONES AUXILIARES
/**
 * 
 * @param {HTMLInputElement} inputEl 
 */
function mostrarValidaciones (inputEl){
    if(inputEl.checkValidity()){
        pintarVerde(inputEl);
    } else {
        pintarRojo(inputEl);
    }
}
/**
 * @type { HTMLInputElement }
 */
function pintarRojo(inputEl) {
    inputEl.style.border = "#f00 solid 2px";
    inputEl.style.outline= "#f00";
}



/**
 * @type { HTMLInputElement }
 */
function pintarVerde(inputEl) {
    inputEl.style.border = "#0f0 solid 2px";
    inputEl.style.outline= "#0f0";
}

