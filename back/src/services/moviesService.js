const Movie = require("../models/Movie.js");

class Movieclass {
    constructor(id, title, year, director, duration, genre, rate, poster) {
        if (!title || !director || !poster) {
            console.log("falta tittle, director o poster");
            throw new Error('Falta información: title, poster, o director');  
        }
        else {
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
            const moviesData = await Movie.find();
            const movies = moviesData.map(movie => new Movieclass(
                movie._id.toString(), // Convertir ObjectId a string
                movie.title, 
                movie.year, 
                movie.director, 
                movie.duration, 
                movie.genre, 
                movie.rate, 
                movie.poster
            ));
            return movies;
        } catch (error) {
            console.error('No se encontraron películas', error);
            throw error; 
        }
    },
    createMovie: async (movieData) => {
        try {
            const newMovie = new Movie(movieData);
            await newMovie.save();
            return newMovie;
        } catch (error) {
            console.error('Error creando la película', error);
            throw error; 
        }
    },
}


// const axios = require('axios');

//   module.exports = {
//     getMovies: async (res,req) => {
//         try {
            // const response = await axios.get('https://students-api.up.railway.app/movies');
            // const moviesData = response.data;
            // let id = 0;

//             const movies = moviesData.map(movie => {
//                 return new Movie(
//                     id++,
//                     movie.title,
//                     movie.year,
//                     movie.director,
//                     movie.duration,
//                     movie.genre,
//                     movie.rate,
//                     movie.poster
//                 );
//             });
//             return movies;
//         } catch (error) {
//             console.error('No se encontraron películas', error);
//             throw Error(error);
//         }
//     }
//   };

// Te sugerimos como extra que, en lugar de responder con objetos literales de películas, en tu módulo de servicio implementes la clase Movie, 
// y respondas con instancias de esta clase. Si logras implementar esto, te asegurarás la integridad de los datos. Además, como un desafío extra, 
//  proponemos que, dentro del constructor de la clase, arrojes un error en caso de que esta función no reciba adecuadamente las propiedades 
//  “title”, “poster” y “director”.