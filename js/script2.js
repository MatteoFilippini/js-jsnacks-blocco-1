const first = prompt("inserisci la prima parola", "pippo").trim();
const lung = first.length;
const second = prompt("inserisci la seconda parola", "paperino").trim();
const cort = second.length;
let message = "Le parole sono lunghe uguali";

// VALIDAZIONE
if (!(isNaN(first)) || !(isNaN(second))) {
    message = "Uno dei due valori è un numero";
} else {
    if (lung > cort) {
        message = second + ' ' + first;
    } else if (lung < cort) {
        message = first + ' ' + second;
    }
}

console.log(message);
