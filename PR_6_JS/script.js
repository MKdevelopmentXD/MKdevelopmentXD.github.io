const header = document.querySelector("header");
const section = document.querySelector("section");

let requestURL = "https://semegenkep.github.io/json/example.json";

let request = new XMLHttpRequest();

request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function () {
    const superHeroes = request.response;
    console.log(superHeroes);
    populateHeader(superHeroes);
    showHeroes(superHeroes);
}


function populateHeader(jsonObject) {
    const h1 = document.createElement("h1");
    h1.textContent = jsonObject["squadName"];
    header.appendChild(h1);

    const p = document.createElement("p");
    p.textContent = "Hometown: " + jsonObject["homeTown"] + "//Formed: " + jsonObject["formed"];
    header.appendChild(p);
}

function showHeroes(jsonObject) {
    console.log("Buscamos", jsonObject);
    const heroes = jsonObject["members"];

    for (let i = 0; i < heroes.length; i++) {
        console.log("Gorda", heroes[i])
        const article = document.createElement("article");
        const h2 = document.createElement("h2");
        const P1 = document.createElement("p");
        const P2 = document.createElement("p");
        const P3 = document.createElement("p");
        const list = document.createElement("ul");

        h2.textContent = heroes[i].name;
        P1.textContent = "Secret identity: " + heroes[i].secretIdentity;
        P2.textContent = "Age: " + heroes[i].age;
        P3.textContent = "Superpowers: ";

        const superPowers = heroes[i].powers;
        for (let i = 0; i < superPowers.length; i++) {
            const listItem = document.createElement("li");
            listItem.textContent = superPowers[i];
            list.appendChild(listItem);
        }

        article.appendChild(h2);
        article.appendChild(P1);
        article.appendChild(P2);
        article.appendChild(P3);
        article.appendChild(list);

        section.appendChild(article);
    }
}