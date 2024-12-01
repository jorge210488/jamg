const Movie = require("../models/Movie.js");

class Movieclass {
  constructor(id, title, year, director, duration, genre, rate, poster) {
    if (!title || !director || !poster) {
      console.log("Falta título, director o poster");
      throw new Error("Falta información: title, poster o director");
    } else {
      this.id = id;
      this.title = title;
      this.year = year;
      this.director = director;
      this.duration = duration;
      this.genre = genre;
      this.rate = rate;
      this.poster = poster;
    }
  }
}

module.exports = {
  getMovies: async () => {
    try {
      const movieData = await Movie.find();
      const movies = movieData.map(
        (movie) =>
          new Movieclass(
            movie._id.toString(), // Convertir ObjectId a string
            movie.title,
            movie.year,
            movie.director,
            movie.duration,
            movie.genre,
            movie.rate,
            movie.poster
          )
      );
      return movies;
    } catch (error) {
      console.error("No se encontraron películas", error);
      throw error;
    }
  },
  createMovie: async (movieData) => {
    try {
      const newMovie = new Movie(movieData);
      await newMovie.save();
      return new Movieclass(
        newMovie._id.toString(),
        newMovie.title,
        newMovie.year,
        newMovie.director,
        newMovie.duration,
        newMovie.genre,
        newMovie.rate,
        newMovie.poster
      );
    } catch (error) {
      console.error("Error creando la película", error);
      throw error;
    }
  },
  updateMovie: async (id, updateData) => {
    try {
      const updatedMovie = await Movie.findByIdAndUpdate(id, updateData, {
        new: true, // Retorna el documento actualizado
        runValidators: true, // Corre validaciones del esquema
      });
      if (!updatedMovie) {
        throw new Error("Película no encontrada");
      }
      return new Movieclass(
        updatedMovie._id.toString(),
        updatedMovie.title,
        updatedMovie.year,
        updatedMovie.director,
        updatedMovie.duration,
        updatedMovie.genre,
        updatedMovie.rate,
        updatedMovie.poster
      );
    } catch (error) {
      console.error("Error actualizando la película", error);
      throw error;
    }
  },
  deleteMovie: async (id) => {
    try {
      const deletedMovie = await Movie.findByIdAndDelete(id);
      if (!deletedMovie) {
        throw new Error("Película no encontrada");
      }
      return `Película con ID ${id} eliminada exitosamente.`;
    } catch (error) {
      console.error("Error eliminando la película", error);
      throw error;
    }
  },
};
