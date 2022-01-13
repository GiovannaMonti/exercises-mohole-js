/*
  Il carcere di Gotham City
  Sei appena stato nominato direttore presso il carcere di Gotham City.
  Hai l'arduo compito di scrivere un programma che gestisca:
  - I dati anagrafici delle guardie
  - I dati anagrafici dei detenuti
  - I fascicoli personali dei detenuti, che devono contenere almeno queste informazioni:
      - Un identificativo del criminale
      - La data di carcerazione
      - La data di scarcerazione
      - Il crimine commesso

  Visto che sei tu il capo, decidi se usare lo stesso oggetto per gestire sia le guardie che i criminali.
  In ogni caso dovrai definire la banca dati della prigione: crea un array di guardie, uno di detenuti e uno per i fascicoli.

  Prevedi la possibilità di:
    - Assumere nuove guardie
    - Schedare nuovi carcerati
    - Aggiungere nuovi fascicoli
    - Visualizzare l'elenco per ciascuna categoria (guardie, criminali, fascicoli)
    - Effettuare ricerche nei fascicoli per nome del detenuto

  Nel carcere di Gothma City non tutti i detenuti arrivano alla data di scarcerazione,
  gestisci l’eventualità in cui un detenuto sia evaso e quella in cui sia deceduto.

  Scrivi una funzione di riepilogo dell'andamento del carcere e che stampi:
    - il numero delle guardie,
    - il numero di detenuti totali,
    - il numero di detenuti evasi,
    - il numero di detenuti deceduti all’interno della struttura.
  
*/
let guardie = [
  {
    nome: "Marta",
    cognome: "Severa",
    nascita: "30/06/1986",
  },
  {
    nome: "Riccardo",
    cognome: "Massi",
    nascita: "10/07/1989",
  },
]

let detenuti = [
  {
    id: "gm56",
    nome: "Giuseppe",
    cognome: "Mariuolo",
    nascita: "13/09/1956",
  },
  {
    id: "am96",
    nome: "Aldo",
    cognome: "Missi",
    nascita: "18/01/1996",
  },
  {
    id: "cp78",
    nome: "Ciccio",
    cognome: "Pannocchi",
    nascita: "25/11/1978",
  },
]

let fascicoli = [
  {
    id: "gm56",
    carcerazione: "12/12/2021",
    scarcerazione: null,
    crimine: "omicidio",
    evaso: true,
    deceduto: false,
  },
  {
    id: "am96",
    carcerazione: "31/05/2020",
    scarcerazione: "31/05/2021",
    crimine: "furto",
    evaso: false,
    deceduto: false,
  },
  {
    id: "cp78",
    carcerazione: "27/11/2010",
    scarcerazione: null,
    crimine: "corruzione",
    evaso: false,
    deceduto: true,
  },
]

const nuovaGuardia = (nome, cognome, nascita) => {
  guardie.push({
    nome: nome,
    cognome: cognome,
    nascita: nascita,
  })
}
const nuovoCarcerato = (
  id,
  nome,
  cognome,
  nascita,
  carcerazione,
  scarcerazione,
  crimine,
  evaso,
  deceduto
) => {
  detenuti.push({
    id: id,
    nome: nome,
    cognome: cognome,
    nascita: nascita,
  })
  fascicoli.push({
    id: id,
    carcerazione: carcerazione,
    scarcerazione: scarcerazione,
    crimine: crimine,
    evaso: evaso,
    deceduto: deceduto,
  })
}
