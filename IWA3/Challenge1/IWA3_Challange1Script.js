import { company, year } from "./IWA3Ch1_config";

document.addEventListener("DOMContentLoaded", function () {
  const message = "© " + company + " (" + year + ")";
  document.querySelector("footer").innerText = message;
});