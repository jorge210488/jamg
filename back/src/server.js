const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const moviesRouter = require("./routes/moviesRouter.js");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use(moviesRouter);

module.exports = app;