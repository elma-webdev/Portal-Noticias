const JornalistaNoticia = require("../model/JornalistaNoticia");
const Noticia = require("../model/Noticia");
const Jornalista = require("../model/Jornalista");

module.exports = {
  async index(req, res) {
    try {
      const find = await JornalistaNoticia.findAll({
        attributes: {
          exclude: ["JornalistaId", "NoticiaId", "createdAt", "updatedAt"],
        },
        include: [
          {
            model: Jornalista,
            as: "Jornalista",
            attributes: ["nome", "sobrenome"],
          },
          { model: Noticia, as: "Noticia", attributes: ["titulo"] },
        ],
      });
      console.log(`o user logado e ${req.userId}`); // para verificar quem esta a bater nesta requisicao com base ao token
      return res.json(find);
    } catch (e) {
      return res.json({message:e});
    }
  },

  async store(req, res) {
    const { JornalistaId, NoticiaId } = req.body;
    try {
      const relacao = await JornalistaNoticia.create({
        JornalistaId,
        NoticiaId,
      });
      return res.status(201).json({ message: "sucessfully created", relacao });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ message: e });
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const { JornalistaId, NoticiaId } = req.body;
    try {
      const JornalistaN = await JornalistaNoticia.findByPk(id);
      if (JornalistaN) {
        await JornalistaN.update({
          JornalistaId,
          NoticiaId,
        });
        return res.json({
          message: "Jornalista updated",
          JornalistaNoticia: JornalistaN,
        });
      }
      return res.json({ message: "JornalistaNoticia not found!" });
    } catch (e) {
      return res.json({ messagem: e });
    }
  },

  async delete(req, res) {
    const { id } = req.params;

    try {
      const Jornalista = await JornalistaNoticia.findByPk(id);
      if (Jornalista) {
        const update = JornalistaNoticia.destroy();
        return res.json(update);
      }
      return res.json({ message: "Jornalista not found!" });
    } catch (e) {
      return res.json({ message: e });
    }
  },
};
