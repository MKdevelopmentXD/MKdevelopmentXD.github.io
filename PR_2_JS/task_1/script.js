function time() {
    let time = new Date();
    const Hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    const Minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    const Seconds = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
    totalTime.value = Hours + ":" + Minutes + ":" + Seconds
    setTimeout('time()', 1000);
}
time()