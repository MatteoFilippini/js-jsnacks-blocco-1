// DICHIARO LE VARIABILI
let sum = 0;

// CHIEDO DI INSERIRE I NUMERI
for (let i = 0; i < 3; i++) {
    const num = parseInt(prompt("Inserisci un numero"));
    if (!isNaN(num)) {
        sum += num;
    }
}

console.log(sum);