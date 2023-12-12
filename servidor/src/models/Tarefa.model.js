const mongoose = require("mongoose");

const tarefaSchema = new mongoose.Schema({
  mensagem: {
    type: String,
    required: true,
  },
});

const TarefaModel = mongoose.model("Tarefa", tarefaSchema);

module.exports = TarefaModel;


