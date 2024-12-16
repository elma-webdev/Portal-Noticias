const {Router}=require("express")
const routes=new Router()

const NoticiaRoute=require("../Controller/Noticia")

routes.post("/create", NoticiaRoute.store)
routes.get("/find", NoticiaRoute.index)
routes.get("/tipo", NoticiaRoute.newsFortype);


module.exports=routes;