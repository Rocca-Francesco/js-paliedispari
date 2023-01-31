// collego il mio bottone e genero un evento
const generaEl = document.getElementById("genera");

generaEl.addEventListener(
    "click",
    function () {
        // salvo la "fazione" scelta dall'utente
        const userPart = document.getElementById("disPari").value;
        // salvo il numero scelto dall'utente
        const userNumEl = parseInt(document.getElementById("userNum").value);
        console.log(typeof userNumEl);

        // in base alla fazione decido chi deve vincere
        if (userPart == "pari") {
            const userPari = "L'utente";
            const userDispari = "PC";
            PariDispari(userPari, userDispari, userNumEl);
        } else {
            const userDispari = "L'utente";
            const userPari = "PC";
            PariDispari(userPari, userDispari, userNumEl);
        };
    }
);



// funzione per calcolare la somma dei due numeri
function somma(userNum) {
    // creo un numero casuale per il pc e lo scrivo in html
    const pcNum = Math.floor((Math.random() * 5) + 1);
    document.getElementById("pcNum").innerHTML = "Il PC ha fatto " + pcNum;
    // sommo i due numeri
    const sommaResult = userNum + pcNum;
    return sommaResult;
};

// funzione per capire chi ha vinto
function PariDispari(Pari, Dispari, userNumEl) {
    const risultato = somma(userNumEl);
    console.log(risultato, Pari, Dispari);
    if (risultato % 2 == 0) {
        document.getElementById("winner").innerHTML = Pari + " ha vinto!"
    } else if (risultato % 2 != 0) {
        document.getElementById("winner").innerHTML = Dispari + " ha vinto!"
    } else {
        document.getElementById("winner").innerHTML = "E' un pareggio!"
    };
};