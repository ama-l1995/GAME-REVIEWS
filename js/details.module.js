let details = document.getElementById('details');
let currentsellect = 0;

// Get current Index of CLick
export function Details(result) {
    let currentsellects = Array.from(document.querySelectorAll('.detail'));
    for (let i = 0; i < currentsellects.length; i++) {
        currentsellects[i].addEventListener('click', () => {
            let currentsellect = currentsellects.indexOf(currentsellects[i]);
            currentsellect = currentsellects.indexOf(currentsellects[i]);
            // console.log(sec2);

            let currentsellectId = result[currentsellect].id;
            getDetails(currentsellectId);
            sec1.classList.add('d-none');
            sec2.classList.remove('d-none');
        });
    }
}

// Display current sellect of CLick
async function getDetails(currentsellectId) {
    loading.classList.remove('d-none');
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${currentsellectId}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9788d6b836mshf075dacbbce8953p184c49jsn653974580939',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
        },
    };
    let response = await (await fetch(url, options)).json();
    let result = response;
    let { title, thumbnail, genre, platform, status, description, game_url } =
        result;
    let sec2 = new gameDetails(
        title,
        thumbnail,
        genre,
        platform,
        status,
        description,
        game_url
    );
    sec2.displayDetails();
    loading.classList.add('d-none');
}

class gameDetails {
    constructor(
        title,
        thumbnail,
        genre,
        platform,
        status,
        description,
        game_url
    ) {
        this.title = title;
        this.thumbnail = thumbnail;
        this.genre = genre;
        this.platform = platform;
        this.status = status;
        this.description = description;
        this.game_url = game_url;
    }
    displayDetails() {
        details.innerHTML = `
          <div  class="col-12 col-md-4">
            <figure>
              <img class="w-100" src="${this.thumbnail}" alt="thumbnail">
            </figure>
          </div>
          <div class="col-12 col-md-8 text-light fw-bolder">
            <h3 class="headerFonts">Title: <span>${this.title}</span></h3>
            <p>Category: <span class="headerFonts badge bg-info text-black text-uppercase p-2">${this.genre}</span></p>
            <p>Platform: <span class="headerFonts badge bg-info text-black text-uppercase p-2">${this.platform}</span></p>
            <p>Status: <span class="headerFonts badge bg-info text-black text-uppercase p-2">${this.status}</span></p>
            <p>${this.description}</p>
            <a href="${this.game_url}" target="_Blank" class="btn btn-outline-warning text-white">Show Game</a>
          </div>
    `;
    }
}
