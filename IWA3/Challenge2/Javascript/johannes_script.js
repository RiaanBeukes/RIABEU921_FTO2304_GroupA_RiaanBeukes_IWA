export let firstName = "Johannes";
export let surname = "Potgieter";
export let role = "Intern";

//let display= firstName + " " + surname + " (" + role + ")";
//document.querySelector('#johannes').innerText = display;

document.addEventListener("click", function () {
let display= firstName + " " + surname + " (" + role + ")";
document.querySelector('#johannes').innerText = display;
});
    