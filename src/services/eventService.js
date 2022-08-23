const EventModel = require("../models/EventModel");

class EventService {
  static async getAll() {
    return EventModel.getAll();
  }

  static async getOne(id) {
    return EventModel.getOne(id);
  }

  static async create(event) {
    return EventModel.create(event);
  }

  static async update(id, event) {
    return EventModel.update(id, event);
  }

  static async delete(id) {
    return EventModel.delete(id);
  }
}

module.exports = EventService;
