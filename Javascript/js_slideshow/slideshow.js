window.onload = start;
function start() {
    /* element vi jobbar med */
    const elementYta = document.querySelector('.yta');
    const elementVanster = document.querySelector('.fa-angle-left');
    const elementHoger = document.querySelector('.fa-angle-right');

    var bildLista = [
        './foton/ashim-d-silva-106276-unsplash.jpg',
        './foton/austin-neill-143200-unsplash.jpg',
        './foton/billy-williams-705767-unsplash.jpg',
        './foton/christian-wiediger-538644-unsplash.jpg',
        './foton/IMG_20170813_184824.jpg',
        './foton/jeremy-bishop-267960-unsplash.jpg',
        './foton/Joel dub side.jpg',
        './foton/Lester Side Gap.jpg'
    ];

    /* lyssna på knapparna */
    elementVanster.addEventListener('click', bytBild);
    elementHoger.addEventListener('click', bytBild);

    /* Byter bild */
    function bytBild() {
        console.log(this.dataset.riktning);
        
    }
}