require("dotenv").config();
const express = require("express");
const app = express();
const rota = require("./routes");
const cors = require("cors");
const manipuladorDeErros = require("./middlewares/manipuladorDeErros");

app.use(cors());
app.use(express.json());

rota(app);

app.use(manipuladorDeErros);

module.exports = app;
