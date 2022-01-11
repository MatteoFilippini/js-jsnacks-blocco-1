// DICHIARO LE VARIABILI
const first = parseInt(prompt("inserisci il primo numero", "1").trim());
const second = parseInt(prompt("inserisci il secondo numero", "10").trim());
let message = "Il maggiore è: ";

// VALIDAZIONE
if (isNaN(first) || isNaN(second)) {
    message = "uno dei due valori non è un numero";
} else {
    if (first > second) {
        message += first;
    } else if (first < second) {
        message += second;
    } else {
        message = "I numeri inseriti sono uguali";
    }
}
// console.log(message);


// Prendo la variabile dalla pagina
document.getElementByid('massimo').innerHTML = `
<div>Primo numero inserito: <strong>${first}</strong></div>
<div>Secondo numero inserito: <strong>${second}</strong></div>
<h3>${message}</h3>
`;