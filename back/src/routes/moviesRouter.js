const { Router } = require("express");
const moviesController = require("../controllers/moviesController.js");
const validateDataMovie = require("../middlewares/moviesMiddleware.js");

const moviesRouter = Router ();

moviesRouter.get("/movies", moviesController.getAllMovies);
moviesRouter.post("/movies", validateDataMovie, moviesController.createMovie);

module.exports = moviesRouter;