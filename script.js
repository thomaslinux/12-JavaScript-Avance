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

    for(const element of data.tree) {
        if (element.path && element.path.includes("index.html")) {
            console.log(typeof element.path)

            const a = document.createElement("a");
            a.innerText = element.path;
            a.href = element.path;
            const div = document.createElement("div");
            div.id = element.path;
            
            div.append(a);
            document.querySelector("main").append(div);
        }
    }
    document.querySelector("footer").innerText += " JS 2025.02.27.23.52"

}

displayRepositoryData();