const properties = require("./config/properties");
const app = require("./app");

app.listen(properties.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on ${properties.PORT} port.`);
});
