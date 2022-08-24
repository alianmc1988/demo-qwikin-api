const router = require("express").Router();
const EventController = require("../../controllers/eventController.js");

router.post("/checkin", EventController.create, (req, res) => {
  res.status(201).json(req.body);
});

// Get what twilio sends
router.get("/checkin", EventController.getResponseFromTwilio, (req, res) => {
  res.status(200).json({ message: "success" });
});

module.exports = router;
