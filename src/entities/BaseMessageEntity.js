const BaseEntity = require("./BaseEntity");
const { PENDING } = require("../constants");

class BaseMessageEntity extends BaseEntity {
  constructor({ messageBody, sender, recipientName, unitId }) {
    super();
    this.messageBody = messageBody;
    this.sender = sender;
    this.recipientName = recipientName;
    this.unitId = unitId;
    this.status = PENDING;
    this.sentAt = new Date(Date.now());
  }
}

module.exports = BaseMessageEntity;
