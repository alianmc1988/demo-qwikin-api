const Event = require("../entities/Event");
const Customer = require("../entities/Customer");
const { EventService, CustomerService, TwilioService } = require("../services");
const { messagesResponses } = require("../constants");

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
    const { time, condo, unit, staff, gate, score } = req.body;
    let { customer } = req.body;

    const customerObj = new Customer(customer);

    const customerCreated = await CustomerService.create(customerObj);
    customer = customerCreated.id;
    const event = new Event({
      time,
      condo,
      unit,
      staff,
      gate,
      score,
      customer,
    });
    const eventCreated = await EventService.create(event);
    if (eventCreated.error) {
      next(eventCreated.error);
    }

    // Send message to customer
    const customerPhoneNumbers = customerCreated.phone;
    const message =
      messagesResponses[1].message || "Thank you for checking in our condo";
    let response;
    try {
      response = await TwilioService.sendSMS({
        to: customerPhoneNumbers,
        body: message,
      });
    } catch (error) {
      console.log("Error in sending message", error.message);
    }
    console.log(response);
    req.body = eventCreated;
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

  static async getResponseFromTwilio(req, _, next) {
    const { Body, From } = req.body;
    console.log(Body, From);
    await TwilioService.sendSMS({
      to: From,
      body: messagesResponses[2].message,
    });
    const response = { Body, From };
    req.body = response;
    next();
  }
}

module.exports = EventController;
