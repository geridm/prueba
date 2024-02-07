const catchError = require('../utils/catchError');
const Cargo = require('../models/Cargo');

const getAll = catchError(async(req, res) => {
    const cargos = await Cargo.findAll();
    return res.json(cargos)
});

const create = catchError(async(req, res) => {
    const cargo = await Cargo.create(
        req.body
    );
    return res.status(201).json(cargo);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const cargo = await User.findByPk(id);
    return res.json(cargo);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Cargo.destroy({ where: { id } });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const cargo = await Cargo.update(
        req.body,
        { where: { id }, returning: true }
    );
    return res.json(cargo);
});

const setCargoUsers = catchError(async(req, res) => {
    const { id } = req.params;
    const cargo = await Cargo.findByPk(id);
    await cargo.setUsers(req.body); 
    const users = await cargo.getUsers();
    return res.json(users); 
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    setCargoUsers

}