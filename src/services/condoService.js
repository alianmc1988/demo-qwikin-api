const CondoModel = require("../models/CondoModel");

class CondoService {
  static async getAll() {
    return CondoModel.getAll();
  }

  static async getOne(id) {
    return CondoModel.getOne(id);
  }

  static async create(condo) {
    return CondoModel.create(condo);
  }

  static async update(id, condo) {
    return CondoModel.update(id, condo);
  }

  static async delete(id) {
    return CondoModel.delete(id);
  }
}

module.exports = CondoService;
