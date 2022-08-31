const Router = require("express").Router;
const eventController = require("../controllers/eventController.js");
const db = require("../database/database.json");

const router = Router();

router.get("/", (req, res) => {
  const ratings = db.ratings;
  res.status(200).json(ratings);
});

module.exports = router;
