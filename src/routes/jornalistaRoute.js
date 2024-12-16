const {Router}=require("express")
const routes=new Router()
const Jornalista=require("../Controller/Jornalista")
const authMiddleware = require("../middleware/auth.token");

routes.get("/find", authMiddleware, Jornalista.index);
routes.post("/register", Jornalista.store);
routes.post("/reset", Jornalista.reset);
routes.post("/login", Jornalista.login);
routes.put("/up/:id", Jornalista.update);

module.exports = routes;
