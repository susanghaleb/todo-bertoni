const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");

const properties = require("./config/properties");
const router = require("./routes");

const app = express();
app.use(logger("dev"));
app.use(bodyParser.json());

app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.use("/todo", router);

app.listen(properties.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on ${properties.PORT} port.`);
});
