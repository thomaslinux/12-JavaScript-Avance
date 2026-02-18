let characters = [];

async function getCommunes() {
    let httpResponse = await fetch("https://geo.api.gouv.fr/communes", {method: 'GET'})

    if(httpResponse.status === 200 && httpResponse.ok) {
        return httpResponse.json();
    } else {
        // gestion des erreurs
    }
}

async function displayCommunes() {
    let data = await getCommunes();
    console.log(data);
    for(const communes of data) {
        const p = document.createElement("p");
        p.innerText = communes.nom;
        const div = document.createElement("div");
        div.id = communes.nom;

        div.append(p);
        document.body.append(div);
    }

}

displayCommunes();

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