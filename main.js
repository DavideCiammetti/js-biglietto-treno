'use strict';
// inizializzo le variabili
const kmDaPercorrere = parseInt(prompt('inserisci i km che devi percorrere: '));
// stamo in console i km
console.log('km da percorrere: ' + kmDaPercorrere + ' ' + 'km');

const etaPassaggero = parseInt(prompt('inserisci la tua età: '));
// stampo in console l'età
console.log('età del passeggero: ' + etaPassaggero);
// inizializzo a 0 le 2 variabili una per il prezzo totale e una per il prezzo scontato
let prezzoTotale = 0;
let prezzoScontato = 0;

// calcolo prezzo totale moltiplicando i km per il costo al km del biglietto 
prezzoTotale = kmDaPercorrere * 0.21

// questa prima if serve per lo sconto per gli under 18
if(etaPassaggero < 18){
    prezzoScontato = (prezzoTotale * 20 / (100));
    prezzoTotale = prezzoTotale - prezzoScontato;
    console.log('il prezzo scontato è:' + ' ' + prezzoTotale);

}
else if (etaPassaggero > 65) {          // questa seconda if serve per lo sconto per gli over 65
    prezzoScontato = (prezzoTotale * 40 / (100));
    prezzoTotale = prezzoTotale - prezzoScontato;
    console.log('il prezzo scontato è:' + ' ' + prezzoTotale);
}
else{       
    console.log('il prezzo totale è:' + ' ' + prezzoTotale);    // questa seconda if serve per lo sconto per chi ha un eta che va dai 18 ai 65 anni e quindi non ha sconto
}