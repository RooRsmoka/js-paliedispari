// Palindromo:
// Chiedere all’utente di inserire una parola, Creare una funzione per capire se
// la parola inserita è un palindromo.

// Creo una funzione che determina sè la sequenza di caratteri inserita dall'utente
// rimane invariata se letta al contrario (palindromo).
function ispalindrome(word) {

    let reverseWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
    }

    // return reverse === word;

    if (reverseWord === word) {
        return true;
    }

    return false;
}
// Chiedo all'utente di inserire una parola.
const userWord = prompt('Inserisci una parola a tua scelta.');
// Creo la variabile e salvo l'elemento in cui stampero un messaggio.
let outputHtml = document.querySelector('.output');
// Stampo nel documento un messaggio a seconda del risultato.
if (ispalindrome(userWord)) {
    outputHtml.innerHTML = `La parola ${userWord} è un palindromo.`;
} else {
    outputHtml.innerHTML = `La parola ${userWord} non è un palindromo.`;
}