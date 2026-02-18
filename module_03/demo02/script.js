fetch("https://hp-api.onrender.com/api/characters")
    .then((httpResponse) => httpResponse.json())
    .then((data) => {
        console.log(data);
    })