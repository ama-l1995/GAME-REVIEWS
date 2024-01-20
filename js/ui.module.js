class Games {
    constructor(thumbnail, title, short_description, genre, platform) {
        this.thumbnail = thumbnail;
        this.title = title;
        this.short_description = short_description;
        this.genre = genre;
        this.platform = platform;
    }
    displayGames() {
        data.innerHTML += `
                <div class="col-md-3 detail ">
                  <div class="text-light w-100 p-2  caRd">
                      <div>
                        <img class="w-100" src=${this.thumbnail} alt="">
                      </div>
                      <div class="p-2">
                        <div class="d-flex  justify-content-between align-items-center">
                          <h3 class="h5 mb-0 cardTitle headerFonts">${this.title}</h3>
                          <span class="badge bg-primary p-2">Free</span>
                        </div>
                        <p class=" opacity-50 text-light text-center">${this.short_description}</p>
                      </div>
                    
                    <footer class="footer d-flex justify-content-between align-items-center ">
                      <span class=" badge badge-color">${this.genre}</span>
                      <span class=" badge badge-color">${this.platform}</span>
                    </footer>
                  </div>
                </div>
              `;
    }
}

export function getGames(responseGames) {
    for (let i = 0; i < responseGames.length; i++) {
        let thumbnail = responseGames[i].thumbnail;
        let title = responseGames[i].title;
        let short_description = responseGames[i].short_description;
        let genre = responseGames[i].genre;
        let platform = responseGames[i].platform;
        let product = new Games(
            thumbnail,
            title,
            short_description,
            genre,
            platform
        );
        product.displayGames();
    }
}
