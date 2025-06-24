function FormatTime(t){
    return t<10 ? `0${t}` : t;
}
function FormatDate(date){
    const currentdate = {day: `numeric`, month: `long`, year: `numeric`, weekday: `long`};
    return date.toLocaleDateString(undefined, currentdate);
}
let is24hourformat = false;
function UpdateTime(){
    const now = new Date();
    let hour = now.getHours();
    const ampm = hour >=12 ? `PM` : `AM`;

    if (!is24hourformat) {
        hour = hour % 12 || 12;
    };
    hour = FormatTime(hour);
    let minute = FormatTime(now.getMinutes());
    let second = FormatTime(now.getSeconds());

    const time = `${hour}:${minute}:${second}`;
    document.getElementById("time").textContent = time;
    document.getElementById("ampm").textContent = ampm;
    document.getElementById("date").textContent = FormatDate(now);
}
setInterval(UpdateTime,1000);
UpdateTime();
const darkmodeBtn = document.getElementById("darkmode");
const body = document.body;
const lighticon = document.getElementById("lighticon");
const darkicon = document.getElementById("darkicon");
darkmodeBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    lighticon.classList.toggle("hidden");
    darkicon.classList.toggle("hidden");
});
const formatBtn = document.getElementById("format");
formatBtn.addEventListener("click", () => {
    is24hourformat = !is24hourformat;
    formatBtn.textContent = is24hourformat ? "12" : "24";
    UpdateTime();
});
