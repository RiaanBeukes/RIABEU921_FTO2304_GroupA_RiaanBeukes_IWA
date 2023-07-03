const firstName = "Nwabisa";
const surname = "Gabe";
export const role = "CEO";

document.addEventListener("DOMContentLoaded", function () {
const display= firstName + " " + surname + " (" + role + ")";
document.querySelector('#nwabisa').innerText = display;
});