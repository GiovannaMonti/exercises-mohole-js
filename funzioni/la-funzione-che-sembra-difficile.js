/*
  La funzione che sembra difficile
  Scrivi una funzione che prenda in input due numeri N e K e restituisca la k-esima cifra (partendo da destra) di N.
  Se K è maggiore del numero delle cifre di N, la funzione restituirà 0.

  Esempio:
    Input : N = 123456, K = 3
    Output: 4

    
  
*/

const N = 2358387685
const K = 30

const trovaCifra = (n, k) => {
  n = n.toString()
  const digits = n.length

  if (k <= digits) {
    console.log(n[digits - k])
  } else {
    console.log("Il numero inserito è maggiore del numero di cifre esistenti")
  }
}

trovaCifra(N, K)
