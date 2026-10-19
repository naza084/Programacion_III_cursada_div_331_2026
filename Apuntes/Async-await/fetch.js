// * TEMA 1: FETCH


// fetch: función que sirve para hacer una petición de red, osea: peticiones HTTP
// como fetch devuelve una promesa, se puede usar then, catch y finally
// const resultado_json = fetch("https://www.swapi.tech/api/planets/1/").then(function(response){
    
//     // response es el resultado de la petición de red, por lo tanto, tenemos accesos a campos y metodos
//     // como ok, json(), status, etc.
//     console.log(`Respuesta de la petición: ${response}`);
//     console.log(`Resultado de exito de la petición: ${response.ok}`); // ok es un booleano que indica si la petición fue exitosa
//     console.log(`Código de estado de la petición: ${response.status}`); // estado de la petición, se define con códigos, 200 es OK.
//     console.log(`URL de la petición: ${response.url}`); // status es el código de estado de la respuesta
//     console.log(`Tipo de contenido: ${response.headers.get("content-type")}`);

//     return response.json(); // devuelve otra promesa de la respuesta en formato JSON, parecido a json.parse()

// }).then(body => {// como el then de arriba devuelve una promesa podemos encadenar otro then, que trabajará con el resultado de arriba

//     console.log(body.username)
// })
// .catch(e => console.error(e)); // catch encadenado por si la petición falla



// Con .then()
async function obtenerSerie(id){
    // Con await
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const serie = await res.json();
    console.log(serie);
}

obtenerSerie(4);


fetch("https://api.tvmaze.com/shows/1")
    .then((res) => res.json())
    .then((serie) => console.log(serie));
