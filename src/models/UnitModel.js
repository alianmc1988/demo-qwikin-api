const db = require("../database/database.json");

class UnitModel {
  static getAll() {
    let response = {
      units: [],
      error: null,
    };
    try {
      response = db.units;
    } catch (error) {
      response.error = error;
    }
    return response;
  }

  static getOne(id) {
    let response = {
      unit: null,
      error: null,
    };
    try {
      response = db.units.find((unit) => unit.id === id);
    } catch (error) {
      response.error = error;
    }
    return response;
  }

  static create(unit) {
    let response = {
      unit: null,
      error: null,
    };
    try {
      db.units.push(unit);
      response = unit;
    } catch (error) {
      response.error = error;
    }
    return response;
  }

  static update(id, unit) {
    let response = {
      unit: null,
      error: null,
    };
    try {
      const index = db.units.findIndex((unit) => unit.id === id);
      db.units[index] = unit;
      response = unit;
    } catch (error) {
      response.error = error;
    }
    return response;
  }

  static delete(id) {
    let response = {
      unit: null,
      error: null,
    };
    try {
      const index = db.units.findIndex((unit) => unit.id === id);
      db.units.splice(index, 1);
      response = "Unit deleted";
    } catch (error) {
      response.error = error;
    }
    return response;
  }
}

module.exports = UnitModel;
