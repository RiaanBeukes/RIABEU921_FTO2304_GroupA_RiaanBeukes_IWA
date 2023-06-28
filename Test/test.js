import { company, year } from "./test_config.js";

document.addEventListener("click", function () {
  const message = " © " + company + " (" + year + ")";
  document.querySelector("footer").innerText = message;
});

console.log("log");