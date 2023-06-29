import { company, year } from "./test_config.js";


//CORS error preventing import of "./test_config.js".Import works if statement "document.addEventListener("DOMContentLoaded",function(){}); is changed to: "document.addEventListener("Click",function(){});.
document.addEventListener("click", function () {
  const message = " © " + company + " (" + year + ")";
  document.querySelector("footer").innerText = message;
});

console.log("log");