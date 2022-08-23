const Event = require("../entities/Event");
const { EventService } = require("../services");

class EventController {
  static async getAll(req, _, next) {
    const response = await EventService.getAll();
    if (response.error) {
      next(response.error);
    }
    req.body = response;
    next();
  }

  static async getOne(req, _, next) {
    const { id } = req.params;
    const response = await EventService.getOne(id);
    if (response.error) {
      next(response.error);
    }
    req.body = response;
    next();
  }

  static async create(req, _, next) {
    const { time, condo, customer, unitId, staff, gate, score, message } =
      req.body;
    const event = new Event(
      time,
      condo,
      customer,
      unitId,
      staff,
      gate,
      score,
      message
    );
    const response = await EventService.create(event);
    if (response.error) {
      next(response.error);
    }
    req.body = response;
    next();
  }

  static async update(req, _, next) {
    const { id } = req.params;
    const event = new Event(req.body);
    const response = await EventService.update(id, event);
    if (response.error) {
      next(response.error);
    }
    req.body = response;
    next();
  }

  static async delete(req, _, next) {
    const { id } = req.params;
    const response = await EventService.delete(id);
    if (response.error) {
      next(response.error);
    }
    req.body = response;
    next();
  }
}

module.exports = EventController;
