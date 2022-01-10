/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73
  
*/

const currentYear = 2018
const birthYear = 1991

const age = currentYear - birthYear
console.log(age)

const missing = 100 - age
console.log(missing)
