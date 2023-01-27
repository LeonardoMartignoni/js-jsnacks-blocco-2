// Inizializzo due array
const firstArray = [1, 2, 3, 4, 5, 6, 7];
const secondArray = [1, 2, 3];

// Output Var
const firstOldArrayEl = document.getElementById('old_first_array');
const secondOldArrayEl = document.getElementById('old_second_array');

const firstNewArrayEl = document.getElementById('new_first_array');
const secondNewArrayEl = document.getElementById('new_second_array');

// Stampo gli array
firstOldArrayEl.innerHTML = `Il primo array vecchio è: ${firstArray}`
secondOldArrayEl.innerHTML = `Il secondo array vecchio è: ${secondArray}`

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

// Stampo gli array modificati della stessa lunghezza
firstNewArrayEl.innerHTML = `Il primo array vecchio è: ${firstArray}`
secondNewArrayEl.innerHTML = `Il secondo array vecchio è: ${secondArray}`