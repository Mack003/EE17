window.onload = start;

/* Start-delen */
function start() {

    const elementYes = document.querySelector('.yes');
    const elementNo = document.querySelector('.no')

    elementYes.addEventListener('click', yes);
    elementNo.addEventListener('click', no);

    
    
    function yes() {
        window.open("https://www.stopbullying.gov/cyberbullying/what-is-it/index.html");
        }
    function no() {
        window.open("https://media1.tenor.com/images/6ea6b181500935b3c70baf1748d2ecd4/tenor.gif");
    }
    }