const db = require("../database/database.json");

class CustomerModel {
  static getAll() {
    let response = {
      customers: [],
      error: null,
    };
    try {
      response = db.customers;
    } catch (error) {
      response.error = error;
    }
    return response;
  }

  static getOne(id) {
    let response = {
      customer: null,
      error: null,
    };
    try {
      response = db.customers.find((customer) => customer.id === id);
    } catch (error) {
      response.error = error;
    }
    return response;
  }

  static create(customer) {
    let response = {
      customer: null,
      error: null,
    };
    try {
      db.customers.push(customer);
      response = customer;
    } catch (error) {
      response.error = error;
    }
    return response;
  }

  static update(id, customer) {
    let response = {
      customer: null,
      error: null,
    };
    try {
      const index = db.customers.findIndex((customer) => customer.id === id);
      db.customers[index] = customer;
      response = customer;
    } catch (error) {
      response.error = error;
    }
    return response;
  }

  static delete(id) {
    let response = {
      customer: null,
      error: null,
    };
    try {
      const index = db.customers.findIndex((customer) => customer.id === id);
      db.customers.splice(index, 1);
      response = id;
    } catch (error) {
      response.error = error;
    }
    return response;
  }
}

module.exports = CustomerModel;
