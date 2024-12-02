const mongoose = require("mongoose");

const ScatteringRatioSchema = new mongoose.Schema({});

const ScatteringRatioModel = mongoose.model(
  "ScatteringRatioModel",
  ScatteringRatioSchema
);

module.exports = {
  ScatteringRatioModel,
  ScatteringRatioSchema,
};
