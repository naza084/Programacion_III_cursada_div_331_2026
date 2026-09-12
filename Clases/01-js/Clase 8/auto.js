class Auto {

    marca;
    modelo;
    precio;


    /**
     * Crea una instancia de Auto.
     * @param {string} marca Marca del automóvil.
     * @param {string} modelo Modelo del automóvil.
     * @param {number} precio Precio del automóvil.
     */
    constructor(marca, modelo, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }



    /**
     * Crea y guarda un auto.
     * @param {Auto} auto instancia de Auto.
     */
    static crear(auto) {
        
        // Revisar si hay una lista
        const listaGuardadaString = localStorage.getItem("autos");

        // si hay lista
        if (listaGuardadaString) {
            const listaGuardada = JSON.parse(listaGuardadaString);

            // si hay lista
            if (Array.isArray(listaGuardada)) {

                // agrego a la lista y guardo de nuevo
                listaGuardada.push(autoNuevo);

                const nuevaListaString = JSON.stringify(listaGuardada);

                localStorage.setItem("autos", nuevaListaString);
                return;
            }
        }

        const autos = [];

        autos.push(autoNuevo);

        // convertimos el objeto en un string en formato JSOn
        // const autoString = `{'marca': ${auto.marca}, 'modelo': '${auto.modelo}`
        const autoArrayString = JSON.stringify(autos);

        // Guardar en el Almacenamiento local -> local storage
        // guardado en almacenamiento local (en inspeccionar > aplicación > almacenamiento local se puede ver)
        localStorage.setItem("AutoCreado", autoArrayString);
    }


    /**
     * Edita y guarda un auto
     * @param {Auto} auto
     */
    static editar(auto) {
        throw new Error("Sin implementar");
    }


    /**
     * Trae los autos guardados y los lista
     * @returns { Auto[] }
     */
    static listar() {
        // Revisar si hay una lista
        const listaGuardadaString = localStorage.getItem("autos");

        // si hay lista
        if (listaGuardadaString) {
            const listaGuardada = JSON.parse(listaGuardadaString);

            if (Array.isArray(listaGuardada)) {
                return listaGuardada;
            }
        }

        return [];
    }
}


// GUARDAR
// JOSN.stringify(obj) -> string
// localStorage.set(clave, string)

// OBTENER
// localStorage.get(clave)
// JSON.parse(string) -> obj

