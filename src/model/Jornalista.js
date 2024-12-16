const Sequelize = require("sequelize");
const db = require("../connection/mysql");

// o model vai se comunicar directamente com o banco de dados, sem o id e o timestamp, pois eh automatico

const jornalistas = db.define("jornalistas", {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  sobrenome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique:true
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
// jornalistas.sync({force:true})

module.exports = jornalistas;
