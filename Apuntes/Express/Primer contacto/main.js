// Aplicacion basica de express
const express = require('express'); // importo el modulo express, similar al import en python
const app = express(); // instancio express como en app como si fuese una clase, app será quien maneje lo que haga el servidor
const port = 3000; // puerto para levantar el servidor, 3000 es convencion en desarrollo

// objeto anonimo
const req1 = {Nombre: 'Nazareno', Apellido: 'Cruz'};

// Routing: manejo de rutas, puedo controlar que quiero que aparezca en determinadas rutas o segun que metodos HTTP
app.get('/HolaMundoo', (req, res) => {
    // si se lanza una peticion de cualquier tipo (get, post) a una ruta distintaa la de arriba
    // lanza un error 404 not found, hasta que no se haga una ruta para la URL que se intenta acceder

    console.log(req.method)
    // send es el return de los metodos HTTP, solo puede haber uno por solicitud HTTP
    res.send("Hola mundo desde un servidor de expresss");

    // res.json(req1); esto no se muestra ya que se devolvió algo arriba;
});


app.get('/sumaConFuncion', suma);


// para todos lo tipos de peticiones en esa ruta
app.all('/error', (req, res) => {
    res.status(404).send('Error 404: Not Found');
});


app.use(express.static("imagenes"));

// Levanta el servidor y lo pone en modo escucha para que le lleguen peticiones HTTP. Le da vida basicamente
// el callback es opcional, se podría omitir
// pero se usa para saber si se levantó correctamente
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

// ! Cualquier cambio hecho no se verá reflejado en el servidor hasta que no se cierre(con ctrl+c) y abra otra vez
// ! con node --watch ./main.js hace que se actualice cuantas veces se haga un cambio


function suma(req, res) {
    const suma = 2 + 2
    console.log(suma);
    return res.send(suma);
}