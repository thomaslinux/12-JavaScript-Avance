fetch("https://hp-api.onrender.com/api/characters")
    .then((httpResponse) => httpResponse.text())
    .then((data) => {
        console.log(JSON.parse(data));
    })