/*
  Metti un po' d'ordine
  Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

  Esempio:
    Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
    Output: [8, 7, 6, 5, 5, 3, 2, 1, -4, -2]

  Variante:
  Prova ad ordinali in modo crescente.

  Consigli:
  Ti consiglio di non usare il metodo sort per questo esercizio ma di provare a scrivere tu il codice per ordinare gli array,
  usando if e cicli ;)

  
*/

const array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]

// decrescente
for (let a = 0; a < array.length - 1; a++) {
  let temp
  for (let b = a + 1; b < array.length; b++) {
    if (array[a] < array[b]) {
      temp = array[a]
      array[a] = array[b]
      array[b] = temp
    }
  }
}
console.log(array)

// crescente: cambia solo la condizione dell'if --> if (array[b] < array[a])
for (let a = 0; a < array.length - 1; a++) {
  let temp
  for (let b = a + 1; b < array.length; b++) {
    if (array[b] < array[a]) {
      temp = array[a]
      array[a] = array[b]
      array[b] = temp
    }
  }
}
console.log(array)
