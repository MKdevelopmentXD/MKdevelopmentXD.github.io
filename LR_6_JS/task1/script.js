var inputCel = document.getElementById("Cels");
var inputFar = document.getElementById("Far");

inputFar.oninput = function () {
    inputCel.value = Math.floor((inputFar.value - 32) * 5 / 9);
}

inputCel.oninput = function () {
    inputFar.value = Math.floor(inputCel.value * 1.8 + 32);
}