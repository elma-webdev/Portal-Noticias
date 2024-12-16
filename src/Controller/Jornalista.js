const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json"); // secret do token
const Jornalista = require("../model/Jornalista");

function generateToken(params) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: "1h",
  });
}

module.exports = {
  async index(req, res) {
    try {
      const find = await Jornalista.findAll({
        attributes: ["id", "nome", "sobrenome", "email"],
      });
      console.log(`o user logado e ${req.userId}`); // para verificar quem esta a bater nesta requisicao com base ao token
      return res.json(find);
    } catch (e) {
      return res.status(400).json({ message: e });
    }
  },

  async store(req, res) {
    const { nome, sobrenome, email, senha } = req.body;
    try {
      const jornalista = await Jornalista.create({
        nome,
        sobrenome,
        email,
        senha: bcrypt.hashSync(senha, 10),
      });
      return res
        .status(201)
        .json({ message: "sucessfully created", jornalista });
    } catch (e) {
      return res.status(400).json({ message: "error", e });
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const { nome, sobrenome, email, senha } = req.body;
    try {
      const Jornalista = await Jornalista.findByPk(id);
      if (Jornalista) {
        const update = Jornalista.update({ nome, sobrenome, email, senha });
        return res.json({ message: "Jornalista updated", Jornalista: update });
      }
      return res.json({ message: "Jornalista not found!" });
    } catch (e) {
      return res.json({ messagem: e });
    }
  },

  async delete(req, res) {
    const { id } = req.params;

    try {
      const Jornalista = await Jornalista.findByPk(id);
      if (Jornalista) {
        const update = Jornalista.destroy();
        return res.json(update);
      }
      return res.json({ message: "Jornalista not found!" });
    } catch (e) {
      return res.json({ messagem: e });
    }
  },

  async login(req, res) {
    const { email, senha } = req.body;
    try {
      const ProcurarEmail = await Jornalista.findOne({
        where: { email },
      });
      if (!ProcurarEmail) {
        return res.status(400).json({ message: "usuário não encontrado!" });
      }
      if (!bcrypt.compareSync(senha, ProcurarEmail.senha)) {
        return res.status(400).json({ message: "senha incorrecta!" });
      }
      ProcurarEmail.senha = undefined;
      const token = generateToken({ id: ProcurarEmail.id });
      return res.status(200).json({ message: ProcurarEmail, token: token });
    } catch (e) {
      return res.json({message:e});
    }
  },
};
