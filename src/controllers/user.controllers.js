const catchError = require('../utils/catchError');
const User = require('../models/User');
const Cargo = require('../models/Cargo');

const getAll = catchError(async(req, res) => {
    const users = await User.findAll({ include: [{
        model: Cargo,
        attributes: ["id"]
    }] });
    return res.json(users)
});

const create = catchError(async(req, res) => {
    const user = await User.create(
        req.body
    );
    return res.status(201).json(user);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ message: "User not found" })
    return res.json(country);
})

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await User.destroy({ where: { id } });
    return res.sendStatus(204);
})

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const user = await User.update(
        req.body,
        { where: { id }, returning: true }
    )
    if (user[0] === 0) return res.status(404).json({ message: "Country not found" })
    return res.json(user[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}