require("dotenv").config();
const express = require("express");
const app = express();
const rota = require("./routes");
const manipuladorDeErros = require("./middlewares/manipuladorDeErros");

rota(app);

app.use(manipuladorDeErros);

module.exports = app;
