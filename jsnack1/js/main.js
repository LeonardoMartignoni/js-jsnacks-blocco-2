// Chiedo di inserire un numero
const userNumber = parseInt(prompt('Inserisci un numero'));

// SE il numero diviso per due da resto 0
if (userNumber % 2 == 0) {
    // Stampo il numero
    console.log(userNumber);
}
// ALTRIMENTI
else {
    // Stampo il numero + 1;
    console.log(userNumber + 1);
}