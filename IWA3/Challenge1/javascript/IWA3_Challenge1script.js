import { company, year } from "./IWA3_Challnge1_Config";

document.addEventListener("DOMContentLoaded", function () {
  const message = "© " + company + " (" + year + ")";
  document.querySelector("footer").innerText = message;
});