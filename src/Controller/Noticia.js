const Noticia = require("../model/Noticia");
const TipoNoticia = require("../model/TipoNoticia");

module.exports = {
  async index(req, res) {

    try{
      const find = await Noticia.findAll({
      include: [
        {
          model: TipoNoticia,
          as: "TipoNoticia", //
        },
      ],
    });
    return res.json(find);
    }
    catch(e){
      return res.status(400).json({message:e})
    }
    
  },

  async store(req, res) {
    const { titulo, descricao, corpo, imagem, tiponewsId } = req.body;
    try {
      const news = await Noticia.create({
        titulo,
        descricao,
        corpo,
        imagem,
        tiponewsId,
      });
      return res.status(201).json({ message: "sucessfully created", news });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ message:e });
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const { titulo, descricao, corpo, imagem, tiponewsId } = req.body;
    try {
      const Noticia = await Noticia.findByPk(id);
      if (Noticia) {
        const update = Noticia.update({
          titulo,
          descricao,
          corpo,
          imagem,
          tiponewsId,
        });
        return res.json({ message: "Noticia updated", Noticia: update });
      }
      return res.json({ message: "Noticia not found!" });
    } catch (e) {
      return res.json({ message: e });
    }
  },

  async delete(req, res) {
    const { id } = req.params;

    try {
      const Noticia = await Noticia.findByPk(id);
      if (Noticia) {
        const update = Noticia.destroy();
        return res.json(update);
      }
      return res.json({ message: "Noticia not found!" });
    } catch (e) {
      return res.json({ message: e });
    }
  },

  async newsFortype(req, res){
    try{

      const {tipoNoticia}=req.query
      const find = await Noticia.findAll({
        include: [
          {
            model: TipoNoticia,
            as: "TipoNoticia",
            where:{
              nomeTipo:tipoNoticia
            }
          },  
        ],
      });
      console.log(tipoNoticia)
      return res.json(find)

    }
    catch(e){
      return res.json({ message: e });
    }
  }
};
