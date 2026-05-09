const searchButton = document.getElementById("search-button");
const searchPanel = document.getElementById("search-panel");
const exitButton = document.getElementById("search-exit-button");
const searchField = document.getElementById("search-field");
const searchText = document.getElementById("search-text");

searchButton.addEventListener("click", () => {

    searchPanel.style.right = "0";

});

exitButton.addEventListener("click", () => {

    searchPanel.style.right = "-400px";

}); 

searchField.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        const inputText = searchField.value;

    }

});

