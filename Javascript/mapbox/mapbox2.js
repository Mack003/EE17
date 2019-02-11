mapboxgl.accessToken = 'pk.eyJ1IjoibWFjazAxIiwiYSI6ImNqcGRxbGV5MDAxazczcG13MnV1anljbzQifQ.m-qf9FVhdid4CTUGh1zE8w';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mack01/cjpdr7lbi960m2rnymdvztbpc', // stylesheet location
    center: [18.042843, 59.281104], // starting position [lng, lat]
    zoom: 18 // starting zoom
});

var lista = [
    [18.042843, 59.281104],
    [18.052843, 59.281104],
    [18.062843, 59.281104]
];