const datasource = require('../models');

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async pegaTodosOsRegistros() {
    return datasource[this.model].findAll();
  }

  async atualizaRegistro(dadosAtualizados, id) {
    const listaDeRegistrosAtualizados = datasource[this.model].update(dadosAtualizados, {
      where: { id: id}
    });

    return listaDeRegistrosAtualizados[0] === 0 ? false : true;
  }

  
}

module.exports = Services;