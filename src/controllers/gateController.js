const Gate = require("../entities/Gate");
const { GateService } = require("../services");

class GateController {
  static getAll(req, _, next) {
    const response = GateService.getAll();
    if (response.error) {
      next(response.error);
    }
    req.body = response;
    next();
  }

  static getOne(req, _, next) {
    const { id } = req.params;
    const response = GateService.getOne(id);
    if (response.error) {
      next(response.error);
    }
    req.body = response;
    next();
  }

  static create(req, _, next) {
    const { gateName } = req.body;
    const gate = new Gate({ gateName });
    const response = GateService.create(gate);
    if (response.error) {
      next(response.error);
    }
    req.body = response;
    next();
  }

  static update(req, _, next) {
    const { id } = req.params;
    const { gateName } = req.body;
    const gate = new Gate({ gateName });
    const response = GateService.update(id, gate);
    if (response.error) {
      next(response.error);
    }
    req.body = response;
    next();
  }

  static delete(req, _, next) {
    const { id } = req.params;
    const response = GateService.delete(id);
    if (response.error) {
      next(response.error);
    }
    req.body = response;
    next();
  }
}

module.exports = GateController;
