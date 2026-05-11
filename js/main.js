import {
    saveToLocalStorage,
    fetchFromLocalStorage,
} from "/js/data/localstorage.js";
import { getMoviesCopy, setMovies } from "/js/data/movies.js";
import {
    changeRating,
    renderToMyList,
    renderToFavorites,
} from "/js/ratings.js";

fetchFromLocalStorage();
renderToMyList();
renderToFavorites();

// CHANGE RATINGS ON PROFILE-PAGE MOVIES IN MY LIST
document.querySelectorAll(".card-rating svg").forEach((ratingStar) => {
    ratingStar.addEventListener("click", changeRating);
});
