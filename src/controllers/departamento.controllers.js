const catchError = require('../utils/catchError');
const Departamento = require('../models/Departamento');

const getAll = catchError(async(req, res) => {
    const departamentos = await Departamento.findAll();
    return res.json(departamentos)
});

const create = catchError(async(req, res) => {
    const departamento = await Departamento.create(
        req.body
    );
    return res.status(201).json(departamento);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const departamento = await User.findByPk(id);
    return res.json(departamento);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Cargo.destroy({ where: { id } });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const departamento = await Departamento.update(
        req.body,
        { where: { id }, returning: true }
    );
    return res.json(departamento);
});

const setDepartamentoUsers = catchError(async(req, res) => {
    const { id } = req.params;
    const departamento = await Departamento.findByPk(id);
    await departamento.setUsers(req.body); 
    const users = await departamento.getUsers();
    return res.json(users); 
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}