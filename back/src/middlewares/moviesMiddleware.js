function validateDataMovie(req, res, next) {
    const movie = {
        title: req.body.title,
        year: req.body.year,
        director: req.body.director,
        duration: req.body.duration,
        genre: req.body.genre,
        rate: req.body.rate,
        poster: req.body.poster,
    };

    let missingInputs = [];
    let validationErrors = [];

    // Verifica si faltan datos
    for (const key in movie) {
        if (!movie[key]) missingInputs.push(key);
    }

    // Verifica que year no tenga más de 4 dígitos, no sea menor a 1895, y no sea mayor a 2024
    if (movie.year && (!/^\d{4}$/.test(movie.year) || movie.year < 1895 || movie.year > 2024)) {
        validationErrors.push("El año debe tener 4 dígitos, no ser menor a 1895 y no ser mayor a 2024.");
    }

    // Verifica que rate no sea mayor a 10 ni menor a 0
    if (movie.rate && (movie.rate < 0 || movie.rate > 10)) {
        validationErrors.push("La calificación (rate) debe estar entre 0 y 10.");
    }

    // Verifica que poster comience con https://
    if (movie.poster && !movie.poster.startsWith("https://")) {
        validationErrors.push("El poster debe comenzar con https://...");
    }

    // Verifica que genre no contenga números
    if (movie.genre && /\d/.test(movie.genre)) {
        validationErrors.push("El género no debe contener números.");
    }

    // Verifica que genre no contenga números
    if (movie.director && /\d/.test(movie.director)) {
        validationErrors.push("El Nombre del director no debe contener números.");
    }

    // Enviar los errores si los hay
    if (missingInputs.length > 0 || validationErrors.length > 0) {
        res.status(400).json({ 
            message: "Faltan datos o hay errores de validación", 
            missingInputs, 
            validationErrors 
        });
    } else {
        next();
    }
}

module.exports = validateDataMovie;
