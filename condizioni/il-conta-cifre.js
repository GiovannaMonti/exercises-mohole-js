/*
  Il conta cifre
  Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

  
*/

const input = 98
input > 0
  ? console.log(input.toString().length + " cifre")
  : console.log(input.toString().length - 1 + " cifre") // non conto il '-'

// non penso che questa fosse la soluzione desiderata

// prendo come assunto che il numero sia positivo e <=9999

if (input >= 0) {
  if (input <= 9) {
    console.log("1 cifra")
  } else if (input > 9 && input <= 99) {
    console.log("2 cifre")
  } else if (input > 99 && input <= 999) {
    console.log("3 cifre")
  } else {
    console.log("4 cifre")
  }
}
