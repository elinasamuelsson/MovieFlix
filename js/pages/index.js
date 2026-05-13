import { getMoviesCopy } from "/js/data/movies.js";
import { fetchFromLocalStorage } from "/js/data/localstorage.js";

function displayCommunityMovies() {
    const communitySection = document.getElementById("community-section");
    let movies;

    movies = getMoviesCopy().filter((movie) =>
        movie.categories.includes("community"));

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

        movieCard.innerHTML = `
            <p class="movie-title">${movie.title}</p>
            <p class="movie-info">${movie.year} • ${movie.ageRating}</p>
        `;

        grid.appendChild(movieCard);
    });
}

fetchFromLocalStorage();
displayCommunityMovies();