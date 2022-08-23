const CustomerModel = require("../models/CustomerModel");

class CustomerService {
  static async getAll() {
    return CustomerModel.getAll();
  }

  static async getOne(id) {
    return CustomerModel.getOne(id);
  }

  static async create(customer) {
    return CustomerModel.create(customer);
  }

  static async update(id, customer) {
    return CustomerModel.update(id, customer);
  }

  static async delete(id) {
    return CustomerModel.delete(id);
  }
}

module.exports = CustomerService;
