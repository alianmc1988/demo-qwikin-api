const db = require("../database/database.json");

class EventModel {
  static getAll() {
    let response = {
      events: [],
      error: null,
    };
    try {
      response = db.events;
    } catch (error) {
      response.error = error;
    }
    return response;
  }

  static getOne(id) {
    let response = {
      event: null,
      error: null,
    };
    try {
      response = db.events.find((event) => event.id === id);
    } catch (error) {
      response.error = error;
    }
    return response;
  }

  static create(event) {
    let response = {
      event: null,
      error: null,
    };
    try {
      db.events.push(event);
      response = event;
    } catch (error) {
      response.error = error;
    }
    return response;
  }

  static update(id, event) {
    let response = {
      event: null,
      error: null,
    };
    try {
      const index = db.events.findIndex((event) => event.id === id);
      db.events[index] = event;
      response = event;
    } catch (error) {
      response.error = error;
    }
    return response;
  }

  static delete(id) {
    let response = {
      event: null,
      error: null,
    };
    try {
      const index = db.events.findIndex((event) => event.id === id);
      db.events.splice(index, 1);
      response = { message: "Event deleted" };
    } catch (error) {
      response.error = error;
    }
    return response;
  }
}

module.exports = EventModel;
