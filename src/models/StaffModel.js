const db = require("../database/database.json");

class StaffModel {
  static getAll() {
    let response = {
      staffs: [],
      error: null,
    };
    try {
      response = db.staffs;
    } catch (error) {
      response.error = error;
    }
    return response;
  }

  static getOne(id) {
    let response = {
      staff: null,
      error: null,
    };
    try {
      response = db.staffs.find((staff) => staff.id === id);
    } catch (error) {
      response.error = error;
    }
    return response;
  }

  static create(staff) {
    let response = {
      staff: null,
      error: null,
    };
    try {
      db.staffs.push(staff);
      response = staff;
    } catch (error) {
      response.error = error;
    }
    return response;
  }

  static update(id, staff) {
    let response = {
      staff: null,
      error: null,
    };
    try {
      const index = db.staff.findIndex((staff) => staff.id === id);
      db.staff[index] = staff;
      response = staff;
    } catch (error) {
      response.error = error;
    }
    return response;
  }

  static delete(id) {
    let response = {
      staff: null,
      error: null,
    };
    try {
      const index = db.staff.findIndex((staff) => staff.id === id);
      db.staff.splice(index, 1);
      response = "staff deleted";
    } catch (error) {
      response.error = error;
    }
    return response;
  }
}

module.exports = StaffModel;
