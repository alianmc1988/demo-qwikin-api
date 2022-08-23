const db = require("../database/database.json");

class GateModel {
  static getAll() {
    let response = {
      gates: [],
      error: null,
    };
    try {
      response = db.gates;
    } catch (error) {
      response.error = error;
    }
    return response;
  }

  static getOne(id) {
    let response = {
      gate: null,
      error: null,
    };
    try {
      response = db.gates.find((gate) => gate.id === id);
    } catch (error) {
      response.error = error;
    }
    return response;
  }

  static create(gate) {
    let response = {
      gate: null,
      error: null,
    };
    try {
      db.gates.push(gate);
      response = gate;
    } catch (error) {
      response.error = error;
    }
    return response;
  }

  static update(id, gate) {
    let response = {
      gate: null,
      error: null,
    };
    try {
      const index = db.gates.findIndex((gate) => gate.id === id);
      db.gates[index] = gate;
      response = gate;
    } catch (error) {
      response.error = error;
    }
    return response;
  }

  static delete(id) {
    let response = {
      gate: null,
      error: null,
    };
    try {
      const index = db.gates.findIndex((gate) => gate.id === id);
      db.gates.splice(index, 1);
      response = "Gate deleted";
    } catch (error) {
      response.error = error;
    }
    return response;
  }
}

module.exports = GateModel;
