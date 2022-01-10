/*
  Righe o colonne?
  Scrivi un programma che:
    - Prenda in input due numeri, N e M.
    - Generi una matrice di NxM popolata di valori casuali compresi tra 1 e 100.
    - Dichiari due array, l'array R di N elementi e l'array C di M elementi.
    - Salvi, nell'array R le somme di ogni riga della matrice e nell'array C le somme di tutte le colonne.
    - Stampi la matrice e i due array.

    Esempio:
      Input: N = 2, M = 3
      Output:
        matrice =
        [
          [1, 50, 100],
          [1, 20, 40],
        ]

        array R = [152, 61]
        array C = [2, 70, 140]

  
*/
const N = 2,
  M = 3

let R = [],
  C = []

let arrEsterno = []
for (let i = 0; i < N; i++) {
  let arrInterno = []
  // mentre creo la matrice posso già calcolare la somma delle righe
  let sommaRiga = 0
  for (let k = 0; k < M; k++) {
    const random = Math.floor(Math.random() * (100 - 1) + 1)
    sommaRiga += random
    arrInterno.push(random)
  }
  arrEsterno.push(arrInterno)
  R.push(sommaRiga)
}

// somma colonne
// tengo fissa la colonna ora
for (let k = 0; k < M; k++) {
  let sommaColonne = 0
  // andrò a vedere per ogni riga il valore della colonna
  for (let i = 0; i < N; i++) {
    sommaColonne += arrEsterno[i][k]
  }
  C.push(sommaColonne)
}

console.log(arrEsterno, R, C)
