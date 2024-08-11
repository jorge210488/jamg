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

    for (const key in movie) {
        if (!movie[key]) missingInputs.push(key);
    }

    if (missingInputs.length > 0) {
        res.send({ message: "Faltan datos", missingInputs: missingInputs });
    } else {
        next();
    }
}

module.exports = validateDataMovie;