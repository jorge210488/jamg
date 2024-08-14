const axios = require("axios");
const val = require("./validation.js");
const limpiarForm = require("./limpiarForm.js");

const soloFormulario = () => { 
    document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".needs-validation");
    val(form);

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        // Agrega los datos del formulario
        const movieData = {
            title: document.getElementById("title").value,
            year: document.getElementById("year").value,
            director: document.getElementById("director").value,
            duration: document.getElementById("duration").value,
            genre: document.getElementById("genre").value,            
            rate: document.getElementById("rate").value,
            poster: document.getElementById("poster").value,
        };

        try {
            const response = await axios.post("http://localhost:3000/movies", movieData);
            console.log("Película agregada exitosamente:", response.data);
            alert("Película agregada exitosamente");
            form.reset();
            form.classList.remove("was-validated");
        } catch (error) {
            if (error.response) {
                const middleMensaje = error.response.data.message + ": " + error.response.data.missingInputs.join(", ") + "\n" + error.response.data.validationErrors.join("\n");
                alert(`${middleMensaje}`);
            } else {
                console.error("Error inesperado:", error);
                alert("Error inesperado. Inténtalo de nuevo.");
            }
            throw Error(error);
        }
    });
});
};


//Implementar una función que maneje el evento de limpieza del formulario y se encargue de seleccionar y vaciar el value de los inputs.
const title = document.getElementById("title");
const year = document.getElementById("year");
const director = document.getElementById("director");
const duration = document.getElementById("duration");
const genre = document.getElementById("genre");
const rate = document.getElementById("rate");
const poster = document.getElementById("poster");

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => limpiarForm(title, year, director, duration, rate, genre, poster));


module.exports = soloFormulario;