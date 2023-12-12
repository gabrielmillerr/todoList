const TarefaModel = require("../models/Tarefa.model");

class TarefaControllers {
  async criarTarefa(req, res) {
    try {
      const tarefa = await TarefaModel.create(req.body);

      res.status(201).json(tarefa);
    } catch (error) {
      console.error("erro criar mensagens:", error);
      res.status(500).json();
    }
  }
  async buscarTarefas(req, res) {
    try {
      const tarefas = await TarefaModel.find({});

      res.status(200).json(tarefas);
    } catch (error) {
      return res.status(500);
    }
  }
  async atualizarTarefa(req, res) {
    try {
      const id = req.tarefaId;
      const tarefas = await TarefaModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      res.status(200).json(tarefas);
    } catch (error) {
      res.status(500);
    }
  }
  async deletarTarefa(req, res) {
    try {
      const id = req.tarefaId;
      const tarefaDeletada = await TarefaModel.findByIdAndDelete(id);

      if(!tarefaDeletada) {
        return res.status(404).json({ mensagem: "Tarefa não encontrada" });
      }

      res.status(200).json({ mensagem: "Tarefa excluida com sucesso" });
    } catch (error) {
      res.status(500).json({ mensagem: "Erro interno do servidor ao deletar tarefa" });
    }
  }
}

module.exports = TarefaControllers;
