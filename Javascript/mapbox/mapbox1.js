mapboxgl.accessToken = 'pk.eyJ1IjoibWFjazAxIiwiYSI6ImNqcGRxbGV5MDAxazczcG13MnV1anljbzQifQ.m-qf9FVhdid4CTUGh1zE8w';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mack01/cjpdr7lbi960m2rnymdvztbpc', // stylesheet location
    center: [18.042843, 59.281104], // starting position [lng, lat]
    zoom: 18 // starting zoom
});

var marker = new mapboxgl.Marker() // här lägger vi en marker
    .setLngLat([18.042843, 59.281104])//här ger vi markern en position
    .addTo(map);//lägg till marker till karta


var popup1 = new mapboxgl.Popup() // Här skapar vi en popup
    .setLngLat([17.905, 59.365]) // Här ger vi popupen en position
    .setHTML("<p>Min gata</p>") // Här skriver vi in texten
    .addTo(map); //här infogar vi popupen till kartan.

var popup2 = new mapboxgl.Popup({ //Här skapar vi en popup
    offset: 25
})
    .setHTML("<p>Här bor jag</p>"); // Här skriver vi in texten
    
var marker2 = new mapboxgl.Marker() // här lägger vi en marker
.setLngLat([18.046267, 59.337461])//här ger vi markern en position
.addTo(map);//lägg till marker till karta