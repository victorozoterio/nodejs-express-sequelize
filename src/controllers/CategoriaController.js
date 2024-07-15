const Controller = require('./Controllers.js');
const CategoriaServices = require('../services/CategoriaServices.js');

const categoriaServices = new CategoriaServices();

class CategoriaController extends Controller {
  constructor() {
    super(categoriaServices);
  }
}

module.exports = CategoriaController;
