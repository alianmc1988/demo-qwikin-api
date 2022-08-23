const app = require("./src/app.js");
const { PORT } = require("./src/config.js");

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
