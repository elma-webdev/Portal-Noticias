const Sequelize = require("sequelize");
const db = require("../connection/mysql");
const Jornalista = require("./Jornalista");
const Noticia = require("./Noticia");

// o model vai se comunicar directamente com o banco de dados, sem o id e o timestamp, pois eh automatico

const JornalistaNoticia = db.define("jornalistaNoticias", {
  JornalistaId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Jornalista,
      key: "id",
    },
  },
  NoticiaId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Noticia,
      key: "id",
    },
  },
});

// Relação: Jornalista pode ter muitos jornalistaNoticias
Jornalista.hasMany(JornalistaNoticia, {
  foreignKey: "JornalistaId",
  as: "JornalistaN",
});

// Relação: Noticia pode ter muitos jornalistaNoticias
Noticia.hasMany(JornalistaNoticia, {
  foreignKey: "NoticiaId",
  as: "NoticiaJ",
});

// JornalistaNoticias pertence a um Jornalista
JornalistaNoticia.belongsTo(Jornalista, {
  foreignKey: "JornalistaId",
  as: "Jornalista",
});

// JornalistaNoticias pertence a uma Noticia
JornalistaNoticia.belongsTo(Noticia, {
  foreignKey: "NoticiaId",
  as: "Noticia",
});

module.exports = JornalistaNoticia;
