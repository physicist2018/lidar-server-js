const mongoose = require("mongoose");
const { MeasurementSchema } = require("./measurement_model");
const { ScatteringRatioSchema } = require("./scattering_ratio_model");
const { MolecularProfileSchema } = require("./molecular_profile");

const ExperimentSchema = new mongoose.Schema({
  Title: { type: String, default: "no-title" },
  Comments: { type: String, default: "no-comments" },
  ExperimentTime: { type: Date, default: Date.now() },
  SpatialRes: { type: Number, min: 1500, max: 1912.5, default: 1500.0 },
  AccumTime: { type: Number, default: 10 },
  ProfileDat: [MeasurementSchema], // это данные профилей Dat
  ProfileDak: [MeasurementSchema], // это данные профилей Dak
  ProfileCmb: [MeasurementSchema], // это результат сшивки данных
  RetrievedData: [ScatteringRatioSchema], // здесь будет
  MolecularProfile: MolecularProfileSchema, // здесь лежит молекулярный профиль
});

const ExperimentModel = mongoose.model("ExperimentModel", ExperimentSchema);

module.exports = { ExperimentModel, ExperimentSchema };
