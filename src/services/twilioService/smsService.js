const {
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  QWIKIN_PHONE_NUMBER,
} = require(`../../config`);
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(
  "AC80bc652a4d2a9ab23d89734171a9b2db",
  authToken
);
// const MessagingResponse = require("twilio").twiml.MessagingResponse;
// const CustomerModel = require("../../models/CustomerModel");
// const EventModel = require("../../models/EventModel");
class TwilioService {
  static async sendSMS({ to, body }) {
    const response = await client.messages.create({
      body,
      from: QWIKIN_PHONE_NUMBER,
      to,
    });

    return response;
  }

  static async getResponseFromTwilio(req) {
    const { Body, From } = req.body;

    return { Body, From };
  }
}

module.exports = TwilioService;
