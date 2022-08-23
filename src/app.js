const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const { ROOT_PATH } = require("./config.js");
const { json } = require("body-parser");
const errorHandlerMiddleware = require("./middlewares/errorHandlerMiddleware.js");

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use(`${ROOT_PATH}/condo`, require("./routes/condo.routes"));
app.use(`${ROOT_PATH}/event`, require("./routes/event.routes"));
app.use(`${ROOT_PATH}/customer`, require("./routes/customer.routes"));
app.use(`${ROOT_PATH}/gate`, require("./routes/gate.routes"));
app.use(`${ROOT_PATH}/staff`, require("./routes/staff.routes"));
app.use(`${ROOT_PATH}/unit`, require("./routes/unit.routes"));

// Error handling
app.use(errorHandlerMiddleware);

module.exports = app;
