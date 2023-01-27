// Output Var
const evenNumbers = document.getElementById('even_numbers');
const oddNumbers = document.getElementById('odd_numbers');

// Do il colore ai div
oddNumbers.style = 'color: red';
evenNumbers.style = 'color: green';

// Creo un array di numeri
const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Stampo un testo prima dei numeri fuori dal for
evenNumbers.innerHTML = 'I numeri pari sono: '
oddNumbers.innerHTML = 'I numeri dispari sono: '

// Scorro la lista dell'array
for (i = 0; i < arrayNumbers.length; i++) {

    let currentArrayNumber = arrayNumbers[i];

    if (currentArrayNumber % 2 == 0) {
        evenNumbers.innerHTML += currentArrayNumber + ' ';
    }
    else {
        oddNumbers.innerHTML += currentArrayNumber + ' ';
    }

}
