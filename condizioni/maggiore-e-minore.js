/*
  Maggiore e minore
  Scrivi un programma che dati quattro numeri in input,
  restituisca in output il maggiore e il minore.

  Esempio:
    Input: a = 3, b = -1, c = 4, d = -2
    Output: maggiore = 4, minore = -2
    
*/

// suppongo di non poter usare cicli nè array...

const a = 3,
  b = -1,
  c = 4,
  d = -2

let max, min

if (a < b) {
  max = b
  min = a
} else {
  max = a
  min = b
}

if (max < c) {
  max = c
}
if (max < d) {
  max = d
}

if (min > c) {
  min = c
}
if (min > d) {
  min = d
}

console.log(min)
console.log(max)
