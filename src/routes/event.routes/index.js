const router = require("express").Router();
const EventController = require("../../controllers/eventController.js");

router.post("/checkin/pass/:id", EventController.create, (req, res) => {
  res.status(201).json(req.body);
});

router.post("/checkin/create-pass", EventController.checkinPass);

router.post("/checkin/response-twilio", EventController.getResponseFromTwilio);

router.post("/checkin/:id", EventController.create, (req, res) => {
  res.status(201).json(req.body);
});

router.get("/list-pass", EventController.getAll, (req, res) => {
  res.status(200).json(req.body);
});

module.exports = router;
