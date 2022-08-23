const BaseEntity = require("./BaseEntity");

class Unit extends BaseEntity {
  constructor({ unitNumber }) {
    super();
    this.unitNumber = unitNumber;
  }
}

module.exports = Unit;
