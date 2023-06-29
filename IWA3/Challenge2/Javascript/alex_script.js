export let firstname = "Alex";
export let surname = "Naidoo";
export let role = "Head of Marketing";

let display= firstname + " " + surname + " (" + role + ")";
document.querySelector('#alex').innerText = display;