const Staff = require("../entities/Staff");
const { StaffService } = require("../services");

class StaffController {
  static async getAll(req, _, next) {
    const response = await StaffService.getAll();
    if (response.error) {
      next(response.error);
    }
    req.body = response;
    next();
  }

  static async getOne(req, _, next) {
    const { id } = req.params;
    const response = await StaffService.getOne(id);
    if (response.error) {
      next(response.error);
    }
    req.body = response;
    next();
  }

  static async create(req, _, next) {
    const staff = new Staff(req.body);
    const response = await StaffService.create(staff);
    if (response.error) {
      next(response.error);
    }
    req.body = response;
    next();
  }

  static async update(req, _, next) {
    const { id } = req.params;
    const staff = new Staff(req.body);
    const response = await StaffService.update(id, staff);
    if (response.error) {
      next(response.error);
    }
    req.body = response;
    next();
  }

  static async delete(req, _, next) {
    const { id } = req.params;
    const response = await StaffService.delete(id);
    if (response.error) {
      next(response.error);
    }
    req.body = response;
    next();
  }
}

module.exports = StaffController;
