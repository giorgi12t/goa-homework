let clock = document.getElementById("clock");

setInterval(function () {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    clock.textContent = hours + ":" + minutes + ":" + seconds;
}, 1000);

let seconds = 10;
let p = document.getElementById("timer");

let interval = setInterval(function () {

    p.textContent = "Remaining time: " + seconds + " seconds";

    seconds--;

    if (seconds < 0) {
        clearInterval(interval);

        p.textContent = "Time is up!";

        let now = new Date();

        console.log(
            "Finished at: " +
            now.getHours() + ":" +
            now.getMinutes() + ":" +
            now.getSeconds()
        );
    }

}, 1000);