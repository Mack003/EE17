window.onload = start;

function start() {
    /* Element vi jobbar med */
    const eKnapp = document.querySelector("button");
    const eRuta1 = document.querySelector("#ruta1");
    const eRuta2 = document.querySelector("#ruta2");
    const eBild = document.querySelector("img")

/* Lista på spelkaraktärer */
    let karak = [
        "Sonic",    // 0
        "Mario",   // 1
        "Cortana",  // 2
        "Luigi",    // 3
        "Zelda",    // 4
        "Kirby",    // 5
        "Sans",    // 6
        "Gordon Freeman",  // 7
        "Agent 47",   // 8
        "Spyro",    // 9
    ];
    let bilder = [
        "https://www.gamedesigning.org/wp-content/uploads/2016/12/Sonic-the-Hedgehog.jpg",
        "https://www.gamedesigning.org/wp-content/uploads/2016/12/Mario.jpg",
        "https://www.gamedesigning.org/wp-content/uploads/2016/12/Cortana.jpg",
        "https://steamuserimages-a.akamaihd.net/ugc/930428065185975781/DF795BA039CEA94B15B3B1AF64690CD9D6DDAA94/?interpolation=lanczos-none&output-format=jpeg&output-quality=95&fit=inside%7C637%3A358&composite-to=*,*%7C637%3A358&background-color=black",
        "https://www.gamedesigning.org/wp-content/uploads/2016/12/Link.png",
        "https://cdn.vox-cdn.com/thumbor/zNNSOdT4_FMLuQODoLzpczHd-1w=/0x8:503x343/1200x800/filters:focal(0x8:503x343):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/32297631/3562006-1931474080-kirby.0.gif",
        "https://i.kym-cdn.com/entries/icons/original/000/026/589/sans_thumbnail.png",
        "https://www.gamedesigning.org/wp-content/uploads/2016/12/Gordon-Freeman.jpg",
        "https://www.gamedesigning.org/wp-content/uploads/2016/10/Agent-47.jpg",
        "https://www.gamedesigning.org/wp-content/uploads/2016/12/Spyro.png",
    ]

/* Lyssna på knappen */
    eKnapp.addEventListener("click", slumpa)

    function slumpa() {
    /* Skapa ett slumptal 1-10 */
        let slumptal = Math.ceil(Math.random() * 10 - 1);
    /* Skriv ut i rutan */
        eRuta1.value = karak[slumptal]
        eRuta2.value = slumptal;
        eBild.src = bilder[slumptal];
        
    }
}