export let firstName = "Johannes";
export let surname = "Potgieter";
export let role = "Intern";

document.addEventListener("DOMContentLoaded", function () {
let display= firstName + " " + surname + " (" + role + ")";
document.querySelector('#johannes').innerText = display;
});