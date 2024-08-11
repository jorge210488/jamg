const moviesService = require("../services/moviesService.js");

module.exports = {
    getAllMovies: async (req, res) => {
       try {
        const movies = await moviesService.getMovies(req, res);
        res.status(200).json(movies);
    } catch (error) {
        res.status(400).json({
            error: "Error interno del servidor",
        });
    }
    },

    createMovie: async (req, res) => {
        try {
            const movieData = req.body; // Los datos de la película vienen en el cuerpo de la solicitud
            const newMovie = await moviesService.createMovie(movieData);
            res.status(201).json(newMovie);
        } catch (error) {
            res.status(500).json({
                error: "Error creando la película",
            });
        }
    }
};