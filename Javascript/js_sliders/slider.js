window.onload = start;

function start() {
    /* Elementen vi jobbar med */
    const elementImg = document.querySelector('img')
    const elementBredd = document.querySelector('#width')
    const elementHojd = document.querySelector('#height')
    const elementOutput = document.querySelector('#output')

    /* Lyssna på när man drar i slidern */
    elementBredd.addEventListener('input', andraBredd);

    function andraBredd() {
        console.log(elementBredd.value);
        elementImg.width = elementBredd.value;
        elementOutput.textContent = '(' + elementBredd.value + 'x' + elementHojd.value + ')';
    }    
        /* Lyssna på när man drar i slidern */
        elementHojd.addEventListener('input', andraHojd);
    
        function andraHojd() {
            console.log(elementHojd.value);
            elementImg.height = elementHojd.value;
            elementOutput.textContent = '(' + elementBredd.value + 'x' + elementHojd.value + ')';
        }
    }