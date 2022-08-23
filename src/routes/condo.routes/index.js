const router = require("express").Router();
const CondoController = require("../../controllers/condoController");

router.post("/", CondoController.createCondo, (req, res) => {
  return res.status(201).json(req.body);
});

router.get("/", CondoController.getAllCondos, (req, res) => {
  return res.status(200).json(req.body);
});

router.get("/:id", CondoController.getOneCondo, (req, res) => {
  return res.status(200).json(req.body);
});

router.put("/:id", CondoController.updateCondo, (req, res) => {
  return res.status(200).json(req.body);
});

router.delete("/:id", CondoController.deleteCondo, (req, res) => {
  return res.status(200).json(req.body);
});

module.exports = router;
