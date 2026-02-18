let map, marker;
function getIssPosition(){

    fetch('http://api.open-notify.org/iss-now.json')
        .then((httpResponse) => httpResponse.json())
        .then((data) => {
            document.getElementById('position').innerText = `Latitude = ${data.iss_position.latitude}, Longitude = ${data.iss_position.longitude}`
            map.flyTo([data.iss_position.latitude,data.iss_position.longitude])
            marker.setLatLng([data.iss_position.latitude,data.iss_position.longitude])
        })
}
function init(){
    map = L.map('map').setView([48.03900045977704, -1.6923024930554964], 8);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);


    var issIcon = L.icon({
        iconUrl: 'assets/iss.png',
        iconSize:     [54, 54], // size of the icon
    });
    marker = L.marker([48.03900045977704, -1.6923024930554964], {icon: issIcon}).addTo(map);
    setInterval(getIssPosition, 1000)
}

window.onload = init


