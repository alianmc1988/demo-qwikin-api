const GateController = require("../../controllers/gateController");
const { Router } = require("express");
const router = Router();

router.get("/", GateController.getAll, (req, res) => {
  res.status(200).json(req.body);
});
router.get("/:id", GateController.getOne, (req, res) => {
  res.status(200).json(req.body);
});
router.post("/", GateController.create, (req, res) => {
  res.status(201).json(req.body);
});
router.put("/:id", GateController.update, (req, res) => {
  res.status(200).json(req.body);
});
router.delete("/:id", GateController.delete, (req, res) => {
  res.status(200).json(req.body);
});

module.exports = router;
