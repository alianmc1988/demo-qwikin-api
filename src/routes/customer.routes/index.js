const router = require("express").Router();
const CustomerController = require("../../controllers/customerController");

router.get("/", CustomerController.getAllCustomers, (req, res) => {
  res.status(200).json(req.body);
});

router.get("/:id", CustomerController.getOneCustomer, (req, res) => {
  res.status(200).json(req.body);
});

router.post("/", CustomerController.createCustomer, (req, res) => {
  res.status(201).json(req.body);
});

router.put("/:id", CustomerController.updateCustomer, (req, res) => {
  res.status(200).json(req.body);
});

router.delete("/:id", CustomerController.deleteCustomer, (req, res) => {
  res.status(200).json(req.body);
});

module.exports = router;
