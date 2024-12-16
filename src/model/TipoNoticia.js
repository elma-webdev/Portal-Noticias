const Sequelize = require("sequelize");
const db = require("../connection/mysql");

// o model vai se comunicar directamente com o banco de dados, sem o id e o timestamp, pois eh automatico

const TipoNoticia = db.define("tipoNoticias", {
  nomeTipo: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

// TipoNoticia.bulkCreate(
//   [{ nomeTipo: "Saúde" },
//   { nomeTipo: "Educação" },
//   { nomeTipo: "Gastronomia" },
//   { nomeTipo: "Povos e culturas" }]
// );


module.exports = TipoNoticia;
