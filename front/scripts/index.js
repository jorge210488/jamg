// M2 - Clase 2 ACTIVIDAD 02 Cambiar el origen de los datos que mapeamos para renderizar las tarjetas de películas. Dejaremos de utilizar el array “escrito a mano” para obtener datos desde un servidor externo real:
// Implementar una función que realice una solicitud de tipo GET a la siguiente URL https://students-api.2.us-1.fl0.io/movies. Al hacer esa solicitud, recibiremos un JSON con un array EXACTAMENTE IGUAL al que teníamos escrito a mano. 

$.get("https://students-api.up.railway.app/movies", (data) => {
    traerTarjeta(data);
})

const contenedorPeliculas = document.getElementById('contenedor-peliculas');

// Si la solicitud es exitosa, ejecutar en la callback la misma lógica que ya tienes implementada para mapear el arreglo y renderizar las tarjetas.
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

    console.log('Tarjetas creadas:', tarjetas); // Verificar las tarjetas creadas
    contenedorPeliculas.append(...tarjetas);
}
