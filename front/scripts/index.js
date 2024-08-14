//M2 - Clase 06 ACTIVIDAD 02 Para ello vamos a: Instalar la librería axios utilizando el comando correspondiente de npm.
// Requerir axios en el módulo de JavaSript donde estemos realizando la petición.
const axios = require("axios");


// Realizar la petición a la URL que veníamos trabajando utilizando el método get de axios.
// Manejar la asincronía de esta operación utilizando una de las dos estrategias vistas en la clase:
// * Promesas, definiendo con el método then un success handler y con método catch un error handler.
// * Async/Await, implementando una función async que pueda esperar a la resolución de la promesa. 
const traerData = async () => {
    try {
        const response = await axios.get("http://localhost:3000/movies");
        traerTarjeta(response.data);
    } catch (error) {
        console.error("Error al traer los datos:", error);
    }
}


const traerTarjeta = require("./tarjeta.js");

traerData();


if (window.location.href.includes("pelicula")) {
    const soloFormulario = require("./formulario.js");
    soloFormulario();
}



// M2 - Clase 2 ACTIVIDAD 02 Cambiar el origen de los datos que mapeamos para renderizar las tarjetas de películas. Dejaremos de utilizar el array “escrito a mano” para obtener datos desde un servidor externo real:
// Implementar una función que realice una solicitud de tipo GET a la siguiente URL https://students-api.2.us-1.fl0.io/movies. Al hacer esa solicitud, recibiremos un JSON con un array EXACTAMENTE IGUAL al que teníamos escrito a mano. 