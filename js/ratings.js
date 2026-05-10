import { getMoviesCopy } from "/js/data/movies.js";

export function renderToMyList() {
    const moviesCopy = getMoviesCopy();

    const myListContainer = document
        .querySelector(".list-header")
        .closest("section")
        .querySelector(".container");

    let moviesToRender = [];

    moviesCopy.forEach((movie) => {
        if (movie.categories.includes("my-list")) {
            moviesToRender.push(movie);

            const card = document.createElement("div");
            card.classList.add("card-wrapper");
            card.innerHTML = `<div class="card" style="background-image: url('${movie.image}')">
                <div class="card-buttons">${renderCardButtons()}</div>
                <div class="card-rating">${renderStars(movie.rating)}</div>
                <p class="movie-title">${movie.title}</p>
                <p class="movie-info">${movie.year} • ${movie.ageRating}</p>
                </div>`;

            myListContainer.appendChild(card);
        }
    });

    function renderStars(rating) {
        let ratingStars = "";
        for (let i = 1; i <= 5; i++) {
            let fill = "none";
            if (i <= rating) {
                fill = "#F5A623";
            }
            ratingStars += `
                <a>
                    <svg data-rating="${i}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="20" height="20">
                        <polygon
                            points="50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35"
                            fill="${fill}"
                            stroke="#E8940F"
                            stroke-width="1.5" />
                    </svg>
                </a>`;
        }
        return ratingStars;
    }

    function renderCardButtons() {
        return `<a>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="40"
                        height="40">
                        <circle
                            cx="12"
                            cy="12"
                            r="12"
                            fill="#ffffff" />
                        <polygon
                            points="10,7 10,17 18,12"
                            fill="black" />
                    </svg>
                </a>
                <a>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="40"
                        height="40"
                        fill="none"
                        stroke="#ffffff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round">
                        <circle
                            cx="12"
                            cy="12"
                            r="12"
                            fill="#e63946"
                            stroke="none" />
                        <line x1="7" y1="9" x2="17" y2="9" />
                        <line x1="10" y1="9" x2="10" y2="7" />
                        <line x1="14" y1="9" x2="14" y2="7" />
                        <rect
                            x="8"
                            y="10"
                            width="8"
                            height="8"
                            rx="1" />
                        <line x1="10" y1="12" x2="10" y2="16" />
                        <line x1="14" y1="12" x2="14" y2="16" />
                    </svg>
                </a>`;
    }
}
