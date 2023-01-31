// scrivo una funzione per verificare se la parola inserita è un palindromo
function controlloPalindromo(myWord) {
    // identifico il modo di prendere la lunghezza dalla fine lunghezza 
    let lengthReverse = myWord.length - 1;
    // siccome la mia parola può essere divisa in due, per la metà controllo che sia uguale
    for (let i = 0; i < lengthReverse / 2; i++) {
        let avanti = myWord[i];
        let indietro = myWord[lengthReverse - i];
        if (avanti != indietro) {
            // se le metà non coincidono non è un polindromo
            return false;
        }
    }
    /// se è palindromo è vero
    return true;

}

//faccio un'altra funzione per poter mostrare il mio risultato
function èPalindromo(myWord) {
    // il risultato della mia funzione precedente
    let risposta = controlloPalindromo(myWord);

    if (risposta == true) {
        alert("la parola è palindromo");
    }
    else {
        alert("la parola NON è palindromo");
    }
}

let userWord = prompt("Inserisci una parola.")
èPalindromo(userWord);
