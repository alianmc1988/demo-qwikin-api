const Unit = require("../entities/Unit");
const { UnitService } = require("../services");

class UnitController {
  static async getAll(req, _, next) {
    const response = await UnitService.getAll();
    if (response.error) {
      next(response.error);
    }
    req.body = response;
    next();
  }

  static async getOne(req, _, next) {
    const { id } = req.params;
    const response = await UnitService.getOne(id);
    if (response.error) {
      next(response.error);
    }
    req.body = response;
    next();
  }

  static async create(req, _, next) {
    const unit = new Unit(req.body);
    const response = await UnitService.create(unit);
    if (response.error) {
      next(response.error);
    }
    req.body = response;
    next();
  }

  static async update(req, _, next) {
    const { id } = req.params;
    const unit = new Unit(req.body);
    const response = await UnitService.update(id, unit);
    if (response.error) {
      next(response.error);
    }
    req.body = response;
    next();
  }

  static async delete(req, _, next) {
    const { id } = req.params;
    const response = await UnitService.delete(id);
    if (response.error) {
      next(response.error);
    }
    req.body = response;
    next();
  }
}

module.exports = UnitController;
