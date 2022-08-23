const BaseMessageEntity = require("./BaseMessageEntity");

class SMSMessage extends BaseMessageEntity {
  constructor({ recipientName, sentToNumber, messageBody, sender, unitId }) {
    super({ messageBody, sender, recipientName, unitId });
    this.sentToNumber = sentToNumber;
  }
}

module.exports = SMSMessage;
