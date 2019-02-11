window.onload = start;

function start() {
    const scrollFyll = document.querySelector(".scroll-indikator-fyll");

    window.addEventListener("scroll", () => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;

        let percentageScrolled = 100;

        if (scrollable = 0) {
            
            percentageScrolled = Math.ceil(scrolled / scrollable * 100);
        }

        scrollFyll.style.width = `${percentageScrolled}%`;
    });
}