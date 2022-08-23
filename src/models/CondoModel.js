const db = require("../database/database.json");

class CondoModel {
  static getAll() {
    let response = {
      condos: [],
      error: null,
    };
    try {
      response = db.condos;
    } catch (error) {
      response.error = error;
    }
    return response;
  }

  static getOne(id) {
    let response = {
      condo: null,
      error: null,
    };
    try {
      response = db.condos.find((condo) => condo.id === id);
    } catch (error) {
      response.error = error;
    }
    return response;
  }

  static create(condo) {
    let response = {
      condo: null,
      error: null,
    };
    try {
      db.condos.push(condo);
      response = condo;
    } catch (error) {
      response.error = error;
    }
    return response;
  }

  static update(id, condo) {
    let response = {
      condo: null,
      error: null,
    };
    try {
      const index = db.condos.findIndex((condo) => condo.id === id);
      db.condos[index] = condo;
      response = condo;
    } catch (error) {
      response.error = error;
    }
    return response;
  }

  static delete(id) {
    let response = {
      condo: null,
      error: null,
    };
    try {
      const index = db.condos.findIndex((condo) => condo.id === id);
      db.condos.splice(index, 1);
      response = "Condo deleted";
    } catch (error) {
      response.error = error;
    }
    return response;
  }
}

module.exports = CondoModel;
