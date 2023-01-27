// Input Var
const sendButton = document.getElementById('send_button');

// Output Var
const resultNumber = document.getElementById('result_output');

// Aggiungo un Event Listener al bottone
sendButton.addEventListener(
    'click',

    function () {
        // Chiedo di inserire un numero
        const userNumber = parseInt(document.getElementById('user_number').value);

        // SE il numero diviso per due da resto 0
        if (userNumber % 2 == 0) {
            // Stampo il numero
            resultNumber.innerHTML = `Il numero è: ${userNumber}`
        }
        // ALTRIMENTI
        else {
            // Stampo il numero + 1;
            resultNumber.innerHTML = `Il numero è: ${userNumber + 1}`
        }
    }
)
