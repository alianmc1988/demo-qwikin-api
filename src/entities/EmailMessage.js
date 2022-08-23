const BaseMessageEntity = require("./BaseMessageEntity");

class EmailMessage extends BaseMessageEntity {
  constructor({
    recipientName,
    sentToEmailAddress,
    messageBody,
    sender,
    unitId,
  }) {
    super({ messageBody, sender, recipientName, unitId });
    this.sentToEmailAddress = sentToEmailAddress;
  }
}

module.exports = EmailMessage;
