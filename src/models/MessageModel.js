const db = require("../database/database.json");
class MessageModel {
  static getAll() {
    return db.messages;
  }
  static getOne(id) {
    return db.messages.find((message) => message.id === id);
  }
  static create(message) {
    db.messages.push(message);
    return message;
  }
  static update(id, message) {
    const index = db.messages.findIndex((message) => message.id === id);
    db.messages[index] = message;
    return message;
  }
  static delete(id) {
    const index = db.messages.findIndex((message) => message.id === id);
    db.messages.splice(index, 1);
  }
}
