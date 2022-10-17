//--------------------------task 1--------------------------------
document.write("<div class=\"title\"><span>Завдання 1</span></div>");
let first = ["a", "b", "c"];
let second = [1, 2, 3];

document.write("Букви: " + first + "</br>");
document.write("Чиcла: " + second + "</br>");

var finish = second.concat(first);
document.write("Результат: " + finish);


//--------------------------task 2--------------------------------
document.write("<br><br>");
document.write("<div class=\"title\"><span>Завдання 2</span></div>");
var arr2 = ['a', 'b', 'c'];

document.write("Масив: " + arr2 + "</br>");
arr2.push(1, 2, 3);
document.write("Результат: " + arr2);

//--------------------------task 3--------------------------------
document.write("<br><br>");
document.write("<div class=\"title\"><span>Завдання 3</span></div>");
let arr3 = [1, 2, 3];
document.write("Початковий масив: " + arr3 + "</br>");
document.write("Реверс масиву: ");
for (i = arr3.length-1; i>=0 ; i--) {
    document.write(arr3[i] + ' ');
}


//--------------------------task 4--------------------------------
document.write("<br><br>");
document.write("<div class=\"title\"><span>Завдання 4</span></div>");
let arr4 = ['js', 'css', 'jq']
document.writeln("Масив: [ js, css, jq ]" + "</br>")
document.writeln("Останій елемент масиву: " + arr4[arr4.length - 1])

//--------------------------task 5--------------------------------
document.write("<br><br>");
document.write("<div class=\"title\"><span>Завдання 5</span></div>");
let arr5 = [1, 2, 3, 4, 5]
let arr5Update = arr5.slice(3, 5)

document.writeln("Масив:" + arr5 + "<br>")
document.writeln("Новий масив:" + arr5Update)

//--------------------------task 6--------------------------------
document.write("<br><br>");
document.write("<div class=\"title\"><span>Завдання 6</span></div>");
let arr6 = [1, 2, 3, 4, 5]
document.writeln("Масив:" + arr6 + "<br>")
arr6.splice(1, 2);
document.writeln("Новий масив:" + arr6)

//--------------------------task 7--------------------------------
document.write("<br><br>");
document.write("<div class=\"title\"><span>Завдання 7</span></div>");
let arr7 = [1, 2, 3, 4, 5]
document.writeln("Масив: " + arr7 + "<br>")
let arr7Update = arr7.splice(1, 3);
document.writeln("Новий масив: " + arr7Update)

//--------------------------task 8--------------------------------
document.write("<br><br>");
document.write("<div class=\"title\"><span>Завдання 8</span></div>");
let arr8 = [1, 2, 3, 4, 5];
document.write("Масив: " + arr8 + "</br>")
arr8.splice(3, 0, "a", "b", "c");
document.write("Новий масив: " + arr8)

//--------------------------task 9--------------------------------
document.write("<br><br>");
document.write("<div class=\"title\"><span>Завдання 9</span></div>");
let arr9 = [1, 2, 3, 4, 5];
document.write("Масив: " + arr9 +  "</br>")
arr9.splice(1, 0, "a", "b");
arr9.splice(6, 0, "c");
arr9.splice(8, 0, "e");
document.write("Новий масив: " + arr9)

//--------------------------task 10--------------------------------
document.write("<br><br>");
document.write("<div class=\"title\"><span>Завдання 10</span></div>");
var arr10 = [3, 4, 1, 2, 7];
document.write("Масив: " + arr10 + "</br>")
arr10.sort();
document.write("Відсортований масив: " + arr10)

//--------------------------task 11--------------------------------
document.write("<br><br>");
document.write("<div class=\"title\"><span>Завдання 11</span></div>");
var arr11 = { js: 'test', jq: 'hello', css: 'world' };
arr11Keys = Object.keys(arr11);
document.write("Ключі: " + arr11Keys + " ");

//--------------------------task 12--------------------------------
document.write("<br><br>");
document.write("<div class=\"title\"><span>Завдання 12</span></div>");
arr12 = 'aaa@bbb@ccc';
document.writeln("Рядок: " +  arr12 + "<br>")
document.write("Новий рядок: " + arr12.replace(/@/g, '!'))

//--------------------------task 13--------------------------------
document.write("<br><br>");
document.write("<div class=\"title\"><span>Завдання 13</span></div>");
let date = "2025-12-31";
document.write("Дата: " + date);
date1 = date.split("-").reverse().join("/");
document.write("<br>Результат: " + date1);

//--------------------------task 14--------------------------------
document.write("<br><br>");
document.write("<div class=\"title\"><span>Завдання 14</span></div>");
arr14 = 'я вчу javascript!'
document.writeln("Масив: " + arr14 + "<br>")
document.writeln("Новий масив: " + arr14.split(''))

//--------------------------task 15--------------------------------
document.write("<br><br>");
document.write("<div class=\"title\"><span>Завдання 15</span></div>");
let arr15 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let i = 0; i < arr15.length; i++) {
    let x = "";
    for (let j = 0; j < i + 1; j++) {
        x += "x";
    }
    arr15[i] = x;
}
document.write("Масив: " + arr15.toString());

