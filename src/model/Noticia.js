const Sequelize = require("sequelize");
const db = require("../connection/mysql");
const TipoNoticia = require("./TipoNoticia");

// o model vai se comunicar directamente com o banco de dados, sem o id e o timestamp, pois eh automatico

const noticias = db.define("noticias", {
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  corpo: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      len: [3, 1000], // Comprimento entre 3 e 255 caracteres
    },
  },
  imagem: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  tiponewsId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: TipoNoticia,
      key: "id", // Certifique-se de que corresponde à chave primária de TipoNoticia
    },
  },
});

TipoNoticia.hasMany(noticias, {
  foreignKey: "tiponewsId",
  as: "TipoNoticia",
});

noticias.belongsTo(TipoNoticia, {
  foreignKey: "tiponewsId",
  as: "TipoNoticia",
});


module.exports = noticias;
