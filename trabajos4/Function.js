function arreglo(a, b) {
    let miarray = [99, 4, 34, 93, 1];
    miarray.sort((a, b) => { return a - b });
    console.log("Array ordenado: " + miarray);

    for (let i = 0; i < miarray.length; i++) {
        if (miarray[i] > 50) {
            console.log("Mayor a 50: " + miarray[i]);
        }
        if (miarray[i] % 2 == 0) {
            console.log("Es par: " + miarray[i]);
        }
    }
}


