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
      customer: {},
      error: null,
    };
    try {
      response.customer = {
        ...db.customers.find((customer) => customer.id === id),
      };
    } catch (error) {
      response.error = error;
    }
    return new Promise((resolve, reject) => {
      if (response.error) {
        reject(response.error);
      }
      resolve(response.customer);
    });
  }

  static async create(customer) {
    let response = {
      customer: null,
      error: null,
    };

    try {
      const pushCustomer = new Promise((resolve, reject) => {
        resolve(db.customers.push(customer));
      });
      await pushCustomer;
      response = await this.getOne(customer.id);
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
