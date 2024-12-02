const mongoose = require("mongoose");

const MolecularProfileSchema = new mongoose.Schema({});

const MolecularProfileModel = mongoose.model(
  "MolecularProfileModel",
  MolecularProfileSchema
);

module.exports = {
  MolecularProfileSchema,
  MolecularProfileModel,
};
