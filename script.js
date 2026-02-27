let characters = [];

async function getRepositoryData() {
    let httpResponse = await fetch("https://api.github.com/repos/thomaslinux/12-JavaScript-Avance/git/trees/master?recursive=1", {method: 'GET'})

    if(httpResponse.status === 200 && httpResponse.ok) {
        return httpResponse.json();
    } else {
        // gestion des erreurs
    }
}

async function displayRepositoryData() {
    let data = await getRepositoryData();

    document.body.innerText = data;
    // console.log(data);

    // for(const character of data) {
    //     const p = document.createElement("p");
    //     p.innerText = character.name;
    //     const img = document.createElement("img");
    //     if (character.image) {
    //         img.src = character.image;
    //     }
    //     // else {
    //     //     img.src = "https://http.cat/images/404.jpg"
    //     // }
    //         img.alt = "image de " + character.name

    //     const div = document.createElement("div");
    //     div.id = character.name;

    //     div.append(p);
    //     div.append(img);
    //     document.body.append(div);
    // }

}

displayRepositoryData();