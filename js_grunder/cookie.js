/* http://www.chinese-fortune-cookie.com/fortune-cookie-quotes.html */

/* När webbsidan laddats klart kör start() */
window.onload = start;

/* Start-delen */
function start() {

    /* Knapp 1: skriv ut en cookie i loggen */
    const elementLog = document.querySelector('.log');
    elementLog.addEventListener('click', infogaLog);

    function infogaLog() {
        console.log("Happy news is on its way to you.");

    }

    /* Knapp 2: skriv ut cookie i webbsidan */
    const elementDiv = document.querySelector('div');

    const elementWeb = document.querySelector('.web');
    elementWeb.addEventListener('click', infogaWeb);

    function infogaWeb() {
        elementDiv.textContent = 'You will witness a special ceremony.';

    }
    /* Knapp 3: skriv ut nya cookies en-efter-en som en lista */

    /* Slumpa fram cookies */
    const elementSlumpa = document.querySelector('.list');

    elementSlumpa.addEventListener('click', slumpaCookies)
    var cookies = [
        'Your everlasting patience will be rewarded sooner or later.',
        'Something you lost will soon turn up.',
        'As the purse is emptied the heart is filled.',
        'The time is right to make new friends.',
        'Anger begins with folly, and ends with regret.'
    ];
    function slumpaCookies() {
        var slumpTal = Math.ceil(Math.random() * 5 -1);
        elementDiv.innerHTML += cookies[slumpTal] + '<br>';
    }

}