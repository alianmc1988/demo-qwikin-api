const BaseEntity = require("./BaseEntity");

class Customer extends BaseEntity {
  constructor({ name }) {
    super();
    this.name = name;
  }
}

module.exports = Customer;
