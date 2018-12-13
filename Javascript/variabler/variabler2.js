window.onload = start;

function start() {
/* Element vi jobbar med */
    const eKnapp1 = document.querySelector("#knapp1");
    const eKnapp2 = document.querySelector("#knapp2");
    const eTalet = document.querySelector("#talet");

    /* Lyssna på knapparna */
    eKnapp1.addEventListener("click", raknaNed);
    eKnapp2.addEventListener("click", raknaUpp);

    function raknaNed() {
        let tal = Number(eTalet.value);

        let ned = tal - 1;

        eTalet.value = ned
    }
    function raknaUpp() {
        let tal = Number(eTalet.value);

        let upp = tal + 1;

        eTalet.value = upp;
    }
}