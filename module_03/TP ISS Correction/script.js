function getIssPosition() {
    fetch('http://api.open-notify.org/iss-now.json')
        .then(httpResponse => httpResponse.json())
        .then(data => {
            console.log(data);
        })
}

getIssPosition()