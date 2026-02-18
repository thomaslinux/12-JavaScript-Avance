let characters = [];

async function getHarryPotterData() {
    let httpResponse = await fetch("https://hp-api.onrender.com/api/characters", {method: 'GET'})

    if(httpResponse.status === 200 && httpResponse.ok) {
        return httpResponse.json();
    } else {
        // gestion des erreurs
    }
}

async function displayHarryPotterData() {
    let data = await getHarryPotterData();
    console.log(data);

    for(const character of data) {
        const p = document.createElement("p");
        p.innerText = character.name;
        const img = document.createElement("img");
        if (character.image) {

            img.src = character.image;
            img.alt = "image de " + character.name
        } else {
            img.src = "https://http.cat/images/404.jpg"
            img.alt = "image non trouvée"
        }

        const div = document.createElement("div");
        div.id = character.name;

        div.append(p);
        div.append(img);
        document.body.append(div);
    }

}

displayHarryPotterData();

async function getUser() {
    return 'Michel';
}

    // .then((httpResponse) => httpResponse.json())
    // .then((data) => {
    //     console.log(data);
    //
    //     characters = data;
    //     console.log(characters);
    //
    //
    // }
    // )

// console.log(characters);