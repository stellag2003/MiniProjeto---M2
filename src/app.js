const express = require('express');
const app = express();
const rota = require('./routes');

rota(app);

module.exports = app;

