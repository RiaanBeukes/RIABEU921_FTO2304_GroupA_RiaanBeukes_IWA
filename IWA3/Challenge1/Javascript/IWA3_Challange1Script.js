import { company, year } from "";

document.addEventListener("DOMContentLoaded", function () {
  const message = "© " + company + " (" + year + ")";
  document.querySelector("footer").innerText = message;
});