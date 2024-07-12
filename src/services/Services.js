const dataSource = require('../models');

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async criaRegistro(dados) {
    return dataSource[this.model].create(dados);
  }

  async pegaTodosOsRegistros() {
    return dataSource[this.model].findAll();
  }

  async pegaUmRegistro(id) {
    return dataSource[this.model].findByPk(id);
  }

  async atualizaRegistro(dadosAtualizados, id) {
    const listaDeregistroAtualizado = dataSource[this.model].update(dadosAtualizados, {
      where: { id: id },
    });
    if (listaDeregistroAtualizado[0] === 0) {
      return false;
    }
    return true;
  }

  async excluiRegistro(id) {
    return dataSource[this.model].destroy({
      where: { id: id },
    });
  }
}

module.exports = Services;
