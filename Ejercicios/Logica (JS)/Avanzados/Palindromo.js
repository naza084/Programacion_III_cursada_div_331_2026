function esPalindromo1(cadena){

    let palindromo = false; 

    if (cadena !== null && typeof cadena === "string" && cadena.length > 0) {

        const cadenaLower = cadena.toLowerCase();
        let cadenaInvertida = "";

        for (let i = cadenaLower.length-1; i >= 0; i--) {
            cadenaInvertida += cadenaLower[i];
        }
        
        if(cadenaInvertida == cadenaLower){
            palindromo = true;
        }
    }

    return palindromo
}

function esPalindromo2(cadena) {
    if (typeof cadena !== "string") {
        return false;
    }

    const cadenaNormalizada = cadena.toLowerCase();
    const cadenaInvertida = cadenaNormalizada.split("").reverse().join(""); // corto, invierto y luego junto.

    return cadenaNormalizada === cadenaInvertida;
}

console.log(esPalindromo1("nequen"))
console.log(esPalindromo1("reconocer"))
console.log(esPalindromo1("rallar"))

console.log(esPalindromo2("nequen"))
console.log(esPalindromo2("reconocer"))
console.log(esPalindromo2("rallar"))
