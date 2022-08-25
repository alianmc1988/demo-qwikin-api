const BaseEntity = require("./BaseEntity");

class Customer extends BaseEntity {
  constructor(name, phone) {
    super();
    this.name = name;
    this.phone = phone || "+5511937015522";
  }
}

module.exports = Customer;
