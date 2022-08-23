const StaffModel = require("../models/StaffModel");

class StaffService {
  static getAll() {
    const response = StaffModel.getAll();
    return response;
  }

  static getOne(id) {
    const response = StaffModel.getOne(id);
    return response;
  }

  static create(staff) {
    const response = StaffModel.create(staff);
    return response;
  }

  static update(id, staff) {
    const response = StaffModel.update(id, staff);
    return response;
  }

  static delete(id) {
    const response = StaffModel.delete(id);
    return response;
  }
}

module.exports = StaffService;
