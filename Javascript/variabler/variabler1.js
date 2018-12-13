window.onload = start;

function start() {
    /* element vi jobbar med */
    const eRuta1 = document.querySelector("#ruta1");
    const eRuta2 = document.querySelector("#ruta2");
    const eKnapp1 = document.querySelector("#knapp1");
    const eKnapp2 = document.querySelector("#knapp2");
    const eRuta3 = document.querySelector("#ruta3");
    const eRuta4= document.querySelector("#ruta4");

    /* Lyssna på knapp 1 */
    eKnapp1.addEventListener("click", addera);
    function addera() {
        /* Läsa av innehåll på rutorna */
        let tal1 = Number(eRuta1.value);
        let tal2 = Number(eRuta2.value);

        /* Addera tal 1 + tal 2 */
        let summa1 = tal1 + tal2;

        /* Skriv ut summa i ruta3 */
        eRuta3.value = summa1;
    }
    eKnapp2.addEventListener("click", subtrahera);
    function subtrahera() {
        /* Läsa av innehåll på rutorna */
        let tal1 = Number(eRuta1.value);
        let tal2 = Number(eRuta2.value);

        /* Subtrahera tal 1 + tal 2 */
        let summa2 = tal1 - tal2;

        /* Skriv ut summa i ruta4 */
        eRuta4.value = summa2;
    }
}