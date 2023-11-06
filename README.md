# calcolo del prezzo del biglietto del treno

Scrivere un programma che chieda all’utente:

1. Il numero di chilometri da percorrere
2. Età del passeggero

con questi primi 2 punti si tratta chiaramente di variabili per questo avremo:

- la prima variabile riferita a "km da percorrere" che la chiamerò --> **kmDaPercorrere**

- la seconda variabile --> **etaPassaggero** per identificare appunto l'età del passeggero

- una terza variabile che utilizzerò poi per quando dovrò calcolare il prezzo totale del biglietto e la chiamerò -->  **prezzoTotale**

- una quarta variabile invece la userò per il prezzo del biglietto scontato e la chiamerò --> **prezzoScontato**

dal momento che queste variabili sono informazioni che l'utente deve fornire tramite un input userò la funzione prompt() ma considerato che entrambe sono numeri dovrò convertire l'input in un intero e userò la funzione  parseInt()

<hr>

Sulla base di queste informazioni dovrà:
3. calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
    1. il prezzo del biglietto è definito in base ai km (0.21 € al km)
    2. va applicato uno sconto del 20% per i minorenni
    3. va applicato uno sconto del 40% per gli over 65.

per questa seconda parte della richiesta il testo ci chiede di calcolare il prezzo del biglietto seguendo 3 modalità:

- la prima con uno sconto del 20% sui minorenni 
- la seconda con uno sconto del 40% per gli over 65 
- la terza è sottointesa e si riferisce al prezzo normale senza alcuno sconto per le persone che sono nella fascia di età tra i 18 e i 65

per entrare più nel dettaglio dell'analisi avremo sicuramente una prima condizione (if) per vedere se il passeggero è un minorenne quindi ha meno di 18 anni oppure se super i 65 anni e nel caso in cui la condizione dovesse verificarsi applicare lo sconto

prezzoTotale = kmDaPercorrere * 0.21

SE (etaPassaggero < 18)

   prezzoScontato = (prezzoTotale * 20 / (100))
   prezzoTotale = prezzoTotale - prezzoScontato
    console.log('il prezzo scontato è:' + ' ' + prezzoTotale.toFixed(2))

ALTRIMENTI SE (etaPassaggero > 65)

   prezzoScontato = (prezzoTotale * 40 / (100))
   prezzoTotale = prezzoTotale - prezzoScontato
    console.log('il prezzo scontato è:' + ' ' + prezzoTotale.toFixed(2))

ALTRIMENTI 

     console.log('il prezzo scontato è:' + ' ' + prezzoTotale.toFixed(2))


### per arrotondare a 2 cifre decimali uso la funzione toFixed()