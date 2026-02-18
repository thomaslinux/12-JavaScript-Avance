function getIssPosition() {
    fetch('http://api.open-notify.org/iss-now.json')
        .then(httpResponse => httpResponse.json())
        .then(data => {
            document.getElementById('position').innerText = `Latitude = ${data.iss_position.latitude}, Longitude = ${data.iss_position.longitude}`;
            map.flyTo([data.iss_position.latitude, data.iss_position.longitude], map.getZoom());

            marker.setLatLng([data.iss_position.latitude, data.iss_position.longitude]);
        })
}


function init() {
    let map = L.map('map').setView([0, 0], 4);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    let issIcon = L.icon({
        iconUrl : './assets/iss.png',
        iconSize: [48,48]
    })

    let marker = L.marker([0, 0], {icon: issIcon}).addTo(map);

    setInterval(getIssPosition, 2000)
}

window.onload = init;