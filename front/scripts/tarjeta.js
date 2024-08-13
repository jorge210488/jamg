const contenedorPeliculas = document.getElementById('contenedor-peliculas');

let traerTarjeta = (data) => {
    const tarjetas = data.map(pelicula => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta');

        tarjeta.innerHTML = `
            <a href =""> <h2>${pelicula.title}</h2></a>
            <img src="${pelicula.poster}" alt="${pelicula.title}">
            <p><strong>Año:</strong> ${pelicula.year}</p>
            <p><strong>Director:</strong> ${pelicula.director}</p>
            <p><strong>Duración:</strong> ${pelicula.duration}</p>
            <p><strong>Género:</strong> ${pelicula.genre.join(', ')}</p>
            <p><strong>Calificación:</strong> ${pelicula.rate}</p>
        `;

        return tarjeta;
    });
    contenedorPeliculas?.append(...tarjetas);
    
}

module.exports = traerTarjeta;