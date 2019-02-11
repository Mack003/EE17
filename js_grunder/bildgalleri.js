/* 
* När man klickar på en knapp byts bilden ut till aktuell bild.
*/

/* När webbsidan laddats klart kör start() */
window.onload = start;

/* Start-delen */
function start() {

    /* Vilka element arbetar vi med? */
    const elementImg = document.querySelector('.bild img');
    const elementP = document.querySelector('.bild p');
    const elementMiniatyr1 = document.querySelector('.knapp1');
    const elementMiniatyr2 = document.querySelector('.knapp2');
    const elementMiniatyr3 = document.querySelector('.knapp3');
    const elementMiniatyr4 = document.querySelector('.knapp4'); 

    /* Vilka händelser behöver vi lyssna på? */
    elementMiniatyr1.addEventListener('click', visaBild);
    elementMiniatyr2.addEventListener('click', visaBild);
    elementMiniatyr3.addEventListener('click', visaBild);
    elementMiniatyr4.addEventListener('click', visaBild);

    /* Vad ska hända när man klickat på knapp1? */
    function visaBild() {
        console.log(this.dataset.bild);

        /* elementImg.src = './bilder/JPEG/Lester Side Gap.jpg';
        elementP.textContent = 'Photo by Marcus Åkerman'; */
    }

}