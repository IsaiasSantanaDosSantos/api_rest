import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "Isaias",
      sobrenome: "Santana",
      email: "isaias@gmail.com",
      idade: 38,
      peso: 85.5,
      altura: 1.73,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
