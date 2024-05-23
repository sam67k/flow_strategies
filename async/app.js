const express = require("express");
const bodyParser = require("body-parser");
const expressLogger = require("express-bunyan-logger");
const router = require("./routes");

process.on("uncaughtException", (e) => {
  console.log(e);
});

const app = express();

app.use(express.static("assets"));

app.use(bodyParser.json({ limit: "10mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "10mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(
  expressLogger({
    excludes: [
      "headers",
      "req",
      "user-agent",
      "short-body",
      "http-version",
      "req-headers",
      "res-headers",
      "body",
      "res",
    ], // remove extra details from log
  })
);

// Test Route
app.get("/api/test", (req, res) => {
  res.status(200).send("<h1>API BOILERPLATE 2.0</h1>");
});

// routes
app.use("/I/want/title", router);

// catch 404
app.use((req, res) => {
  res.status(404).send("<h1>Not Found</h1>");
});

// error handling
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  req.log.error(err);
  return res.status(err.status || 500).send(`<h1>${err.message}</h1>`);
});

module.exports = app;
