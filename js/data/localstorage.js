import { setMovies, getMoviesCopy } from "/js/data/movies.js";

export function saveToLocalStorage() {
    localStorage.setItem("movies", JSON.stringify(getMoviesCopy()));
}

export function fetchFromLocalStorage() {
    let storedMovies;

    try {
        storedMovies = JSON.parse(localStorage.getItem("movies")) || [];
    } catch (e) {
        console.warn("Error: " + e);
        localStorage.removeItem("movies");
        storedMovies = [];
    }

    if (storedMovies.length != 0) {
        setMovies(storedMovies);
    }
}
