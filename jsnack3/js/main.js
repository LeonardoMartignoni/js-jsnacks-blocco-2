// Creo un array di numeri interi
const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Prendo il paragrafo di HTML tramite l'id
const resultNumbers = document.getElementById('result_number');

// Inizializzo la variabile per il totale
let numbersTotal = 0;

// Scorro la lista dell'array
for (i = 0; i < arrayNumbers.length; i += 2) {

    let currentArrayNumber = arrayNumbers[i];

    // Addiziono i numeri in posizioni dispari nell'array
    numbersTotal += currentArrayNumber;

}

// Stampo il totale dei numeri dispari
resultNumbers.innerHTML = `La somma dei numeri dispari dell'array è: ${numbersTotal}`;