const express = require('express');
const router = express.Router();
const cargoRouter = require('./cargo.router');
const departamentoRouter = require('./departamento.router');
const userRouter = require('./user.router');


// colocar las rutas aquí
router.use('/cargos', cargoRouter);
router.use('/departamentos', departamentoRouter);
router.use('/users', userRouter);


module.exports = router;