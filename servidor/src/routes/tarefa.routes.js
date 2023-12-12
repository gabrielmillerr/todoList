const { Router } = require("express");
const tarefaRouter = Router();

const TarefaControllers = require("../controllers/TarefaControllers");
const extrairId = require("../middleware/extrairId");

const tarefaControllers = new TarefaControllers();

tarefaRouter.post("/", tarefaControllers.criarTarefa);
tarefaRouter.get("/", tarefaControllers.buscarTarefas);
tarefaRouter.put("/", extrairId, tarefaControllers.atualizarTarefa);
tarefaRouter.delete("/", extrairId, tarefaControllers.deletarTarefa);

module.exports = tarefaRouter;
