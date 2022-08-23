const { CustomerService } = require("../services");
const Customer = require("../entities/Customer");

class CustomerController {
  static async createCustomer(req, _, next) {
    const { name } = req.body;
    const customer = new Customer(name);
    const response = await CustomerService.create(customer);
    if (response.error) {
      next(response.error);
    }
    req.body = response;
    next();
  }

  static async getAllCustomers(req, _, next) {
    const response = await CustomerService.getAll();
    console.log(response);
    if (response.error) {
      next(response.error);
    }
    req.body = response;
    next();
  }

  static async getOneCustomer(req, _, next) {
    const { id } = req.params;
    const response = await CustomerService.getOne(id);
    if (response.error) {
      next(response.error);
    }
    req.body = response;
    next();
  }

  static async updateCustomer(req, _, next) {
    const { id } = req.params;
    const { name } = req.body;
    const customer = new Customer(name);
    const response = await CustomerService.update(id, customer);
    if (response.error) {
      next(response.error);
    }
    req.body = response;
    next();
  }

  static async deleteCustomer(req, _, next) {
    const { id } = req.params;
    const response = await CustomerService.delete(id);
    if (response.error) {
      next(response.error);
    }
    req.body = response;
    next();
  }
}

module.exports = CustomerController;
