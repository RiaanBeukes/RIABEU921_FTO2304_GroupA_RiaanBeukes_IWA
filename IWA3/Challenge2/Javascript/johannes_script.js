const firstName = "Johannes";
const surname = "Potgieter";
export const role = "Intern";

document.addEventListener("DOMContentLoaded", function () {
const display= firstName + " " + surname + " (" + role + ")";
document.querySelector('#johannes').innerText = display;
});