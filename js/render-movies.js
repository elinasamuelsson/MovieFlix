function displayCommunityMovies() {
    const communitySection = document.getElementById('community-section');
    const movies = JSON.parse(localStorage.getItem('movies')) || [];

    if (movies.length === 0) return;

    communitySection.innerHTML = `
        <h3>Published by Community</h3>
        <section class="community" id="community-grid">
        </section>
    `;

    const grid = document.getElementById('community-grid');

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'card';
        movieCard.style.backgroundImage = `url('${movie.imageUrl}')`;

        movieCard.innerHTML = `
            <p class="movie-title">${movie.title}</p>
            <p class="movie-info">${movie.year} • ${movie.rating} • ${movie.duration}</p>
        `;

        grid.appendChild(movieCard);
    });
}

// Run the function when the page loads
window.addEventListener('DOMContentLoaded', displayCommunityMovies);