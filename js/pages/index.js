import { getMoviesCopy, initializeMovies } from "../data/movies.js";

function displayCommunityMovies() {
    initializeMovies();

    const communitySection = document.getElementById("community-section");
    if (!communitySection) return;

    const communityMovies = getMoviesCopy().filter((movie) =>
        movie.categories.includes("community")
    );

    if (communityMovies.length === 0) {
        communitySection.innerHTML = "";
        return;
    }

    communitySection.innerHTML = "";

    const communityHeader = document.createElement("h3");
    communityHeader.textContent = "Published by Community";

    const grid = document.createElement("section");
    grid.classList.add("community"); 
    grid.id = "community-grid";

    communitySection.append(communityHeader, grid);

    communityMovies.forEach((movie) => {
        const movieCard = document.createElement("div");
        movieCard.className = "card";
        
        movieCard.style.backgroundImage = `url('${movie.image}')`;

        const movieTitle = document.createElement("p");
        movieTitle.classList.add("movie-title");
        movieTitle.textContent = movie.title;

        const movieInfo = document.createElement("p");
        movieInfo.classList.add("movie-info");
        movieInfo.textContent = `${movie.year} • ${movie.ageRating}`;

        movieCard.append(movieTitle, movieInfo);
        grid.appendChild(movieCard);
    });
}

window.addEventListener("DOMContentLoaded", displayCommunityMovies);
