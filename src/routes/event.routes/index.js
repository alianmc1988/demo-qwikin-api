const router = require("express").Router();
const EventController = require("../../controllers/eventController.js");

router.post("/checkin", EventController.create, (req, res) => {
  res.status(201).json(req.body);
});

// Get what twilio sends
router.post(
  "/checkin/response-twilio",
  EventController.getResponseFromTwilio,
  (req, res) => {
    res.status(200).json({ message: "success" });
  }
);

router.get("/", EventController.getAll, (req, res) => {
  res.status(200).json(req.body);
});

module.exports = router;
