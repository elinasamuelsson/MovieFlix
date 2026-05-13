import { getMoviesCopy } from "/js/data/movies.js";
import { fetchFromLocalStorage } from "/js/data/localstorage.js";

function displayCommunityMovies() {
    const communitySection = document.getElementById("community-section");
    let movies;

    movies = getMoviesCopy().filter((movie) =>
        movie.categories.includes("community"),
    );

    if (movies.length === 0) return;

    const communityHeader = document.createElement("h3");
    communityHeader.textContent = "Published by Community";

    const section = document.createElement("section");
    section.classList.add("community");
    section.id = "community-grid";

    communitySection.append(communityHeader, section);

    const grid = document.getElementById("community-grid");

    movies.forEach((movie) => {
        const movieCard = document.createElement("div");
        movieCard.className = "card";
        movieCard.style.backgroundImage = `url('${movie.image}')`;

        const movieTitle = document.createElement("p");
        movieTitle.classList.add("movie-title");
        movieTitle.textContent = `${movie.title}`;

        const movieInfo = document.createElement("p");
        movieInfo.classList.add("movie-info");
        movieInfo.textContent = `${movie.year} • ${movie.ageRating}`;

        movieCard.append(movieTitle, movieInfo);
        grid.appendChild(movieCard);
    });
}

fetchFromLocalStorage();
displayCommunityMovies();
