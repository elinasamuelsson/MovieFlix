import { searchMovies } from "../search.js";

const filterBtns = document.querySelectorAll('.filter-btn');
const slideSections = document.querySelectorAll('.slidearea');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {

        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        slideSections.forEach(section => {
            if (filter === 'all' || section.dataset.genre === filter) {
                section.classList.remove('hidden');
            } else {
                section.classList.add('hidden');
            }
        });
    });
});