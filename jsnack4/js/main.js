// Inizializzo due array
const firstArray = [1, 2, 3, 4, 5, 6, 7];
const secondArray = [1, 2, 3];

// Stampo gli array
console.log('Primo array vecchio: ' + firstArray);
console.log('Secondo array vecchio: ' + secondArray);

// SE il primo array è più grande del secondo array
if (firstArray > secondArray) {
    // Inizializzo l'indice con la lunghezza del secondo array, fino ad arrivare alla lunghezza del primo array
    for (i = secondArray.length; i < firstArray.length; i++) {

        // Inserisco nel secondo array i numeri mancanti, fino a farli combaciare con il primo array
        secondArray.push(i + 1);
    }
}
// ALTRIMENTI SE il secondo array è più grande del primo array
else if (firstArray < secondArray) {
    // Inizializzo l'indice con la lunghezza del primo array, fino ad arrivare alla lunghezza del secondo array
    for (i = firstArray.length; i < secondArray.length; i++) {

        // Inserisco nel secondo array i numeri mancanti, fino a farli combaciare con il primo array
        firstArray.push(i + 1);
    }
}

// Stampo gli array della stessa lunghezza
console.log('Primo array nuovo: ' + firstArray);
console.log('Secondo array nuovo: ' + secondArray);