// VARIABLES

const nombreInput = document.getElementById("nombre");
const buscarBtn = document.getElementById("buscar");
const imagenEl = document.getElementById("imagen");
const formEl = document.getElementById("formulario");

const API_URL = "https://pokeapi.co/api/v2/pokemon/"


// ARRANQUE

// EVENTOS

formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    const url = `${API_URL}${nombreInput.value}`

    const peticion = fetch(url);

    peticion
        .then((res) => {
            const peticionBody = res.json();

            peticionBody.then((pokemon) => {
                imagenEl.src = pokemon.sprites.front_default;
            });
        })
        .catch((err) => {
            console.log("error");
        });
});



formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    const url = `${API_URL}${nombreInput.value}`

    const peticion = fetch(url);

    peticion
        .then((res) => {
            const peticionBody = res.json();

            peticionBody.then((pokemon) => {
                imagenEl.src = pokemon.sprites.front_default;
            });
        })
        .catch((err) => {
            console.log("error");
        });
});


// FUNCIONES EXTRA
// Ambas hacen lo mismo, se usan ambas, la diferencia es la legibilidad
// de async


async function traerPokemonAsync(){

    // await -> esperar
    const peticion =  await fetch(`${API_URL}totodile`);

    const body = await peticion.json();

    console.log(body);
}

traerPokemonAsync();



function traerPokemonThen(){
    fetch(`${API_URL}totodile`)
        .then((res) => {
            const peticionBody = res.json().then((body) =>{
                console.log(body);
            })
        })
}

traerPokemonThen();