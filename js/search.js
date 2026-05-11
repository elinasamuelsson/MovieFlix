import { getMoviesCopy } from "/js/data/movies.js";

const searchButton = document.getElementById("search-button");
const searchPanel = document.getElementById("search-panel");
const exitButton = document.getElementById("search-exit-button");
const searchField = document.getElementById("search-field");
const searchText = document.getElementById("search-text");
const resultList = document.getElementById("result-list");

searchButton.addEventListener("click", () => {

    searchPanel.style.right = "0";

});

exitButton.addEventListener("click", () => {

    searchPanel.style.right = "-400px";

}); 


searchField.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        const inputText = searchField.value;
        searchText.textContent = inputText;

        const results = searchMovies(inputText);

        console.log(results);

        if (results.length === 0) {

            resultList.innerHTML = "<p>No matching result was found... Try agin!</p>";

            return;
        }

        collectMovies(results);
    }

});

function searchMovies(searchText) {
    
    const moviesCopy = getMoviesCopy();

    return moviesCopy.filter(movie =>
        movie.title
            .toLowerCase()
            .includes(searchText.toLowerCase())
    );

}

function collectMovies(movieList) {

    resultList.innerHTML = "";

    movieList.slice(0, 3).forEach(movie => {

        resultList.innerHTML += `
        
            <div class="result-card">

                <button>

                    <img src="${movie.image}" alt="${movie.title}">

                    <p class="title">${movie.title}</p>

                </button>

            </div>
        
        `;
    });
}