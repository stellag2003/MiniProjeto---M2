const express = require('express');
const tarefas = require('./tarefaRoutes.js');

module.exports = app =>{
    app.use(
        express.json(),
        tarefas,
    );
};