//--------------------------task 16--------------------------------
document.write("<br><br>");
document.write("<div class=\"title\"><span>Завдання 16</span></div>");
function fillArr(value, length) {
    var arr16 = [];
    for (var i = 0; i < length; i++) {
        arr16.push(value);
    }
    return arr16;
}

arr16 = fillArr('x', 5)
document.writeln("Масив: " + "[" + arr16 + "]");

//--------------------------task 17--------------------------------
document.write("<br><br>");
document.write("<div class=\"title\"><span>Завдання 17</span></div>");
var arr17 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
var sum = 0;
for (var i = 0; i < arr17.length; i++) {
    for (var j = 0; j < arr17[i].length; j++) {
        for (var k = 0; k < arr17[i][j].length; k++) {
            sum += arr17[i][j][k];
        }
    }
}
document.writeln("Тривимірний масив: " + arr17 + '</br>');
document.writeln("Сума елементів: " + sum);

//--------------------------task 18--------------------------------
document.write("<br><br>");
document.write("<div class=\"title\"><span>Завдання 18</span></div>");
let styles = ["Jazz", "Blues"];
document.write("Масив_1: " + styles);
document.write("<br>Додано: Rock-n-Roll");
styles.push("Rock-n-Roll");
document.write("<br>Масив_2: " + styles);

let a1 = 0;
let cl = "Classics"

function median(styles) {
    styles.sort((a, b) => a - b);
    if (styles.length % 2) {
      a1 = [Math.floor(styles.length / 2)];
      return a1;
    } else {
      a1 = (([styles.length / 2] + [styles.length / 2 - 1]) / 2);
      return a1;
    }
  }

document.write("<br>Виконується пошук медіани масиву (пошук починається з 0): " + median(styles));
document.write("<br>Медіану знайдено. Елемент під даним індексом заміниться на: " + cl );
for(let i = 0; i < styles.length-1; i++){
    styles[median(styles)] = cl;    
}

document.write("<br>Масив_3: " + styles);
document.write("<br>Видалено: " + styles.shift());
document.write("<br>Масив_4: " + styles);
styles.unshift("Rap", "Reggae");
document.write("<br> Масив_5: " + styles.toString());

//--------------------------task 19--------------------------------
document.write("<br><br>");
document.write("<div class=\"title\"><span>Завдання 19</span></div>");
function camelize(str) {
    return str
        .split('-')
        .map(
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join('');
}
document.writeln("background-color == " + camelize('background-color') + '</br>')
document.writeln("list-style-image == " + camelize('list-style-image') + '</br>')
document.writeln("-webkit-transition == " + camelize('-webkit-transition'))

//--------------------------task 20--------------------------------
document.write("<br><br>");
document.write("<div class=\"title\"><span>Завдання 20</span></div>");
function filterRange(arr20, a, b) {

    return arr20.filter(item => (a <= item && item <= b));
}

let arr20 = [5, 3, 8, 1];

let filtered = filterRange(arr20, 1, 4);

document.write("Відфільтровані значення: " + filtered + '</br>'); // 3,1 (совпадающие значения)
document.write("Без змін: " + arr20);

//--------------------------task 21--------------------------------
document.write("<br><br>");
document.write("<div class=\"title\"><span>Завдання 21</span></div>");
function copySorted(arr21) {
    return arr21.slice().sort()
}

arr21 = ["HTML", "JavaScript", "CSS"];
document.write("Масив: HTML, JavaScript, CSS" + '</br>');
document.write("Відсортований масив: " + copySorted(arr21));

//--------------------------task 22--------------------------------
document.write("<br><br>");
document.write("<div class=\"title\"><span>Завдання 22</span></div>");

function sortByAge(arr) {
    arr.sort(function (a, b) { a.age - b.age });
}

let ivan = { name: "Іван ", age: 25 };
let petro = { name: "Петро ", age: 30 };
let mariya = { name: "Марія ", age: 28 };

arr = [petro, ivan, mariya];
sortByAge(arr)

document.write("Посортований список користувачів: " + arr[0].name + arr[1].name + arr[2].name);


//--------------------------task 23--------------------------------
document.write("<br><br>");
document.write("<div class=\"title\"><span>Завдання 23</span></div>");

function getAverageAge(users) {
    return users.reduce(function (prev, user) {
        return prev + user.age
    }, 0) / users.length;
}

ivan = { name: "Іван", age: 25 };
petro = { name: "Петро", age: 30 };
mariya = { name: "Марія", age: 28 };

arr = [ivan, petro, mariya];

document.write("Середній вік користувачів: " + getAverageAge(arr));

//--------------------------task 24--------------------------------
document.write("<br><br>");
document.write("<div class=\"title\"><span>Завдання 24</span></div>");
let users = [
    { id: "іван", name: "Іван Іванко", age: 20 },
    { id: "ганна", name: "Ганна Іванко", age: 24 },
    { id: "петро", name: "Петро Петренко", age: 31 },
];

const groupById = (arr) => {
    return arr.reduce((user, el) => {
        user[el.id] = el;
        return user;
    }, {});
};
document.write("Результат: " + JSON.stringify(groupById(users))
);


//--------------------------task 25--------------------------------
document.write("<br><br>");
document.write("<div class=\"title\"><span>Завдання 25</span></div>");

function sumSalaries(salaries) {

    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }
    return sum;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

document.writeln("Сума зарплат: " + sumSalaries(salaries))
