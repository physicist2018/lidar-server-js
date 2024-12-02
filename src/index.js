require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config/database");
const { ExperimentModel } = require("./v1/models/experiment_model");

// Выполняем подключение к MongoDB
mongoose
  .connect(config.mongoose_conection_string)
  .then((res) => {
    res.set("debug", true);

    ExperimentModel.create({ title: "no-title", comments: "no-comments" })
      .then((m) => {
        m.save();
      })
      .catch((e) => {});
    ExperimentModel.findById("674cac1a1277760bd6a47e33")
      .exec()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    start_server();
  })
  .catch((err) => {
    console.log(err);
  });

function start_server() {
  const IS_PROD = process.env.NODE_ENV === "production";
  // main object
  const app = express();

  // add middlewares
  app.use(cors());
  app.use(morgan("common"));
  app.use(bodyParser.json());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // add routes to our express
  const v1Experiment = require("./v1/routes/experiment_routes");
  const { StatusCodes } = require("http-status-codes");

  app.use("/api/v1/experiments", v1Experiment);

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
}
