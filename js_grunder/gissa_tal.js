/* Skapa ett slumptal mellan 1 och 100 */
var slumptal = Math.ceil(Math.random() * 100);
console.log('Nytt slumptal: ' + slumptal);

/* Antalet försök */
var antal = 0;

/* Våra Globala variabler */
var elementGissning = document.querySelector('#gissning');
var elementSvar = document.querySelector('#svar');
var eleBody = document.querySelector('body');

/* Reagera när man trycker på knappen */
function gissa() {

    /* Räkna upp */
    antal++;

    /* läsa av gissningen */
    var gissning = elementGissning.value;
    console.log('Gissningen; ' + gissning);

    /* Om gissning = talet, då har man vunnit */
    if (gissning == slumptal) {
        svar = '<p class="ratt">' + antal + ') ' + gissning + ' är korrekt! </p>';
        elementSvar.insertAdjacentHTML('beforeend', svar);

        /* Stäng av knappen */
        
    }

    /* om gissning > talet - "För högt" */
    if (gissning > slumptal) {
        svar = '<p class="hogt">' + antal + ') ' + gissning + ' är för högt! </p>';
        elementSvar.insertAdjacentHTML('beforeend', svar);
    }
    /*om gissning < talet - "För lågt"*/
    if (gissning < slumptal) {
        svar = '<p class="lagt">' + antal + ') ' + gissning + ' är för lågt! </p>';
        elementSvar.insertAdjacentHTML('beforeend', svar);
    }
    /* om gissning > 100, skriv ut "är du dum?" */
    if (gissning > 100) {

        svar = '<p class="dum">' + antal + ') ' + gissning + ' Är du dum? </p>';
        elementSvar.insertAdjacentHTML('beforeend', svar);

        eleBody.style.backgroundImage = 'url("./bilder/giphy.gif")';
        eleBody.style.backgroundSize = 'cover';
    }
}