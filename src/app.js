const express = require("express");
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const { ROOT_URL } = require("./config.js");
const bodyParser = require("body-parser");
const errorHandlerMiddleware = require("./middlewares/errorHandlerMiddleware.js");
require("./setup");

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(morgan("dev"));

// routes
app.use(ROOT_URL, require("./routes/initial.js"));
app.use(`${ROOT_URL}/condo`, require("./routes/condo.routes"));
app.use(`${ROOT_URL}/event`, require("./routes/event.routes"));
app.use(`${ROOT_URL}/customer`, require("./routes/customer.routes"));
app.use(`${ROOT_URL}/gate`, require("./routes/gate.routes"));
app.use(`${ROOT_URL}/staff`, require("./routes/staff.routes"));
app.use(`${ROOT_URL}/unit`, require("./routes/unit.routes"));
app.use(`${ROOT_URL}/ratings`, require("./routes/scoresRoutes.js"));

// Error handling
app.use(errorHandlerMiddleware);

module.exports = app;
