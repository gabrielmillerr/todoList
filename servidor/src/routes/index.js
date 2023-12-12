const { Router } = require("express");
const routes = Router()

const tarefaRoutes = require("./tarefa.routes")

routes.use("/tarefa", tarefaRoutes)

module.exports = routes;