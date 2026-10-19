
//* TEMA 1: PROMESAS

// Promesa: forma de obtener información con incertidumbre de tiempo, no llega al momento de ejecutarse el código
// (osea, no se cuando obtendré un dato como respuesta)
const promesa = Notification.requestPermission();

// requestPermission devuelve una promesa, por lo tanto, 2 + 5 o el console log de permission se ejecutan 
// antes de que la promesa se resuelva (en este caso hasta que aprete un boton de la notificación)
// Notification.requestPermission();
console.log(2 + 5)
console.log("Me ejecuto inmediatamente porque no dependo de la promesa para aparecer")

// imprimir la respuesta a la peticion sola solo devuelve el estado (pending en este caso)
// con el then lo que hago es capturar esa respuesta SI SALE BIEN y la imprimo en consola en la variable respuesta
console.log(promesa.then((respuesta) => {console.log(respuesta)}));


// then más desarrollado(recibe una función como parametro que se ejecutará despues, esto se dice callback)
promesa.then(function(retornoDeLaPromesa) { // usualmente se usa "param" o "value" como nombre del parametro que captura el valor de la promesa

    if(retornoDeLaPromesa === "denied") {
        console.log("como denegaste las notis voy a aparecer, holiii")
    } else {
        console.log("aceptaste las notis, bien ahi, ahora minaré bitcoins en tu pc")
    }

    console.log(`Promesa en forma de objeto: ${promesa} \nresultado de la promesa: ${retornoDeLaPromesa}, \n tipo de retorno: ${typeof retornoDeLaPromesa}`)
})

// a diferencia de then, catch se ejecuta si la promesa da error, recibe una función como parametro(callback)
promesa.catch(function(error){
    console.log(error);
    console.error(error);
})

promesa.finally(function() { // finally se ejecuta siempre, sin importar si la promesa se cumplió o no
    console.log("holi, voy a aparecer independientemente de lo que elijas pero solo si eliges algo, pues estoy dentro del finally")
})



//* TEMA 2: PROMESAS MULTIPLES

// si devuelvo un valor con return en el .then, estoy devolviendo otra promesa
const prom2 = promesa.then(function(retornoDeLaPromesa) { 
    if(retornoDeLaPromesa !== "denied") {
        return true;
    } else {
        // console.log("hola?) (desde otra promesa igual, al parecer me ejecuto al mismo tiempo que la primera")
        return "resultado";
    }
});


console.log(prom2) // se puede ver el resultado de la promesa en devtools > promise result (dentro del despegable de promise)

// Este then de prom2 se ejecutará cuando se complete el then de la la promesa anterior.
prom2.then((retornoDeLaPromesa) => {
    console.log(retornoDeLaPromesa);
});




// ? no se que es lo de abajo xd
// prom2.then((retornoDeLaPromesa) => {
//     promesa.then((retornoDeLaPromesa) => {
//         console.log("quien soy? donde estoy?")
//     });
// });



// async function traerUsuario() {
//     const respuesta = await fetch("https://api.github.com/users/torvalds");
//     const datos = await respuesta.json();
//     console.log(datos);
// }
// traerUsuario();

// promesa con try catch
// try {
//     const peticion = fetch("https://api.github.com/users/torvaldss")
//         .then(() => {
//             console.log("imagen de linus")
//         })
//         .catch((err) => {
//             console.log(`Error: ${err}`)
//         });
// } catch (error) {
//     console.log(error)
// }
