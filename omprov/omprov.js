window.onload = start;

function start() {
    /* Element vi jobbar med */
    const eTal = document.querySelector('#tal');
    const eFarg = document.querySelector('#farg');
    const eNamn = document.querySelector('#namn');
    const eAdjektiv = document.querySelector('#adjektiv');
    const eKnapp = document.querySelector('button');
    const eFel = document.querySelector('.fel');
    const eOutput = document.querySelector('.output');

    /* Lyssna när knappen blir tryckt */
    eKnapp.addEventListener('click', skapa);

    /* Läs innehåll av input */


    function skapa() {
        /* Läs innehåll av input */
        let talet = (eTal.value);
        console.log(eTal.value);
        let fargen = (eFarg.value);
        console.log(eFarg.value);
        let namnet = (eNamn.value);
        console.log(eNamn.value);
        let adjektivet = (eAdjektiv.value);
        console.log(eAdjektiv.value);

        /* Rensa fel loggen för varje tryck */
        eFel.innerHTML = "";


        /* varna om Talet är fel */
                /* Mata in meningen */
        eOutput.textContent = "Idag åt jag " + talet + " frallor till fukost. jag blev alldeles " + fargen + " i ansiktet. " + namnet + " sa att jag är en " + adjektivet + " kille.";

        if (talet < 1) {
            eFel.innerHTML += "Talet måste vara större än 1" + '</br>';
            eOutput.textContent = "";
            
        }
        if (talet > 10) {
            eFel.innerHTML += "Talet måste vara mindre än 11" + '</br>';
            eOutput.textContent = "";
        }
        /* Varna om färgen är fel */
        if (fargen != "röd"&&fargen != "gul"&&fargen != "blå") {
            eFel.innerHTML += "Färgen måste vara röd, gul eller blå" + '</br>';
            eOutput.textContent = "";
        }


    }
}
