// Scrivi un programma che esegua un ciclo da 1 a 100
// e a ogni iterazione appenda un elemento html al container con uno stile differente a seconda del valore dell’indice
// per i multipli di 3,
// per i multipli di 5
// e per i valori che sono sia multipli di 3 che di 5.

// dichiarazioni variabili
const squareContainer = document.getElementById("container");

// con un ciclo for genero degli elementi in pagina con classe square e come contenuto il numero iterazione
for (let i = 1; i <= 100; i++) {

    console.log(i);

    let square = document.createElement("div");
    square.classList.add("square");
    square.append(i);

    // - verifico se il numero del quadrato è divisibile per 3
        // * aggiungo la classe fizz e modifico il contenuto con la parole fizz
    // - verifico se il numero del quadrato è divisibile per 5        
        // * aggiungo la classe buzz e modifico il contenuto con la parole buzz
    // - se il numero è divisibile per 3 e per 5 aggiungo entrambe le classi ed entrambe le parole
    if (i % 3 === 0 && i % 5 === 0) {
        square.classList.add("fizz");
        square.classList.add("buzz");
        square.innerHTML = "fizzbuzz";
    } else if (i % 3 === 0) {
        square.classList.add("fizz");
        square.innerHTML = "fizz";
    } else if (i % 5 === 0) {
        square.classList.add("buzz");
        square.innerHTML = "buzz";
    };

    // aggiungo il div in pagina
    squareContainer.append(square);
}
