function getIssPosition() {
    fetch('http://api.open-notify.org/iss-now.json')
        .then(httpResponse => httpResponse.json())
        .then(data => {
            console.log(data);
            document.getElementById('position').innerText = `Latitude = ${data.iss_position.latitude}, Longitude = ${data.iss_position.longitude}`;
        })
}

getIssPosition()