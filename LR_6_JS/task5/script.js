(function () {

    let resetButton = document.getElementById('captcha-button');

    resetButton.onclick = function () {
        initCaptcha('captch-body', 5);
    }

    initCaptcha('captch-body', 5);

    function initCaptcha(id, count) {
        let captchaEl = document.getElementById(id),
            viewEl = document.createElement('div'),
            inputWrapper = document.createElement('div'),
            statusEl = document.createElement('div'),
            input = document.createElement('input'),
            numbers = [];

        captchaEl.innerHTML = '';

        captchaEl.style.display = 'inline-block';

        inputWrapper.appendChild(input);

        captchaEl.appendChild(viewEl);
        captchaEl.appendChild(inputWrapper);
        captchaEl.appendChild(statusEl);

        viewEl.style.display = 'inline-block';
        viewEl.style.minWidth = '200px';
        viewEl.style.border = '2px solid lightgrey';

        input.style.minWidth = '200px';

        statusEl.style.textAlign = 'center';

        let pixels = {
            0: [
                [1, 1, 1],
                [1, 0, 1],
                [1, 0, 1],
                [1, 0, 1],
                [1, 1, 1]
            ],
            1: [
                [1, 1],
                [0, 1],
                [0, 1],
                [0, 1],
                [0, 1]
            ],
            2: [
                [1, 1, 1],
                [0, 0, 1],
                [1, 1, 1],
                [1, 0, 0],
                [1, 1, 1]
            ],
            3: [
                [1, 1, 1],
                [0, 0, 1],
                [0, 1, 0],
                [0, 0, 1],
                [1, 1, 1]
            ],
            4: [
                [1, 0, 1],
                [1, 0, 1],
                [1, 1, 1],
                [0, 0, 1],
                [0, 0, 1]
            ],
            5: [
                [1, 1, 1],
                [1, 0, 0],
                [1, 1, 1],
                [0, 0, 1],
                [1, 1, 1]
            ],
            6: [
                [1, 1, 1],
                [1, 0, 0],
                [1, 1, 1],
                [1, 0, 1],
                [1, 1, 1]
            ],
            7: [
                [1, 1, 1],
                [0, 0, 1],
                [0, 1, 0],
                [0, 1, 0],
                [0, 1, 0]
            ],
            8: [
                [1, 1, 1],
                [1, 0, 1],
                [1, 1, 1],
                [1, 0, 1],
                [1, 1, 1]
            ],
            9: [
                [1, 1, 1],
                [1, 0, 1],
                [1, 1, 1],
                [0, 0, 1],
                [1, 1, 1]
            ],
            space: [
                [0],
                [0],
                [0],
                [0],
                [0]
            ]
        }

        init();

        input.oninput = check;

        function init() {
            let pix = [];

            for (let i = 0; i < count; i++) {
                let number = randomInteger(0, 9);
                numbers.push(number);

                pix.push(pixels[number]);

                if (i != count - 1) {
                    pix.push(pixels.space);
                }
            }

            draw(pix);
        }

        function draw(pix) {
            for (let i = 0; i < 5; i++) {
                let row = document.createElement('div');
                row.style.height = '5px';
                row.style.position = 'relative';
                row.style.top = '-9px';

                for (let j = 0; j < pix.length; j++) {
                    for (let l = 0; l < pix[j][i].length; l++) {
                        let el = document.createElement('span');

                        el.style.display = 'inline-block';
                        el.style.width = '5px';
                        el.style.height = '5px';

                        if (pix[j][i][l] == 1) {
                            el.style.background = 'red';
                        }

                        row.appendChild(el);
                    }
                }

                viewEl.appendChild(row);
            }
        }

        function check() {
            let result = input.value.trim().split('');

            if (result.length != numbers.length) {
                statusEl.innerHTML = 'Помилка!';
                statusEl.style.color = 'red';
            } else {
                for (let i = 0; i < result.length; i++) {
                    if (result[i] != numbers[i]) {
                        statusEl.innerHTML = 'Помилка!';
                        statusEl.style.color = 'red';

                        return;
                    }
                }

                statusEl.innerHTML = 'Вірно!';
                statusEl.style.color = 'green';
            }
        }
    }
})();

//Additional functions

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

function shuffle(arr) {
    arr.sort(function () {
        return randomInteger(-3, 3)
    });
}