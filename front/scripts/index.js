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
console.log(traerTarjeta);

traerData();


// M2 - Clase 2 ACTIVIDAD 02 Cambiar el origen de los datos que mapeamos para renderizar las tarjetas de películas. Dejaremos de utilizar el array “escrito a mano” para obtener datos desde un servidor externo real:
// Implementar una función que realice una solicitud de tipo GET a la siguiente URL https://students-api.2.us-1.fl0.io/movies. Al hacer esa solicitud, recibiremos un JSON con un array EXACTAMENTE IGUAL al que teníamos escrito a mano. 

document.addEventListener("DOMContentLoaded", () => {
    // Selecciona el formulario y los inputs
    const form = document.querySelector(".needs-validation");
    const inputs = form.querySelectorAll("input");
    const limpiarBtn = document.querySelector("button[type='reset']");
    const submitBtn = document.querySelector("button[type='submit']");

    // Función para limpiar el formulario
    function limpiarFormulario() {
        inputs.forEach(input => {
            input.value = ""; // Vacía el value de cada input
        });
        form.classList.remove("was-validated"); // Quita la clase de validación
    }

    // Event listener para el botón de limpiar
    limpiarBtn.addEventListener("click", (event) => {
        event.preventDefault(); // Evita que el formulario se envíe
        limpiarFormulario(); // Llama a la función de limpieza
    });

    // Función para manejar el envío del formulario
    function enviarFormulario(event) {
        event.preventDefault(); // Evita el envío automático del formulario

        let formularioValido = true;

        inputs.forEach(input => {
            if (!input.value.trim()) { // Verifica si el input está vacío
                formularioValido = false;
                input.classList.add("is-invalid"); // Marca el input como inválido
            } else {
                input.classList.remove("is-invalid");
                input.classList.add("is-valid"); // Marca el input como válido
            }
        });

        if (formularioValido) {
            form.submit(); // Si todo está bien, envía el formulario
        } else {
            form.classList.add("was-validated");
        }
    }

    // Event listener para el envío del formulario
    form.addEventListener("submit", enviarFormulario);
});
