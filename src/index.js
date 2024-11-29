const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const connect = require("./lib/connect");

const IS_PROD = process.env.NODE_ENV === "production";
// main object
const app = express();

// add middlewares
app.use(cors());
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(connect.connect);

// add routes to our express
const v1Experiment = require("./v1/routes/experimentRoutes");
const { StatusCodes } = require("http-status-codes");

app.use("/api/v1/experiments", v1Experiment);
app.use(connect.close);

app.all("*", (_req, res) => {
  res.status(StatusCodes.NOT_FOUND).send({
    msg: "The rout your are searching for does not exists",
  });
});

app.use((err, req, res, next) => {
  IS_PROD && console.error(err);
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
    msg: "There was some internal server error. Please try later.",
  });
});

const PORT = process.env.PORT || 7777;
app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
