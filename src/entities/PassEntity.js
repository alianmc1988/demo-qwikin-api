const BaseEntity = require("./BaseEntity");

class Pass extends BaseEntity {
  constructor(guestName, unitNumber, condoName, phoneNumber) {
    super();
    this.guestName = guestName;
    this.unitNumber = unitNumber;
    this.condoName = condoName;
    this.phoneNumber = phoneNumber;
  }
}

module.exports = Pass;
