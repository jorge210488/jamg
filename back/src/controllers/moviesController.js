const moviesService = require("../services/moviesService.js");
const catchAsync = require("../utils/catchAsync.js");

const getAllMovies = async (req, res) => {
  const movies = await moviesService.getMovies(req, res);
  res.status(200).json(movies);
};

const createMovie = async (req, res) => {
  const movieData = req.body;
  const newMovie = await moviesService.createMovie(movieData);
  res.status(201).json(newMovie);
};

const updateMovie = async (req, res) => {
  const { id } = req.params; // ID de la película a actualizar
  const updateData = req.body; // Nuevos datos de la película
  const updatedMovie = await moviesService.updateMovie(id, updateData);
  res.status(200).json(updatedMovie);
};

const deleteMovie = async (req, res) => {
  const { id } = req.params; // ID de la película a eliminar
  await moviesService.deleteMovie(id);
  res.status(204).send(); // Respuesta sin contenido
};

module.exports = {
  getAllMovies: catchAsync(getAllMovies),
  createMovie: catchAsync(createMovie),
  updateMovie: catchAsync(updateMovie),
  deleteMovie: catchAsync(deleteMovie),
};
