function mostrarPrimos(rango) {
    const primos = [];

    for (let i = 2; i <= rango; i++) {
        let esPrimo = true;

        for (let y = 2; y < i; y++) {
            if (i % y === 0) {
                esPrimo = false;
                break;
            }
        }

        if (esPrimo) {
            primos.push(i);
        }
    }

    return primos;
}

console.log(mostrarPrimos(10)); // [2, 3, 5, 7]