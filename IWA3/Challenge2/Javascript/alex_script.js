export let firstName = "Alex";
export let surname = "Naidoo";
export let role = "Head of Marketing";

//let display= firstName + " " + surname + " (" + role + ")";
//document.querySelector('#alex').innerText = display;

document.addEventListener("click", function () {
let display= firstName + " " + surname + " (" + role + ")";
document.querySelector('#alex').innerText = display;
});
    