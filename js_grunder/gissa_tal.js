/* Skapa ett slumptal mellan 1 och 100 */
var slumptal = Math.ceil(Math.random() * 100);
console.log('Nytt slumptal: ' + slumptal);
/* Våra Globala variabler */
var elementGissning = document.querySelector('#gissning');
var elementSvar = document.querySelector('#svar');
var eleBody = document.querySelector('body');

/* Reagera när man trycker på knappen */
function gissa() {
    /* läsa av gissningen */
    var gissning = elementGissning.value;
    console.log('Gissningen; ' + gissning);
    /* Om gissning = talet, då har man vunnit */
    if (gissning == slumptal) {
    
    /* Skriv i andra input rutan */
        elementSvar.textContent = "Du vann!";
    }
    /* om gissning > talet - "För högt" */
    if (gissning > slumptal) {
        
        elementSvar.textContent = "För högt!";
    }
    /*om gissning < talet - "För lågt"*/
    if (gissning < slumptal) {
        
        elementSvar.textContent = "För högt!";
    }
    /* om gissning > 100, skriv ut "är du dum?" */
    if (gissning > 100) {
        
        elementSvar.textContent = "Är du dum?";
        
        eleBody.style.backgroundImage = 'url("./bilder/giphy.gif")';
        eleBody.style.backgroundSize = 'cover';
    }
}