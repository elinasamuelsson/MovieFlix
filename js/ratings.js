import { getMoviesCopy, setMovies } from "/js/data/movies.js";
import { saveToLocalStorage } from "/js/data/localstorage.js";

//RATING CHANGES WHEN CLICKED
export function changeRating(e) {
    const clicked = e.currentTarget;
    const chosenRating = Number(clicked.dataset.rating);
    const allRatingStars = clicked
        .closest(".card-rating")
        .querySelectorAll("svg");

    const movieTitle = clicked
        .closest(".card-wrapper")
        .querySelector(".movie-title").textContent;

    let moviesCopy = getMoviesCopy();
    moviesCopy.forEach((movie) => {
        if (movieTitle != movie.title) {
            return;
        } else {
            movie.rating = chosenRating;
        }
    });

    setMovies(moviesCopy);
    saveToLocalStorage();

    allRatingStars.forEach((ratingStar) => {
        const svgPolygon = ratingStar.querySelector("polygon");
        if (Number(ratingStar.dataset.rating) <= chosenRating) {
            svgPolygon.setAttribute("fill", "#F5A623");
        } else {
            svgPolygon.setAttribute("fill", "none");
        }
    });
}

//RENDER TO MY LIST
export function renderToMyList() {
    const myListContainer = document
        .querySelector(".list-header")
        .closest("section")
        .querySelector(".container");

    if (myListContainer === null) {
        return;
    }

    const moviesCopy = getMoviesCopy();
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
}

//RENDER TO FAVORITES
export function renderToFavorites() {
    const favoritesContainer = document
        .querySelector(".favorites-header")
        .closest("section")
        .querySelector(".container");

    if (favoritesContainer === null) {
        return;
    }

    const moviesCopy = getMoviesCopy();
    let moviesToRender = [];

    moviesCopy.forEach((movie) => {
        if (movie.categories.includes("favorite")) {
            moviesToRender.push(movie);

            const card = document.createElement("div");
            card.classList.add("card-wrapper");
            card.innerHTML = `<div class="card" style="background-image: url('${movie.image}')">
                ${renderHeartButton()}
                <div class="card-buttons">${renderCardButtons()}</div>
                <p class="movie-title">${movie.title}</p>
                <p class="movie-info">${movie.year} • ${movie.ageRating}</p>
                </div>`;

            favoritesContainer.appendChild(card);
        }
    });

    function renderHeartButton() {
        return `<svg
                            class="heart-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="2.5"
                            stroke-linejoin="round">
                            <path
                                d="M12,21 C10,19 2,14 2,8 C2,4 5,2 8,3 C10,4 11,6 12,8 C13,6 14,4 16,3 C19,2 22,4 22,8 C22,14 14,19 12,21 Z" />
                        </svg>`;
    }
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
