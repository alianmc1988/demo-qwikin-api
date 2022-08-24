require("dotenv").config();
const PORT = process.env.PORT || 8080;
const ROOT_URL = process.env.ROOT_URL || `/`;

module.exports = {
  PORT,
  ROOT_URL,
};
