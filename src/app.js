require("dotenv").config()
const express = require("express");
const route = require("./routes/routes");
const app = express();
app.use(express.json());

app.use("/api", route);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Algo deu errado!");
  return next()
});

app.listen(process.env.PORT, () => {
  // console.log("Servidor activo");
});
