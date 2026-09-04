
// funcion 
function sumar(param1, param2){
    return param1 + param2;
}
const resultado = sumar(5, 10);
console.log(resultado);


// función asignada a variable.
const restar = function (param1, param2){
    return param1 - param2;
};
console.log(restar(10, 5))


// arrow function: sin la palabra Function 
const dividir = (param1, param2) => {
    return param1 / param2;
}
console.log(dividir(10, 5))


// sin return explicito
const multiplicar = (param1, param2) => param1 * param2;
console.log(multiplicar(10, 5))


// con solo un parametro
const dividir2 = param1 => param1 / 5;
console.log(dividir(10))



// 
const suma2 = function (param1 = 5, param2 = 3){
    return param1 + param2;
}
console.log(`Resultado: ${suma2(1)}`) // afecta el 2do parametro