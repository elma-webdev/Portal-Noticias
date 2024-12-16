const database=require("../config/database")

const { Sequelize } = require("sequelize");
const sequelizeConnection = new Sequelize(database);

sequelizeConnection
  .authenticate()
  .then(() => {
    console.log("conexão criada!");
  })
  .catch((e) => {
    console.log("erro ao conectar com o banco de dados :(", e);
  });


module.exports=sequelizeConnection