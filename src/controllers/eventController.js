const MessagingResponse = require("twilio").twiml.MessagingResponse;
const Event = require("../entities/Event");
const Customer = require("../entities/Customer");
const { EventService, CustomerService, TwilioService } = require("../services");
const { messagesResponses } = require("../constants");
const Pass = require("../entities/PassEntity");
const db = require("../database/database.json");
const RaitingsEntity = require("../entities/RatingEntity");

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

  // static async create(req, _, next) {
  //   const { time, condo, unit, staff, gate, score } = req.body;
  //   let { customer } = req.body;

  //   const customerObj = new Customer(customer);

  //   const customerCreated = await CustomerService.create(customerObj);
  //   customer = customerCreated.id;
  //   const event = new Event({
  //     time,
  //     condo,
  //     unit,
  //     staff,
  //     gate,
  //     score,
  //     customer,
  //   });
  //   const eventCreated = await EventService.create(event);
  //   if (eventCreated.error) {
  //     next(eventCreated.error);
  //   }

  //   // Send message to customer
  //   const customerPhoneNumbers = customerCreated.name.phone;
  //   const message =
  //     messagesResponses[1].message || "Thank you for checking in our condo";
  //   let response;
  //   console.log(customerPhoneNumbers);
  //   try {
  //     response = await TwilioService.sendSMS({
  //       to: customerPhoneNumbers,
  //       body: message,
  //     });
  //   } catch (error) {
  //     console.log("Error in sending message", error.message);
  //   }
  //   console.log(response);
  //   req.body = eventCreated;
  //   req.body = { ...req.body, twilioResponse: response };
  //   next();
  // }

  static async create(req, _, next) {
    const { id } = req.params;
    console.log("The id: ", id);
    const eventFounded = db.events.find((event) => event.id == id);
    console.log(eventFounded);
    // Send message to customer
    const customerPhoneNumbers = eventFounded.phoneNumber;
    const message =
      messagesResponses[1].message || "Thank you for checking in our condo";
    let response;

    console.log(customerPhoneNumbers);
    try {
      response = await TwilioService.sendSMS({
        to: customerPhoneNumbers,
        body: message,
      });
    } catch (error) {
      console.log("Error in sending message", error.message);
    }
    console.log(response);
    req.body = { ...req.body, twilioResponse: response, eventFounded };
    next();
  }

  static async checkinPass(req, res) {
    const { guestName, unitNumber, condoName, phoneNumber } = req.body;

    const passToCreate = {
      id: new Date().getTime(),
      guestName,
      unitNumber,
      condoName,
      phoneNumber,
    };
    db.events.push(passToCreate);
    res.status(201).json(passToCreate);
  }

  static async update(req, _, next) {
    const body = req.body;
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

  static async getResponseFromTwilio(req, res) {
    const { Body, From } = req.body;

    console.log("==========================TESTING==========================");
    console.log("The body from Twilio: ", Body, "The Sender", From);

    const event = db.events;
    const twiml = new MessagingResponse();
    const eventFounded = event.find((event) => event.phoneNumber === From);

    console.log("The event founded: ", eventFounded);
    const raiting = {
      id: new Date().getTime(),
      guestName: eventFounded.guestName,
      unit: eventFounded.unitNumber,
      condo: eventFounded.condoName,
      score: Body,
    };

    console.log("The raiting: ", raiting);
    db.ratings.push(raiting);
    console.log("raitings table", db.ratings);
    twiml.message(messagesResponses[2].message);
    res.send(twiml.toString());
  }
}

module.exports = EventController;
