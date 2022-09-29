const clock = document.querySelector("h2#clock");


function getTime() {
    const date1 = new Date();
    const hours = String(date1.getHours()).padStart(2,"0");
    const minutes = String(date1.getMinutes()).padStart(2,"0");
    const seconds = String(date1.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getTime();

setInterval(getTime, 1000);

