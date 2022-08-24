const createId = require("../helpers/createId");

class BaseEntity {
  constructor() {
    this.id = createId();
  }
}

module.exports = BaseEntity;
