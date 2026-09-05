
class Usuario{

    nombre; // publico
    _edad; // protegido (CONVENCIÓN)
    #dni; // privado

    constructor(nombre, dni, edad){
        this.nombre = nombre;
        this.#dni = dni;
        this._edad = edad;
    }

    getNombre(){
        return this.nombre;
    }

    getDni(){
        return this.#dni;
    }

    getEdad(){
        return this._edad;
    }

    setEdad(valor){
        
        if (typeof valor == "number" && valor > 0) {
            this._edad = valor;
        }
    }

}


const usuario1 = new Usuario("Juan", "12345678", 30);
const usuario2 = new Usuario("Maria", "87654321", 25);

console.log(usuario1, usuario2);
console.log(typeof usuario1)


// Herencia: extends
// Abstractas: de forma manual se crean sin constructor ni atributos, solo metodos
// y con una validacion de que no se puede instanciar la clase abstracta, solo se puede heredar de ella
