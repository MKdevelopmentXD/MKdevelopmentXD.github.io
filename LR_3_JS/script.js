//--------------------------task 1--------------------------------
document.write("<div class=\"title\"><span>Завдання 1</span></div>");
document.write(new Date(2021, 2, 20, 3, 12));

//--------------------------task 2--------------------------------
document.write("<br><br>");
document.write("<div class=\"title\"><span>Завдання 2</span></div>");

function getWeekDay(date) {
    let days = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
    return days[date.getDay()]
}

let date = new Date(2015, 3, 15)
document.writeln("День тижня [" + getWeekDay(date) + "] з дати [" + date + "]")

//--------------------------task 3--------------------------------
document.write("<br><br>");
document.write("<div class=\"title\"><span>Завдання 3</span></div>");
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0)
    return date.getDate()
}

document.writeln("Останній день лютого місяця 2020 року: " + getLastDayOfMonth(2020, 1) )


//--------------------------task 4--------------------------------
document.write("<br><br>");
document.write("<div class=\"title\"><span>Завдання 4</span></div>");
const getSecondsToTomorrow = () => {
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0);
    document.write("Залишилось до завтра: " + (tomorrow - Date.now()) / 1000 + " секунд");
};
getSecondsToTomorrow();

//--------------------------task 5--------------------------------
document.write("<br><br>");
document.write("<div class=\"title\"><span>Завдання 5</span></div>");

function formatDate(date) {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;
  
    // форматування
    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
  
    if (diffSec < 1) {
      return 'прямо зараз';
    } else if (diffMin < 1) {
      return `${diffSec} сек. назад`
    } else if (diffHour < 1) {
      return `${diffMin} хв. назад`
    } else {
      return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
  }

  document.write("formatDate(new Date(new Date - 23)) ------------------ " + formatDate(new Date(new Date - 23)) + "<br>");
  document.write("formatDate(new Date(new Date - 44 * 1000)) ----------- " + formatDate(new Date(new Date - 44 * 1000)) + "<br>");
  document.write("formatDate(new Date(new Date - 52 * 60 * 1000)) ------ " + formatDate(new Date(new Date - 52 * 60 * 1000)) + "<br>");
  document.write("formatDate(new Date(new Date - 32432 * 60 * 1000)) --- " + formatDate(new Date(new Date - 32432 * 60 * 1000)));