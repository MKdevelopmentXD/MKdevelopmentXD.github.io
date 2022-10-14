let inputName = document.getElementById("inputName");

function show() {
    console.clear()
    inputName.style.display = "block"
}

let sub = document.getElementById("sub");
let ice = document.getElementById("ice");
let choco = document.getElementById("choco");
let icecream = document.getElementById("icecream");
let chocolate = document.getElementById("chocolate");

function Change() {
    console.clear()
    sub.innerHTML = "Ви обрали: " + ((ice.checked) ? icecream.textContent : chocolate.textContent);
}
