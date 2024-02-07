const { getAll, create, getOne, remove, update } = require('../controllers/departamento.controllers');
const express = require('express');

const departamentoRouter = express.Router();

departamentoRouter.route('/')
    .get(getAll)
    .post(create);

departamentoRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update)

    

module.exports = departamentoRouter;