const app = require("./src/app.js");
const { PORT } = require("./src/config.js");
// Initial setup for the app

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
