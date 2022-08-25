const PORT = process.env.PORT || 8080;
const ROOT_URL = process.env.ROOT_URL || `/`;
const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN || ``;
const QWIKIN_PHONE_NUMBER = process.env.QWIKIN_PHONE_NUMBER || ``;

module.exports = {
  PORT,
  ROOT_URL,
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  QWIKIN_PHONE_NUMBER,
};
