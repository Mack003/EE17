window.onload = start
function start() {
    const elementKnapp1 = document.querySelector('.knapp2');
    const elementKnapp2 = document.querySelector('.knapp1');
    const elementIMG = document.querySelector('img')

    elementKnapp1.addEventListener('click', andraText)
    elementKnapp2.addEventListener('click', andraText)

    function andraText() {
        console.log(this.dataset.sko);
        elementImg.src = './bilder/Joel dub side-2.jpg'
         
    }
}