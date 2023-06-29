//----CORS ERROR when operating Chrome browser. Use live server to test-----
import {company , year} from "./Configuration.js";

document.addEventListener("DOMContentLoaded", function () {
  const message = " © " + company + " (" + year + ")";
  document.querySelector("footer").innerText = message;
});