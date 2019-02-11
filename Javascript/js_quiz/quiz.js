window.onload = start;

function start() {
    /* Element vi använder  */
    const eOrdet = document.querySelector("#ordet");
    const eSvaret = document.querySelector("#svaret");
    const eKnappRatta = document.querySelector("#ratta");
    const eKnappNytt = document.querySelector("#nytt");
    const eOutput = document.querySelector("#output");

    /* En massa ord */
    let ordlistaEn = [
        "Fun",
        "Correct",
        "Easy",
        "Hungry",
        "Fast",
        "Car",
        "Library",
        "Cat",
        "Plane",
        "Holiday",
    ];
    let ordlistaSv = [
        "Kul",
        "Korrekt",
        "Lätt",
        "Hungrig",
        "Snabb",
        "Bil",
        "Bibliotek",
        "Katt",
        "Flygplan",
        "Semester",
    ];

    /* För att komma ihåg ordet och översättningarna */
    let ordetEn = "";
    let ordetSv = "";

    /* Slumpa fram ett ord */
    function slumpOrd() {
        let slumptal = Math.ceil(Math.random() * 10 - 1);
        ordetEn = ordlistaEn[slumptal];
        ordetSv = ordlistaSv[slumptal];
        
    }
    /* Kör funktionen och skapa slumpade ord */
    slumpOrd();
    console.log(ordetEn + " " + ordetSv);
    eOrdet.textContent = ordetEn;
    
    eKnappRatta.addEventListener("click", rattaSvar);
    function rattaSvar() {
        let svaret = eSvaret.value
        if (svaret == ordetSv) {
            eOutput.textContent = "Rätt svar!";
        } else {
            eOutput.textContent = "Fel svar";
        }
    }
    eKnappNytt.addEventListener("click", nyFraga);
    function nyFraga() {
        slumpOrd();
        eOrdet.textContent = ordetEn;
        eSvaret.value = "";
        eOutput.textContent = "";
    }
}