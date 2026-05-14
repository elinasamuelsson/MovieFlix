import { addCommunityMovie } from "../data/movies.js";

const movieForm = document.querySelector('.movieflix-form');

function showToast(message, type = 'error') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerText = message;
    
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

function isValidImageUrl(urlString) {
    try {
        const url = new URL(urlString);
        return url.protocol === "http:" || url.protocol === "https:";
    } catch (e) {
        return false;
    }
}

function testImage(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true); 
        img.onerror = () => resolve(false);
        img.src = url;
    });
}

movieForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.getElementById('movie-title').value.trim();
    const year = document.getElementById('movie-year').value;
    const ageRating = document.getElementById('movie-age-rating').value;
    const genre = document.getElementById('genre').value;
    const imageUrl = document.getElementById('movie-image').value.trim();
    const type = document.querySelector('input[name="contentType"]:checked').value;
    
    const hours = document.querySelectorAll('.duration-container input')[0].value || 0;
    const minutes = document.querySelectorAll('.duration-container input')[1].value || 0;

    if (!title) return showToast("Title cannot be empty!");
    if (!year || year < 1888 || year > 2026) return showToast("Please enter a valid year.");
    if (ageRating === "#") return showToast("Please select an age rating.");
    if (!genre) return showToast("Please select a genre.");
    if (hours == 0 && minutes == 0) return showToast("Duration cannot be 0.");
    
    if (!imageUrl) return showToast("Image URL is required!");
    if (!isValidImageUrl(imageUrl)) {
        return showToast("Please enter a valid web address (URL).");
    }

    const imageWorks = await testImage(imageUrl);
    if (!imageWorks) {
        return showToast("The image link appears to be broken or invalid.");
    }

    const newMovie = {
        id: Date.now(),
        title: title,
        description: "",
        year: parseInt(year), 
        rating: 5,
        ageRating: ageRating, 
        duration: `${hours}h ${minutes}m`, 
        genres: [genre], 
        categories: [type],
        image: imageUrl
    };

    addCommunityMovie(newMovie);

    showToast(`${type === 'movie' ? 'Movie' : 'Series'} saved successfully!`, 'success');
    
    movieForm.reset();
});