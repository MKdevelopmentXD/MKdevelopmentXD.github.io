const aboutPlayer = {
    countTrue: 0,
    countFalse: 0,
    countQuestions: 0,
    answeredQuestion: false,
};
let num1;
let num2;

const questionParagraph = document.querySelector(".question");

const resultParagraph = document.querySelector(".statistic");

const form = document.querySelector("form");

document.addEventListener("DOMContentLoaded", () => {
    setNewValue();
});

function setRandomValues() {
    const percentProgress =
        aboutPlayer.countTrue != 0
            ? Math.floor(aboutPlayer.countTrue * 100) / aboutPlayer.countQuestions
            : 0;

    resultParagraph.textContent = `Загальний рахунок ${percentProgress} (${aboutPlayer.countTrue} правильних відповідей з ${aboutPlayer.countQuestions})`;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
});

form.variantAnswer.forEach((el) => {
    el.addEventListener("click", (e) => {
        if (aboutPlayer.answeredQuestion) return;

        if (el.value == num1 * num2) {
            aboutPlayer.countTrue += 1;
            form.lastElementChild.textContent = "Правильно";
        } else {
            form.lastElementChild.textContent = `Не правильно, правильний варіант ${num1 * num2}`;
            aboutPlayer.countFalse += 1;
        }

        aboutPlayer.countQuestions++;
        aboutPlayer.answeredQuestion = true;
        setRandomValues();
    });
});

form.nextAnswer.addEventListener("click", () => {
    setNewValue();
    aboutPlayer.answeredQuestion = false;
    form.lastElementChild.textContent = "";
    form.reset();
});

function setNewValue() {
    num1 = getRandomInt(1, 9);
    num2 = getRandomInt(1, 9);

    let trueAnswer = num1 * num2;

    questionParagraph.textContent = `${num1} x ${num2} =`;

    const answers = [
        trueAnswer,
        getRandomInt(trueAnswer - 10, trueAnswer - 1),
        getRandomInt(trueAnswer + 1, trueAnswer + 10),
        getRandomInt(trueAnswer + 1, trueAnswer + 5),
    ];
    shuffle(answers);
    trueAnswer = 0;
    form.variantAnswer.forEach((el) => {
        el.nextElementSibling.textContent = answers[trueAnswer];
        el.value = answers[trueAnswer];
        trueAnswer++;
    });
}

function shuffle(arr) {
    const count = getRandomInt(3, 24);

    for (let k = 0; k < count; k++) {
        let lastElement = arr[arr.length - 1];
        for (let i = arr.length - 1; i > 0; i--) {
            arr[i] = arr[i - 1];
        }
        arr[0] = lastElement;
    }
}