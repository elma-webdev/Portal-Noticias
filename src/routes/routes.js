const { Router } = require("express");
const routes = new Router();
const Jornalista = require("./jornalistaRoute");
const Noticia = require("./NoticiaRoute");
const JornalistaNoticia = require("./JornalistaNoticiaRoute");
const authMiddleware = require("../middleware/auth.token");

routes.use("/jornalista", Jornalista);
routes.use("/noticia", authMiddleware, Noticia);
routes.use("/jn", JornalistaNoticia);

module.exports = routes;
