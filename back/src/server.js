const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const moviesRouter = require("./routes/moviesRouter.js");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use(moviesRouter);

app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({ error: err.message });
    console.log("algo paso aquí en el server");
});

module.exports = app;