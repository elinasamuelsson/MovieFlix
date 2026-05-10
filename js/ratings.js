document.querySelectorAll(".card-rating svg").forEach((ratingStar) => {
    ratingStar.addEventListener("click", (e) => {
        const clicked = e.currentTarget;
        const chosenRating = Number(clicked.dataset.rating);
        const allRatingStars = clicked
            .closest(".card-rating")
            .querySelectorAll("svg");

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
