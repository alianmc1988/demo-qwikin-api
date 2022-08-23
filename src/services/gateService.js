const GateModel = require("../models/GateModel");

class GateService {
  static getAll() {
    return GateModel.getAll();
  }

  static getOne(id) {
    return GateModel.getOne(id);
  }

  static create(gate) {
    return GateModel.create(gate);
  }

  static update(id, gate) {
    return GateModel.update(id, gate);
  }

  static delete(id) {
    return GateModel.delete(id);
  }
}

module.exports = GateService;
