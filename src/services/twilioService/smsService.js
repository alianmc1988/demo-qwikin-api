const {
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  QWIKIN_PHONE_NUMBER,
} = require(`../../config`);
const client = require("twilio")(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
const messagesPattern = require("./");

const sendSMS = async (to, body) => {
  const response = await client.messages.create({
    body,
    from: QWIKIN_PHONE_NUMBER,
    to,
  });
  return response;
};

const getResponseFromTwilio = async (req, res, next) => {
  const { Body, From } = req.body;
};
