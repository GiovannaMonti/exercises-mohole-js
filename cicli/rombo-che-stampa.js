/*
  Rombo che stampa!
  Scrivi un programma che dato un numero dispari stampi un rombo di lettere.

  Esempio:
    Input : 5
    Output:
            X
           XXX
          XXXXX
           XXX
            X

  Consiglio:
  Per indentare puoi usare il tab con '\t'.
  
*/

const num = 17

// parte superiore
for (let i = 1; i <= num - 2; i += 2) {
  let string = ""

  const tabCount = num - i / 2

  for (let j = tabCount; j > 0; j--) {
    string += " "
  }

  for (let k = 1; k <= i; k++) {
    string += "X"
  }

  console.log(string)
}

// parte inferiore
for (let i = num; i >= 1; i -= 2) {
  let string = ""

  const tabCount = num - i / 2

  for (let j = tabCount; j > 0; j--) {
    string += " "
  }

  for (let k = i; k >= 1; k--) {
    string += "X"
  }

  console.log(string)
}
