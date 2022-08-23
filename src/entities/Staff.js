const BaseEntity = require("./BaseEntity");

class Staff extends BaseEntity {
  constructor({ name }) {
    super();
    this.name = name;
  }
}

module.exports = Staff;
