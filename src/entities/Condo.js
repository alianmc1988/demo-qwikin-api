const BaseEntity = require("./BaseEntity");

class Condo extends BaseEntity {
  constructor(name) {
    super();
    this.name = name;
  }
}

module.exports = Condo;
