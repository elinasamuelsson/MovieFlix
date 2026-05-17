import { getMoviesCopy } from "./data/movies.js";

const searchButton = document.getElementById("search-button");
const searchPanel = document.getElementById("search-panel");
const exitButton = document.getElementById("search-exit-button");
const searchField = document.getElementById("search-field");
const searchText = document.getElementById("search-text");
const resultList = document.getElementById("result-list");
const resultText = document.getElementById("result-text");


searchButton.addEventListener("click", () => {
    searchPanel.style.right = "0";
});

exitButton.addEventListener("click", () => {
    searchPanel.style.right = "-400px";
}); 


searchField.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const inputText = searchField.value;
        resultText.style.display = "block";
        searchText.textContent = inputText;

        const results = searchMovies(inputText);
        console.log(results);

        if (results.length === 0) {
            resultList.innerHTML = "<p>No matching result was found... Try agin!</p>";
            searchPanel.style.height = "160px";
            return;
        }

        if (results.length <= 3) {
            searchPanel.style.height = "330px";
        }
        
        if (results.length > 6) {
            searchPanel.style.height = "700px";
        }

        collectMovies(results);
    }
});

export function searchMovies(searchText) {
    const moviesCopy = getMoviesCopy();

    return moviesCopy.filter(movie =>
        movie.title
            .toLowerCase()
            .includes(searchText.toLowerCase())
    );
}

function collectMovies(movieList) {
    resultList.innerHTML = "";

    movieList.slice(0, 9).forEach(movie => {
        const card = document.createElement("div");
        card.classList.add("result-card"); 

        const img = document.createElement("img");
        const p = document.createElement("p");

        img.src = movie.image;
        p.textContent = movie.title;
        card.appendChild(img);
        card.appendChild(p);

        resultList.appendChild(card);
    });
}
