const router = require("express").Router();
const EventController = require("../../controllers/eventController.js");

router.post("/checkin/pass/:id", EventController.create, (req, res) => {
  res.status(201).json(req.body);
});

// Get what twilio sends
router.post("/checkin/create-pass", EventController.checkinPass);

router.post(
  "/checkin/response-twilio/:bodySHA256",
  EventController.getResponseFromTwilio,
  (req, res) => {
    console.log("Called");
    console.log("Called");
    console.log("Called");
    console.log("Called");
    res.status(200).json(req.body);
  }
);

router.get("/list-pass", EventController.getAll, (req, res) => {
  res.status(200).json(req.body);
});

module.exports = router;
