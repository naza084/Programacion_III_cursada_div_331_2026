let array = [1, 222, 0, 34, 25]


for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {

        // si i > j se cambian de posicion, sino no
        const primero = array[i];
        const segundo = array[j];

        if (primero > segundo) {
            array[i] = segundo;
            array[j] = primero;
        }
    }
}

console.log(array);

let array2 = [1, 222, 0, 34, 25]

array2.sort((primero, segundo) => {
    if (primero > segundo) {
        return -1;
    } else {
        return 1;
    }
})

console.log(array2);