document.addEventListener("DOMContentLoaded", () => showTab(0));
let rtl = document.getElementById("rtl");

let rtr = document.getElementById("rtr");

let rbr = document.getElementById("rbr");

let rbl = document.getElementById("rbl");

let textBlock = document.querySelector("textarea");

let ttl = document.getElementById("ttl");

let ttr = document.getElementById("ttr");

let tbr = document.getElementById("tbr");

let tbl = document.getElementById("tbl");

let block = document.getElementById("block");


const styleValue = document.querySelector(".style_value");

const styleText = document.querySelector(".style_text");

rtl.addEventListener("input", generate);

rtr.addEventListener("input", generate);

rbr.addEventListener("input", generate);

rbl.addEventListener("input", generate);



styleValue.addEventListener("change", (e) => {
    styleText.style.listStyle = styleValue.value;
    styleValue.nextElementSibling.textContent = `text-decoration: ${styleValue.value};`;
});

function generate(e) {
    ttl.value = +rtl.value;
    ttr.value = +rtr.value;
    tbr.value = +rbr.value;
    tbl.value = +rbl.value;

    let result =
        ttl.value +
        "px " +
        ttr.value +
        "px " +
        tbr.value +
        "px " +
        tbl.value +
        "px";

    block.style.borderRadius = result;
    textBlock.value = "border-radius: " + result + ";";
}

document.querySelector(".tab-header").addEventListener("click", (e) => {
    if (!e.target.classList.contains("tab-h")) return;

    showTab(e.target.dataset.tab);
});

function showTab(index) {
    let indexTab = index;

    let tabsWithHeader = document.querySelectorAll(".tab-h");

    let tabWithContents = document.querySelectorAll(".tabContent");

    for (let i = 0; i < tabsWithHeader.length; i++) {
        tabsWithHeader[i].classList.remove("active");

        if (i == indexTab) tabWithContents[i].style.display = "block";
        else tabWithContents[i].style.display = "none";
    }
    tabsWithHeader[indexTab].classList.add("active");
}


var slider = document.getElementById("myRange");
var output = document.getElementById("value");
output.innerHTML = slider.value;



slider.oninput = function () {
    output.innerHTML = this.value;


    var lh = slider.value / 100;
    document.getElementById("words").style.lineHeight = lh;


    if (slider.value < 120) {
        document.getElementById("value").style.color = "#d65836";
        document.getElementById("percent").style.color = "#d65836";
    }
    else if (slider.value > 150) {
        document.getElementById("value").style.color = "#d65836";
        document.getElementById("percent").style.color = "#d65836";
    }

    else {
        document.getElementById("value").style.color = "#33765f";
        document.getElementById("percent").style.color = "#33765f";
    }

}


