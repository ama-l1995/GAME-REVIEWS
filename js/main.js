import * as game from "./games.module.js"
import * as ui from "./ui.module.js"
import * as detail from "./details.module.js"
ui
game
detail
let btnClose = document.getElementById("btnClose");
let sec1 = document.getElementById("sec1");
let sec2 = document.getElementById("sec2");

btnClose.addEventListener("click", () => {
  closeBtn();
});

function closeBtn() {
  sec1.classList.remove("d-none");
  sec2.classList.add("d-none");
}
document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    closeBtn();
  }
});