export let firstName = "Nwabisa";
export let surname = "Gabe";
export let role = "CEO";

//let display= firstName + " " + surname + " (" + role + ")";
//document.querySelector('#nwabisa').innerText = display;



document.addEventListener("click", function () {
let display= firstName + " " + surname + " (" + role + ")";
document.querySelector('#nwabisa').innerText = display;
});



/*document.addEventListener("DOMContentLoaded", function () {
    const message = " © " + company + " (" + year + ")";
    document.querySelector("footer").innerText = message;
  });*/