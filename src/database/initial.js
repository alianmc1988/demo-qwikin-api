const Condo = require("../entities/Condo");
const Unit = require("../entities/Unit");
const Event = require("../entities/Event");
const Customer = require("../entities/Customer");
const Staff = require("../entities/Staff");
const Gate = require("../entities/Gate");

const condosArr = [new Condo("Condo 1"), new Condo("Condo 2")];

const adjustIdForObj = (obj) => {
  let numId = 0;
  obj.id += numId.toString();
  console.log(obj.id);
  numId++;
  return obj;
};

const createFixedObjArray = (arr) => {
  return arr.map((obj) => adjustIdForObj(obj));
};

const initialData = {
  condos: createFixedObjArray(condosArr),
  units: [new Unit(1), new Unit(2)],
  staff: [new Staff("John"), new Staff("Jane")],
  gates: [new Gate("Gate 1"), new Gate("Gate 2")],
  customers: [new Customer("Customer 1"), new Customer("Customer 2")],
  events: [],
  messages: [],
};

module.exports = initialData;
