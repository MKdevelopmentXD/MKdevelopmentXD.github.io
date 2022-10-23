let bet = +prompt("Введіть ставку");

while (bet <= 0 || isNaN(bet)) {
    alert("Введіть коректну суму");
    bet = +prompt("Введіть ставку");
}

setTimeout(() => {
    if (rand <= 0) document.write("Ви програли");
    else document.write(`Ви виграли ${bet * rand}`);
}, 1000);

const rand = Math.floor(Math.random() * (5 - -5 + 1) - 5);
console.log(rand);