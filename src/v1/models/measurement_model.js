const mongoose = require("mongoose");

const MeasurementSchema = new mongoose.Schema({
  MeasurementTime: { type: Date, default: Date.now() },
  ProfileLen: { type: Number, min: 256, max: 2048 },
  ProfileCnt: { type: Number, min: 1, max: 1000 },
  RepetitionRate: { type: Number, min: 1, max: 100, default: 10 },
  Wavelength: { type: Number, min: 300.0, max: 1100.0, default: 532.0 },
});

const MeasurementModel = mongoose.model("MeasurementModel", MeasurementSchema);

module.exports = { MeasurementModel, MeasurementSchema };
