



const links = document.querySelectorAll(".nav-link");
const data = document.getElementById("data");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", (e) => {
    console.log(e.target.innerHTML);
    clearActive();
    e.target.classList.add("active");
    Selected(e.target.innerHTML);
  });
}
function clearActive() {
  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove("active");
  }
}

async function Selected(selectedGames) {
  loading.classList.remove("d-none");
  data.innerHTML = "";
  const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${selectedGames}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9788d6b836mshf075dacbbce8953p184c49jsn653974580939",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  let response = await (await fetch(url, options)).json();
  let responseGames = response;
  getGames(responseGames)
  Details(responseGames)
  loading.classList.add("d-none");
}

Selected("mmorpg");
// export {
//   Selected
//   ,clearActive
// }

import {getGames} from "./ui.module.js"
import {Details} from "./details.module.js"