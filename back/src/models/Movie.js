const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: [true, "El título es obligatorio"] },
  year: { type: Number, required: [true, "El Año es obligatorio"] },
  director: { type: String, required: [true, "El director es obligatorio"] },
  duration: { type: String, required: [true, "La duración es obligatoria"] },
  genre: { type: [String], required: [true, "El género es obligatorio"] },
  rate: { type: Number, required: [true, "La calificación es obligatoria"] },
  poster: {
    type: String,
    required: [true, "El URL de imagén de la película es obligatorio"],
  },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;

const updateMovieSchema = new mongoose.Schema({
  title: { type: String },
  year: { type: Number },
  director: { type: String },
  duration: { type: String },
  genre: { type: [String] },
  rate: { type: Number },
  poster: { type: String },
});

module.exports = updateMovieSchema;
