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

    // document.body.innerText = data.json();
    console.log(data);

    for(const element of data.tree) {
        const p = document.createElement("p");
        p.innerText = element.path;
        const div = document.createElement("div");
        div.id = element.path;

        div.append(p);
        document.body.append(div);
    }

}

displayRepositoryData();