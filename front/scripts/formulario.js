const axios = require("axios");
const val = require("./validation.js");

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
                
                console.error("Error al agregar la película:", middleMensaje);
    
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

module.exports = soloFormulario;