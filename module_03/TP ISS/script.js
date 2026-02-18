setInterval( () => {
    fetch("http://api.open-notify.org/iss-now.json", {method: 'GET'})
        .then(httpReponse => httpReponse.json())
        .then(data => {
            // console.log(data)
            // console.log(data.iss_position)
            const HTML_latitude = document.getElementById("latitude");
            const HTML_longitude = document.getElementById("longitude");
            const latitude = data.iss_position.latitude;
            const longitude= data.iss_position.longitude;
            HTML_latitude.innerText = latitude;
            HTML_longitude.innerText = longitude;
            map.flyTo([latitude, longitude], map.getZoom());
            marker.setLatLng([latitude, longitude]);
        })
}, 5000)
let map = L.map('map').setView([0, 0], 2);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let issIcon = L.icon({
    iconUrl : './iss.png',
    iconSize: [48,48]
})

let marker = L.marker([0, 0], {icon: issIcon}).addTo(map);


// https://stackoverflow.com/questions/58663713/using-set-interval-and-fetch-in-a-function

