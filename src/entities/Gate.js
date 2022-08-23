const BaseEntity = require("./BaseEntity");

class Gate extends BaseEntity {
  constructor({ gateName }) {
    super();
    this.gateName = gateName;
  }
}

module.exports = Gate;
