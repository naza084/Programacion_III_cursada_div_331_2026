console.log("hola mundo desde un servidor de express");

// Common JS, NO Ecmascript
// para importar usaremos require y para exportar: module.exports = variableAExportar
const express = require('express'); // importar express
const app = express() // instanciar express en la variable app, se usa ese nombre por ser corto y coherente, es convención
const port = 3000

// require trae todo lo que se haya asignado a module.exports en el archivo que le pasemos como parámetro, en este caso data.js
const puestosDeTrabajo = require("./data.js")


//Ejemplo
// let programador = "naza"
// app.get('/', (req, res) => {
//     res.send({nombre: {programador}, salario: "poco"})
// })

// Usando puestos de trabajo
// app.get("/puestos/otra-ruta/miniruta", (peticion, respuesta) => {
//     const parametrosQuery = peticion.query;
//     console.log(parametrosQuery);
    
//     respuesta.send(puestosDeTrabajo);
// })

// app.get("/puestos/otra-ruta/miniruta", (peticion, respuesta) => {
//     const parametrosQuery = peticion.query;
//     const limit = Number.parseInt(parametrosQuery.limit);
//     const page = Number.parseInt(parametrosQuery.page);

//     console.log(parametrosQuery);
//     console.log(limit);
//     console.log(page);
//     respuesta.send(puestosDeTrabajo);
// });


// Todos los puestos de trabajo
app.get("/puestos", (peticion, respuesta) => {
    respuesta.send(puestosDeTrabajo);
});

// Puestos con query params de limite de puestos y numero de pagina
app.get("/puestos/", (peticion, respuesta) => {
    const parametrosQuery = peticion.query;

    // Parseo a entero para no pasar ningun otro tipo de dato, sino devuelve un [] vacio
    const limit = Number.parseInt(parametrosQuery.limit);
    const page = Number.parseInt(parametrosQuery.page);

    respuesta.send(puestosDeTrabajoFiltrados(limit, page));
});


// Puestos por nombre
app.get("/puestos/:nombre", (req, res) => {
    const nombreBuscado = req.params.nombre.toLowerCase();

    const puestoEncontrado = puestosDeTrabajo.find((puesto) => {
        const nombrePuesto = puesto.nombre.toLowerCase();
        return nombrePuesto.includes(nombreBuscado);
    });

    if (puestoEncontrado) {
        res.json(puestoEncontrado);
    } else {
        res.status(404).json({
        error:
            "No se encontró ningún puesto de trabajo con el nombre " +
            nombreBuscado,
        });
    }
});


// Otras funcioens
function puestosDeTrabajoFiltrados(limit, page) {
    let startIndex;

    startIndex = (page - 1) * limit;
    startIndex = Math.max(0, startIndex);
    const endIndex = startIndex + limit;
    const results = puestosDeTrabajo.slice(startIndex, endIndex);
    return results;
}

app.get("/puestos/:nombre", (peticion, respuesta) => {
    respuesta.send(respuesta.params);
});


// * listen hace que todas las peticiones de arriba funcionen, es como prender el backend de la aplicacion 
// * para que pueda recibir y responder peticiones
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// CTRL + C para cerrar un puerto
// ! Si quiero "actualizar" lo que hice en una peticion, debo cerrar el puerto y volverlo a abrir o usar node --watch ./main.js
