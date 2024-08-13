const moviesService = require("../services/moviesService.js");
const catchAsync = require("../utils/catchAsync.js")

const getAllMovies = async (req, res) => {
     const movies = await moviesService.getMovies(req, res);
     res.status(200).json(movies);
 } 

 const createMovie = async (req, res) => {
        const movieData = req.body; 
        const newMovie = await moviesService.createMovie(movieData);
        res.status(201).json(newMovie);
    } 

module.exports = {
    getAllMovies: catchAsync(getAllMovies),
    createMovie: catchAsync(createMovie),
};
