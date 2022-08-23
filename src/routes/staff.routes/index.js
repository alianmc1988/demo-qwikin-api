const router = require("express").Router();
const StaffController = require("../../controllers/staffController");

router.get("/", StaffController.getAll, (req, res) => {
  res.status(200).json(req.body);
});

router.get("/:id", StaffController.getOne, (req, res) => {
  res.status(200).json(req.body);
});

router.post("/", StaffController.create, (req, res) => {
  res.status(201).json(req.body);
});

router.put("/:id", StaffController.update, (req, res) => {
  res.status(200).json(req.body);
});

router.delete("/:id", StaffController.delete, (req, res) => {
  res.status(200).json(req.body);
});

module.exports = router;
