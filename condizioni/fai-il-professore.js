/*
  Fai il professore
  Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
    v < 18: insufficiente
    18 <= v < 21: sufficiente
    21 <= v < 24: buono
    24 <= v < 27: distinto
    27 <= v <= 29: ottimo
    v = 30: eccellente
  Utilizza costrutto If.

  Esempio:
    Input: v = 29
    Output: Distinto

  Variante
  Realizzare una versione con il costrutto Switch-Case. In questo caso gestire anche il caso in cui il voto inserito non sia valido.

  
*/

const voto = 23

switch (true) {
  case voto < 18:
    console.log("Insufficiente")
    break
  case voto >= 18 && voto <= 21:
    console.log("Sufficiente")
    break
  case voto > 21 && voto <= 24:
    console.log("Buono")
    break
  case voto > 24 && voto <= 27:
    console.log("Distinto")
    break
  case voto > 27 && voto <= 29:
    console.log("Ottimo")
    break
  case voto === 30:
    console.log("Eccellente")
    break
  default:
    console.log("Voto inserito non valido")
}
