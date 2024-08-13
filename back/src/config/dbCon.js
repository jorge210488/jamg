require("dotenv").config();
const mongoose = require("mongoose");

// console.log('Mongo URI:', process.env.MONGO_URI);

const dbCon = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Conectado a MongoDB');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
        throw error;
    }
};

module.exports = dbCon;