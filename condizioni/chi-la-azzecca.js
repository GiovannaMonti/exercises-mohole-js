/*
  Chi l'azzecca?
  Scrivi un programma che dati due numeri di due ipotetici giocatori,
  generi un numero casuale compreso tra 1 e 100 (zero escluso),
  verifichi se uno dei due giocatori ha azzeccato il numero casuale,
  e in caso contrario quale dei due si è avvicinato di più al numero.

  Esempio:
    Input: giocatore 1 = 5, giocatore 2 = 10
    Output: Numero casuale generato = 7
            "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!"

  Consigli:
  Per generare un numero casuale utlizza la funzione javascript Math.random() che restituisce un intervallo compreso tra 0 e 1.
  Il valore ottenuto dovrà essere convertito per ottenere un valore valido per il tuo intervallo, in questo modo:
    (Math.random() * (max-min) + min) ovvero, nel tuo caso:
    (Math.random() * (100-1) + 1)
  Ricordati che il valore dovrà essere intero quindi dovrai arrontondarlo usando Math.floor()

*/

const random = Math.floor(Math.random() * (100 - 1) + 1)
console.log("Numero casuale generato = " + random)

const player1 = 70
const player2 = 55

// caso 1: i giocatori hanno scommesso due numeri diversi
if (player1 !== player2) {
  // se qualcuno ha azzeccato
  if (player1 === random) {
    console.log("Il giocatore 1 ha azzeccato il numero")
  } else if (player2 === random) {
    console.log("Il giocatore 2 ha azzeccato il numero")
  }
  // se nessuno ha azzeccato
  else if (Math.abs(random - player1) < Math.abs(random - player2)) {
    console.log(
      "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!"
    )
  } else if (Math.abs(random - player1) > Math.abs(random - player2)) {
    console.log(
      "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più!"
    )
  } else {
    // se la differenza è la stessa
    console.log(
      "Nessuno dei due giocatori ha azzeccato il numero casuale, ma si sono avvicinati ad esso della stessa misura"
    )
  }

  // caso 2: i giocatori hanno scommesso lo stesso numero
} else {
  if (player1 === random) {
    console.log("Entrambi i giocatori hanno azzeccato il numero")
  } else {
    console.log(
      "Nessuno dei due giocatori ha azzeccato il numero casuale, ma si sono avvicinati ad esso della stessa misura"
    )
  }
}
