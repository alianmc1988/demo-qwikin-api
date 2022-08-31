const BaseEntity = require("./BaseEntity");

class RaitingsEntity extends BaseEntity {
  constructor(name, condoName, gateName, score, staffName, unitNumber) {
    super();
    this.name = name;
    this.condoName = condoName;
    this.gateName = gateName || "Gate 1";
    this.score = score;
    this.staffName = staffName;
    this.unitNumber = unitNumber;
  }
}

module.exports = RaitingsEntity;
