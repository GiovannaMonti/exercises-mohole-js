/*
  Menu dei dolci
  Scrivi un programma che dato il seguente menu (da stampare):
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia

  Prenda in input un valore numerico che rappresenti la scelta e restituisca:
    - se la scelta non è tra quelle elencate la scritta 'Dolce non disponibile',
    - altrimenti la scelta effettuata 'Hai scelto il dolce X'.


  Esempi:
    Input: scelta = 4
    Output: Hai scelto il dolce Macedonia

    Input: scelta = 7
    Output: Dolce non disponibile

*/

const menu = [
  "1. Tiramisù",
  "2. Torta della nonna",
  "3. Cheesecake alla nutella",
  "4. Macedonia",
]

const input = 2

if (menu[input - 1]) {
  console.log("Hai scelto il dolce " + menu[input - 1].substring(3))
} else {
  console.log("Dolce non disponibile")
}
