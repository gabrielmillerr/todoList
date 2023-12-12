const extrairId = (req, res, next) => {
  try {
    const id = req.body.id;

    if (!id) {
      return res.status(400).json({ mensagem: "ID não encontrado!" });
    }

    req.tarefaId = id;
    next();
  } catch (error) {
    res.status(500).json({ mensagem: "Erro interno do servidor ao extrair ID" });
  }
};

module.exports = extrairId;
