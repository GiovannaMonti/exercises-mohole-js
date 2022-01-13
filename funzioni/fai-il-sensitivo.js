/*
  Fai il sensitivo
  Scrivi una funzione che calcoli la vicinanza tra tre numeri: A, B e N, e restituisca:
    - 0 Se A e B sono equidistanti da N
    - 1 Se B è più vicino a N rispetto ad A
    - -1 Se A è più vicino a N rispetto a B

  Variante:
  Utilizza questa funzione per creare un programma che simuli un gioco tra due utenti:
  vince chi indovina per primo il numero N che verrà generato casualmente tra 1 e 100.

  Consigli per la variante:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".
  Se non ricordi come richiedere all'utente un valore in input, rivedi l'esercizio sugli array "Azzecca e azzera"

  
*/

const N = Math.floor(Math.random() * (100 - 1) + 1)

const A = 47
const B = 53

const isCloser = (a, b, n) => {
  if (Math.abs(a - n) < Math.abs(b - n)) {
    console.log(-1)
  } else if (Math.abs(a - n) > Math.abs(b - n)) {
    console.log(1)
  } else {
    console.log(0)
  }
}

console.log("A = " + A, "B = " + B, "N = " + N)
isCloser(A, B, N)
