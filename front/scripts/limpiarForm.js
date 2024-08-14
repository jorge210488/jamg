function limpiarForm(title, year, director, duration, rate, genre, poster) {
    title.value = "";
    year.value = "";
    director.value = "";
    duration.value = "";
    rate.value = "";
    genre.value = "";
    poster.value = "";
}

module.exports = limpiarForm;