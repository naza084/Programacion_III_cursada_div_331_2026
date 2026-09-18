console.log("1. FETCH");


// Metodo para hacer PETICIONES a recursos externos, como internet.
const peticion = fetch("https://api.github.com/users/afriadenrich",
    {method: "GET", // fetch por defecto hace un metodo GET
});

console.log(peticion);

// then es valor de exito, es decir, cuando promesa fetch se ejecuta perfectamente
// catch es cuando da error la respuesta 
peticion.then((response) => {
    console.log(response);

    const body = response.json();

    console.log(body);
    body.then((valorFinal) => {
        console.log(valorFinal);
    }) 
})

// Promesa
fetch("https://api.github.com/users/torvalds").then((res) => {
    res.json().then((value) => {
        console.log(value);

        const imagen = value.avatar_url;
        const imageElement = document.createElement("img");
        imageElement.src = imagen;

        document.body.insertAdjacentElement("beforeend", imageElement);
        });
    })
    .catch((reason) => {
        console.log(reason);
});


console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");



//! esto no se hace
// setTimeout(() => {
//     console.log("se ejecuta 3 segundos despues de arrancar la pagina");
// }, 3000 // en 3 segundos
// );

// setInterval(() => {
//     console.log("se ejecuta cada 1 segundo hasta que llegue al limite")
//     , 2000
// });

