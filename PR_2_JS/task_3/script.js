const text = "Never gonna give you up".split("");
const outputElement = document.getElementById("text");
let i = 0;

let interval = setInterval(() => {
    outputElement.textContent = outputElement.textContent + text[i];
    i++;
}, 100);

setTimeout(() => {
    clearInterval(interval);
}, text.length * 100);