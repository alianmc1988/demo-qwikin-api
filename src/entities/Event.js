const BaseEntity = require("./BaseEntity");

class Event extends BaseEntity {
  constructor({ time, condo, customer, unitId, staff, gate, score, message }) {
    super();
    this.time = time;
    this.unit = unitId;
    this.condo = condo; // condoId and return condo populated
    this.customer = customer; // customerId and return customer populated
    this.staff = staff; // staffId and return staff populated
    this.gate = gate; // gateId and return gate populated
    this.score = score;
    this.message = message;
  }
}

module.exports = Event;
