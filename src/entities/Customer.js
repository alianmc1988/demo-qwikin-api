const BaseEntity = require("./BaseEntity");

class Customer extends BaseEntity {
  constructor(name) {
    super();
    this.name = name;
    this.phone = "+5511937015522";
  }
}

module.exports = Customer;
