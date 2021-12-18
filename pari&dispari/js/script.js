// Pari e Dispari:
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri.
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
// Dichiariamo chi ha vinto.

// Creo una funzione che genera un numero random, da 1 a 5 per il computer.
function RandomNum(minNum, maxNum) {
    const result =  Math.floor(Math.random() * ((maxNum + 1) - minNum)) + minNum;
    return result;
}
// Creo una funzione che stabilisce se la somma è pari o dispari.
function isEven (num) {
    // if (num % 2 === 0) {
    //     return true;
    // }
    // return false;
    return num % 2 === 0;
}

function userWin(totalNum, userSelection) {
    return (isEven(totalNum) && userSelection === 'pari') || (!isEven(totalNum) && userSelection === 'dispari');
}
// Chiediamo all'utente di scegliere tra pari e dispari, e dopo gli chiediamo
// di inserire un numero da 1 a 5.
const userChoice = prompt('scegli pari o dispari');
const userNum = parseInt(prompt('Scegli un numero da 1 a 5.'));
// Salvo nella variabile il numero random del computer.
const computerNum = RandomNum(1, 5);
// Sommo i numeri.
const sum = userNum + computerNum;
console.log(computerNum);
console.log(sum);
// Dichiariamo il vincitore.
// if (isEven(sum) && userChoice === 'pari') {
//     console.log('Hai vinto!');
// } else if (isEven(sum) && userChoice !== 'pari') {
//     console.log('Hai perso!');
// } else if (!isEven(sum) && userChoice === 'dispari') {
//     console.log('Hai vinto!');
// } else {
//     console.log('Hai perso!');
// }

if(userWin(sum, userChoice)) {
    console.log('Hai vinto!');
} else {
    console.log('Hai perso!');
}