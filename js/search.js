const searchButton = document.getElementById("search-button");
const searchPanel = document.getElementById("search-panel");
const exitButton = document.getElementById("search-exit-button");

searchButton.addEventListener("click", () => {

    searchPanel.style.right = "0";

});

exitButton.addEventListener("click", () => {

    searchPanel.style.right = "-400px";
    
}); 