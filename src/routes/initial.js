const router = require("express").Router();
const data = require("../database/database.json");

router.get("/", (req, res) => {
  res.status(200).send(data);
});

module.exports = router;
