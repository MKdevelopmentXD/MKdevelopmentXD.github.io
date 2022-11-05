let imagesList = [
    {
        url: "1.webp",
        title: "Осінній жіночий костюм із тринитки на флісі",
        description: "Осінній жіночий костюм з тринитки тканини на флісі. Має стильний та молодіжний вигляд. Ідеально підійде на повсякденне осіннє життя.",
    },
    {
        url: "2.webp",
        title: "Стильна жіноча біла сорочка",
        description: "Стильна красива жіноча сорочка з написом у стразах Paris. Рукав довгий, можна зробити три чверті та застебнути на ґудзик. Колір молочний.",
    },
    {
        url: "3.webp",
        title: "Сорочка жіноча на гудзиках, зелена",
        description: "Яскрава сорочка, універсальна, вона чудово підходить як одяг на кожен день, і як одяг на вихід. Застібається на гудзики, рукав на манжеті з двома гудзиками.",
    },
];

function initPhotoRotator(identificator, list) {
    let i = 0;

    const rotator = document.getElementById(identificator);

    const headerRotator = document.createElement("div");
    const numberPhotoFromList = document.createElement("p");
    const image = document.createElement("img");

    const leftSide = document.createElement("div");
    const rightSide = document.createElement("div");

    const btnPrev = document.createElement("button");
    const btnNext = document.createElement("button");
    const titleParagraph = document.createElement("p");
    const descriptionParagraph = document.createElement("p");

    headerRotator.classList.add("container_picture");
    leftSide.classList.add("algin_items_center");
    rightSide.classList.add("algin_items_center");
    titleParagraph.classList.add("title");
    descriptionParagraph.classList.add("description");

    numberPhotoFromList.textContent = `Фото ${i + 1} з ${list.length}`;
    titleParagraph.textContent = list[0].title;
    descriptionParagraph.textContent = list[0].description;
    btnPrev.textContent = "Назад";
    btnNext.textContent = "Вперед";
    image.src = list[0].url;

    btnPrev.disabled = true;

    if (imagesList.length == 1 || imagesList.length == 0) btnNext.disabled = true;


    btnPrev.addEventListener("click", () => {
        btnNext.disabled = false;
        i--;

        if (i == 0) btnPrev.disabled = true;
        numberPhotoFromList.textContent = `Фото ${i + 1} з ${list.length}`;
        titleParagraph.textContent = list[i].title;
        descriptionParagraph.textContent = list[i].description;

        image.src = list[i].url;
    });

    btnNext.addEventListener("click", () => {
        btnPrev.disabled = false;
        i++;
        if (i == list.length - 1) btnNext.disabled = true;

        numberPhotoFromList.textContent = `Фото ${i + 1} з ${list.length}`;

        titleParagraph.textContent = list[i].title;
        descriptionParagraph.textContent = list[i].description;

        image.src = list[i].url;
    });

    leftSide.appendChild(btnPrev);
    rightSide.appendChild(btnNext);

    headerRotator.appendChild(numberPhotoFromList);
    headerRotator.appendChild(image);
    headerRotator.appendChild(titleParagraph);
    headerRotator.appendChild(descriptionParagraph);

    rotator.appendChild(leftSide);
    rotator.appendChild(headerRotator);
    rotator.appendChild(rightSide);
}

initPhotoRotator("rotator", imagesList);