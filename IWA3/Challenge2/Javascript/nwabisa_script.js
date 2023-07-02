export let firstName = "Nwabisa";
export let surname = "Gabe";
export let role = "CEO";

document.addEventListener("DOMContentLoaded", function () {
let display= firstName + " " + surname + " (" + role + ")";
document.querySelector('#nwabisa').innerText = display;
});