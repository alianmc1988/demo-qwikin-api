const CondoService = require("../services").CondoService;
const Condo = require("../entities/Condo");

class CondoController {
  static async createCondo(req, _, next) {
    const { name } = req.body;
    const condo = new Condo(name);
    const response = await CondoService.create(condo);
    if (response.error) {
      next(response.error);
    }
    req.body = response;
    next();
  }

  static async getAllCondos(req, _, next) {
    const response = await CondoService.getAll();
    if (response.error) {
      next(response.error);
    }
    req.body = response;
    next();
  }

  static async getOneCondo(req, _, next) {
    const { id } = req.params;
    const response = await CondoService.getOne(id);
    if (response.error) {
      next(response.error);
    }
    req.body = response;
    next();
  }

  static async updateCondo(req, _, next) {
    const { id } = req.params;
    const { name } = req.body;
    const condo = new Condo(name);
    const response = await CondoService.update(id, condo);
    if (response.error) {
      next(response.error);
    }
    req.body = response;
    next();
  }

  static async deleteCondo(req, _, next) {
    const { id } = req.params;
    const response = await CondoService.delete(id);
    if (response.error) {
      next(response.error);
    }
    req.body = response;
    next();
  }
}

module.exports = CondoController;
