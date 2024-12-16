const {Router}=require("express")
const JNroutes=new Router()
const JornalistaNoticia=require("../Controller/JornalistaNotica")

JNroutes.post("/create", JornalistaNoticia.store)
JNroutes.get("/find", JornalistaNoticia.index)
JNroutes.put("/up/:id", JornalistaNoticia.update);

module.exports = JNroutes;