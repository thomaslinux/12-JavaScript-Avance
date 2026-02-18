fetch("https://hp-api.onrender.com/api/characters")
    .then((httpResponse) => httpResponse.json())
    .then((data) => {
        console.log(data);

        for(const character of data) {
            const p = document.createElement("p");
            p.innerText = character.name;
            const img = document.createElement("img");
            img.src = character.image;
            img.style.height = "240px"

            const div = document.createElement("div");
            div.id = character.name;


            div.append(p);
            div.append(img);
            document.body.append(div);
        }
    })