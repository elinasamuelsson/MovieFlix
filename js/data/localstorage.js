import { setMovies, getMovies } from "/js/data/movies.js";

export function saveToLocalStorage() {
    localStorage.setItem("movies", JSON.stringify(getMovies()));
}

export function fetchFromLocalStorage() {
    const storedMovies = JSON.parse(localStorage.getItem("movies"));

    if (storedMovies != null) {
        setMovies(storedMovies);
    }
}
