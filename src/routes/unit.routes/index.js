const { Router } = require("express");
const UnitController = require("../../controllers/unitController");

const router = Router();

router.get("/", UnitController.getAll, (req, res) => {
  res.status(200).json(req.body);
});

router.get("/:id", UnitController.getOne, (req, res) => {
  res.status(200).json(req.body);
});

router.post("/", UnitController.create, (req, res) => {
  res.status(201).json(req.body);
});

router.put("/:id", UnitController.update, (req, res) => {
  res.status(200).json(req.body);
});

router.delete("/:id", UnitController.delete, (req, res) => {
  res.status(200).json(req.body);
});

module.exports = router;
