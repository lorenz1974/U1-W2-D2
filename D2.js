/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('[Esercizio 1]')
let n1 = 5
let n2 = 8
let max
if (n1 > n2) {
  max = n1
} else {
  max = n2
}
console.log('Tra ' + n1 + ' e ' + n2 + ' il più grande è: ' + max)

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('[Esercizio 2]')
let n3 = 3
if (n3 !== 5) {
  console.log('not equal')
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('[Esercizio 3]')
let n4 = 10
if (n4 % 5 === 0) {
  console.log(n4 + ' è divisibile per 5')
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('[Esercizio 4]')
let n5 = 5
let n6 = 6
if (n5 === 8 || n6 === 8 || n5 + n6 === 8 || n5 - n6 === 8) {
  console.log('Le condizioni sono verificate')
} else {
  console.log('Le condizioni NON sono verificate')
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('[Esercizio 5]')
let item1 = 23
let item2 = 22
let item3 = 5.001
let totalShoppingCart = item1 + item2 + item3
// "Resetto" al valore di default delle spese di spedizione
let shippingCost = 10
if (totalShoppingCart > 50) {
  shippingCost = 0
}
let total = totalShoppingCart + shippingCost
console.log('Il totale del carrello è: ' + totalShoppingCart)
console.log('Il costo della spedizione è: ' + shippingCost)
console.log('Il totale da addebitare è: ' + total)

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('[Esercizio 6]')
// Applico lo sconto del 20% al totale già calcolato precedermente
totalShoppingCart = totalShoppingCart * 0.8
// "Resetto" al valore di default delle spese di spedizione
shippingCost = 10
if (totalShoppingCart > 50) {
  shippingCost = 0
}
total = totalShoppingCart + shippingCost
console.log('Il totale del carrello SCONTATO è: ' + totalShoppingCart)
console.log('Il costo della spedizione è: ' + shippingCost)
console.log('Il totale da addebitare è: ' + total)

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// Algortmo preso da https://asaba.altervista.org/wp-content/uploads/2017/01/Ordina-Tre-Numeri.pdf
console.log('[Esercizio 7]')
let n7 = 13
let n8 = 22
let n9 = 5
let temp
if (n7 > n8) {
  temp = n7
  n7 = n8
  n8 = temp
}

if (n7 > n9) {
  temp = n7
  n7 = n9
  n9 = temp
}

if (n8 > n9) {
  temp = n8
  n8 = n9
  n9 = temp
}
console.log(n7, n8, n9)

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('[Esercizio 8]')
let value = '1' // Siamo cattivelli qui dai! :D
if (typeof value === 'number') {
  console.log('Il valore è un numero')
} else {
  console.log('Il valore NON è un numero')
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('[Esercizio 9]')
let n10 = 6
if (n10 % 2 === 0) {
  console.log('Il numero è pari')
} else {
  console.log('Il numero è dispari')
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('[Esercizio 10]')
let val = 5
if (val >= 5 && val < 10) {
  console.log('Meno di 10')
} else if (val < 5) {
  console.log('Meno di 5')
} else {
  console.log('Uguale a 10 o maggiore')
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('[Esercizio 11]')
me.city = 'Toronto'
console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('[Esercizio 12]')
delete me.lastName
console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('[Esercizio 13]')
me.skills.pop()
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('[Esercizio 14]')
let arr = []
arr.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(arr)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('[Esercizio 15]')
arr[arr.length - 1] = 100
console.log(arr)
