export let firstName = "Alex";
export let surname = "Naidoo";
export let role = "Head of Marketing";

document.addEventListener("DOMContentLoaded", function () {
let display= firstName + " " + surname + " (" + role + ")";
document.querySelector('#alex').innerText = display;
});

    