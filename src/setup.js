const fs = require("fs");
const path = require("path");
const initialData = require("./database/initial");

const objectFromFile = (filePath) => {
  const file = fs.readFileSync(filePath, "utf8");
  return JSON.parse(file);
};

const writeToFile = (filePath, object) => {
  const file = JSON.stringify(object, null, 2);
  fs.writeFileSync(filePath, file);
};
(function setupDB() {
  const filePath = path.join(__dirname, "database", "database.json");
  const database = objectFromFile(filePath);
  if (database.condos.length === 0) {
    const { condos, events, units, staff, gates } = initialData;
    database.condos = condos;
    database.events = events;
    database.units = units;
    database.staff = staff;
    database.gates = gates;
    writeToFile(filePath, database);
    console.log("Database setup complete");
    return;
  }
  return;
})();
