// Ejercicios de la guia 2 del campus (repaso entre todos)
let arrayAnidado = [[[1, [2, 3], [4, [5]]]]];

function flattenArray(anidado) {
    const plano = [];

    for (let i = 0; i < anidado.length; i++) {
        if(Array.isArray(anidado[i])){
            const planoInterno = flattenArray(anidado[i]);
            // plano = plano.concat(planoInterno);  une dos arrays en uno solo
            plano.push(...planoInterno);

        }
        else {
            plano.push(anidado[i]);
        }

    }
    return plano;
}

console.log(flattenArray(arrayAnidado));


// Spread operator: ...
const array = [1, 2, 3, 4, 5];

console.log(...array)


function balancear(cadena){
    const stack = [];  // LIFO -> Last In First Out

    for(caracter of cadena){
        if(caracter === "(" || caracter === "{" || caracter === "["){
            stack.push(caracter);            
        }
        else if(caracter === ")" || caracter === "}" || caracter === "]"){
            const ultimo = stack.pop();

            if (
                (ultimo === "(" && caracter !== ")") ||
                (ultimo === "{" && caracter !== "}") ||
                (ultimo === "[" && caracter !== "]")
            ) {
                return false;
            }
        } else {

            // No es un caracter valido
            return false;
        }
    }

    console.log(stack.length)
    return stack.length === 0;
}

console.log(balancear("{())}"))