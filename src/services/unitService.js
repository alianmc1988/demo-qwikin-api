const UnitModel = require("../models/UnitModel");

class UnitService {
  static getAll() {
    const response = UnitModel.getAll();
    return response;
  }

  static getOne(id) {
    const response = UnitModel.getOne(id);
    return response;
  }

  static create(unit) {
    const response = UnitModel.create(unit);
    return response;
  }

  static update(id, unit) {
    const response = UnitModel.update(id, unit);
    return response;
  }

  static delete(id) {
    const response = UnitModel.delete(id);
    return response;
  }
}

module.exports = UnitService;
