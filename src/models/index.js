const Cargo = require("./Cargo");
const Departamento = require("./Departamento");
const User = require("./User");

Departamento.hasMany(User)
User.belongsTo(Departamento);

Cargo.hasMany(User)
User.belongsTo(Cargo);


User.hasMany(Departamento, { foreignKey: {name: 'idUsuarioCreacion'} })
Departamento.belongsTo(User, { foreignKey: {name: 'idUsuarioCreacion'} });

User.hasMany(Cargo, { foreignKey: {name: 'idUsuarioCreacion'} })
Cargo.belongsTo(User, { foreignKey: {name: 'idUsuarioCreacion'} });