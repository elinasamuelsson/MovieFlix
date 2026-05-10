import {
    saveToLocalStorage,
    fetchFromLocalStorage,
} from "/js/data/localstorage.js";
import { getMoviesCopy, setMovies } from "/js/data/movies.js";

fetchFromLocalStorage();
console.log(getMoviesCopy());

// CHANGE RATINGS ON PROFILE-PAGE MOVIES IN MY LIST
document.querySelectorAll(".card-rating svg").forEach((ratingStar) => {
    ratingStar.addEventListener("click", (e) => {
        const clicked = e.currentTarget;
        const chosenRating = Number(clicked.dataset.rating);
        const allRatingStars = clicked
            .closest(".card-rating")
            .querySelectorAll("svg");

        const movieTitle = clicked
            .closest(".card-wrapper")
            .querySelector(".movie-title")
            .textContent;

        let moviesCopy = getMoviesCopy();
            moviesCopy.forEach((movie) => {
                if (movieTitle != movie.title) {
                    return;
                } else {
                    movie.rating = chosenRating;
                }
            })

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
    });
});
