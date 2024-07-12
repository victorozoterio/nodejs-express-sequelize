class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async cria(req, res) {
    const dados = req.body;
    try {
      const foiCriado = await this.entidadeService.criaRegistro(dados);
      if (!foiCriado) {
        return res.status(400).json({ mensagem: 'Registro não foi criado' });
      }
      return res.status(200).json({ mensagem: 'Registro criado com sucesso' });
    } catch (erro) {}
  }

  async pegaTodos(req, res) {
    try {
      const listaDeRegistros = await this.entidadeService.pegaTodosOsRegistros();
      return res.status(200).json(listaDeRegistros);
    } catch (erro) {}
  }

  async pegaUm(req, res) {
    const { id } = req.params;
    try {
      const registro = await this.entidadeService.pegaUmRegistro(Number(id));
      return res.status(200).json(registro);
    } catch (erro) {}
  }

  async atualiza(req, res) {
    const { id } = req.params;
    const dadosAtualizados = req.body;
    try {
      const foiAtualizado = await this.entidadeService.atualizaRegistro(
        dadosAtualizados,
        Number(id),
      );
      if (!foiAtualizado) {
        return res.status(400).json({ mensagem: 'Registro não foi atualizado' });
      }
      return res.status(200).json({ mensagem: 'Registro atualizado com sucesso' });
    } catch (erro) {}
  }

  async exclui(req, res) {
    const { id } = req.params;
    try {
      const foiExcluido = await this.entidadeService.excluiRegistro(Number(id));
      if (!foiExcluido) {
        return res.status(400).json({ mensagem: 'Registro não foi excluido' });
      }
      return res.status(200).json({ mensagem: 'Registro excluido com sucesso' });
    } catch (erro) {}
  }
}

module.exports = Controller;
