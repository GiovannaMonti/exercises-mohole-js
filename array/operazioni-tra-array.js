/*
  Operazioni tra array
  Scrivi un programma che dati:
  - 2 array di 10 elementi interi casuali compresi tra 1 e 10,
  - il tipo di operazione aritmetica da effettuare, una delle seguenti:
    addizione
    sottrazione
    moltiplicazione
    divisione
  Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array di appoggio.

  Esempio:
    Input: a = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione"
    Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".


  
*/

// creo e popolo array
let arr1 = Array(10),
  arr2 = Array(10)

let arrSomma = []
const operazione = "sottrazione"

for (let i = 0; i < arr1.length; i++) {
  arr1[i] = Math.floor(Math.random() * (10 - 1) + 1)
  arr2[i] = Math.floor(Math.random() * (10 - 1) + 1)

  switch (operazione) {
    case "addizione":
      arrSomma[i] = arr1[i] + arr2[i]
      break
    case "sottrazione":
      arrSomma[i] = arr1[i] - arr2[i]
      break
    case "divisione":
      arrSomma[i] = arr1[i] / arr2[i]
      break
    case "moltiplicazione":
      arrSomma[i] = arr1[i] * arr2[i]
      break
    default:
  }
}

console.log(
  "array1: " + arr1 + "\n",
  "array2: " + arr2 + "\n",
  "somma degli array: " + arrSomma
)
